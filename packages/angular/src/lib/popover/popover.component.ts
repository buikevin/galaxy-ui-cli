import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
  ElementRef,
  viewChild,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
export type PopoverTrigger = 'click' | 'hover' | 'focus';

@Component({
  selector: 'g-popover',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="g-popover-wrapper relative inline-block" #wrapperRef>
      <!-- Trigger Element -->
      <div
        class="g-popover-trigger"
        (click)="handleTriggerClick()"
        (mouseenter)="handleTriggerMouseEnter()"
        (mouseleave)="handleTriggerMouseLeave()"
        (focus)="handleTriggerFocus()"
        (blur)="handleTriggerBlur()"
        [attr.aria-describedby]="open() ? 'popover-content' : null"
      >
        <ng-content select="[trigger]"></ng-content>
      </div>

      <!-- Popover Content -->
      @if (open()) {
        <div
          #contentRef
          id="popover-content"
          role="tooltip"
          [class]="popoverClasses()"
          [style]="popoverStyles()"
          (mouseenter)="handleContentMouseEnter()"
          (mouseleave)="handleContentMouseLeave()"
        >
          <!-- Arrow -->
          @if (showArrow()) {
            <div [class]="arrowClasses()" [style]="arrowStyles()"></div>
          }

          <!-- Title -->
          @if (title()) {
            <div class="g-popover-title font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {{ title() }}
            </div>
          }

          <!-- Content -->
          <div class="g-popover-body text-gray-700 dark:text-gray-300">
            @if (content()) {
              {{ content() }}
            } @else {
              <ng-content></ng-content>
            }
          </div>
        </div>
      }
    </div>

    <!-- Backdrop for click outside -->
    @if (open() && trigger() === 'click') {
      <div
        class="fixed inset-0 z-40"
        (click)="handleBackdropClick()"
      ></div>
    }
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class PopoverComponent {
  // ViewChild
  wrapperRef = viewChild<ElementRef>('wrapperRef');
  contentRef = viewChild<ElementRef>('contentRef');

  // Inputs
  title = input<string>();
  content = input<string>();
  placement = input<PopoverPlacement>('top');
  trigger = input<PopoverTrigger>('click');
  showArrow = input(true);
  disabled = input(false);
  defaultOpen = input(false);
  maxWidth = input(300);

  // Outputs
  openChange = output<boolean>();

  // State
  open = signal(false);
  private hoverTimeout: any = null;
  private contentHovered = signal(false);

  constructor() {
    // Set default open state
    effect(() => {
      if (this.defaultOpen()) {
        this.open.set(true);
      }
    });
  }

  popoverClasses = computed(() => {
    const classes = [
      'g-popover-content',
      'absolute',
      'z-50',
      'px-3 py-2',
      'text-sm',
      'bg-white dark:bg-gray-800',
      'border border-gray-200 dark:border-gray-700',
      'rounded-lg',
      'shadow-lg',
      'animate-in fade-in-0 zoom-in-95',
    ];

    return classes.join(' ');
  });

  popoverStyles = computed(() => {
    const styles: any = {
      maxWidth: `${this.maxWidth()}px`,
    };

    return styles;
  });

  arrowClasses = computed(() => {
    const classes = [
      'g-popover-arrow',
      'absolute',
      'w-2 h-2',
      'bg-white dark:bg-gray-800',
      'border-gray-200 dark:border-gray-700',
      'rotate-45',
    ];

    const placement = this.placement();

    // Position arrow based on placement
    if (placement.startsWith('top')) {
      classes.push('bottom-[-4px] border-r border-b');
    } else if (placement.startsWith('bottom')) {
      classes.push('top-[-4px] border-l border-t');
    } else if (placement.startsWith('left')) {
      classes.push('right-[-4px] border-r border-t');
    } else if (placement.startsWith('right')) {
      classes.push('left-[-4px] border-l border-b');
    }

    // Horizontal position for arrow
    if (placement.includes('start')) {
      if (placement.startsWith('top') || placement.startsWith('bottom')) {
        classes.push('left-4');
      } else {
        classes.push('top-2');
      }
    } else if (placement.includes('end')) {
      if (placement.startsWith('top') || placement.startsWith('bottom')) {
        classes.push('right-4');
      } else {
        classes.push('bottom-2');
      }
    } else {
      if (placement.startsWith('top') || placement.startsWith('bottom')) {
        classes.push('left-1/2 -translate-x-1/2');
      } else {
        classes.push('top-1/2 -translate-y-1/2');
      }
    }

    return classes.join(' ');
  });

  arrowStyles = computed(() => {
    return {};
  });

  handleTriggerClick(): void {
    if (this.disabled() || this.trigger() !== 'click') return;
    this.toggleOpen();
  }

  handleTriggerMouseEnter(): void {
    if (this.disabled() || this.trigger() !== 'hover') return;

    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }

    this.setOpen(true);
  }

  handleTriggerMouseLeave(): void {
    if (this.disabled() || this.trigger() !== 'hover') return;

    this.hoverTimeout = setTimeout(() => {
      if (!this.contentHovered()) {
        this.setOpen(false);
      }
    }, 100);
  }

  handleTriggerFocus(): void {
    if (this.disabled() || this.trigger() !== 'focus') return;
    this.setOpen(true);
  }

  handleTriggerBlur(): void {
    if (this.disabled() || this.trigger() !== 'focus') return;
    this.setOpen(false);
  }

  handleContentMouseEnter(): void {
    if (this.trigger() !== 'hover') return;
    this.contentHovered.set(true);

    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }

  handleContentMouseLeave(): void {
    if (this.trigger() !== 'hover') return;
    this.contentHovered.set(false);

    this.hoverTimeout = setTimeout(() => {
      this.setOpen(false);
    }, 100);
  }

  handleBackdropClick(): void {
    this.setOpen(false);
  }

  toggleOpen(): void {
    this.setOpen(!this.open());
  }

  setOpen(value: boolean): void {
    if (this.disabled()) return;

    this.open.set(value);
    this.openChange.emit(value);

    if (value) {
      // Position popover after next render
      setTimeout(() => this.positionPopover(), 0);
    }
  }

  private positionPopover(): void {
    const wrapper = this.wrapperRef()?.nativeElement;
    const content = this.contentRef()?.nativeElement;

    if (!wrapper || !content) return;

    const triggerRect = wrapper.querySelector('.g-popover-trigger')?.getBoundingClientRect();
    if (!triggerRect) return;

    const contentRect = content.getBoundingClientRect();
    const placement = this.placement();
    const gap = 8; // Gap between trigger and popover

    let top = 0;
    let left = 0;

    // Calculate position based on placement
    switch (placement) {
      case 'top':
        top = -(contentRect.height + gap);
        left = (triggerRect.width - contentRect.width) / 2;
        break;
      case 'top-start':
        top = -(contentRect.height + gap);
        left = 0;
        break;
      case 'top-end':
        top = -(contentRect.height + gap);
        left = triggerRect.width - contentRect.width;
        break;
      case 'bottom':
        top = triggerRect.height + gap;
        left = (triggerRect.width - contentRect.width) / 2;
        break;
      case 'bottom-start':
        top = triggerRect.height + gap;
        left = 0;
        break;
      case 'bottom-end':
        top = triggerRect.height + gap;
        left = triggerRect.width - contentRect.width;
        break;
      case 'left':
        top = (triggerRect.height - contentRect.height) / 2;
        left = -(contentRect.width + gap);
        break;
      case 'left-start':
        top = 0;
        left = -(contentRect.width + gap);
        break;
      case 'left-end':
        top = triggerRect.height - contentRect.height;
        left = -(contentRect.width + gap);
        break;
      case 'right':
        top = (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.width + gap;
        break;
      case 'right-start':
        top = 0;
        left = triggerRect.width + gap;
        break;
      case 'right-end':
        top = triggerRect.height - contentRect.height;
        left = triggerRect.width + gap;
        break;
    }

    content.style.top = `${top}px`;
    content.style.left = `${left}px`;
  }
}

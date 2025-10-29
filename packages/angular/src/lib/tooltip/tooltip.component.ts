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

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'g-tooltip',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="g-tooltip-wrapper relative inline-block" #wrapperRef>
      <!-- Trigger Element -->
      <div
        class="g-tooltip-trigger inline-block"
        (mouseenter)="handleMouseEnter()"
        (mouseleave)="handleMouseLeave()"
        (focus)="handleFocus()"
        (blur)="handleBlur()"
        [attr.aria-describedby]="visible() ? 'tooltip-content' : null"
      >
        <ng-content></ng-content>
      </div>

      <!-- Tooltip Content -->
      @if (visible()) {
        <div
          #contentRef
          id="tooltip-content"
          role="tooltip"
          [class]="tooltipClasses()"
          [style]="tooltipStyles()"
        >
          <!-- Arrow -->
          <div [class]="arrowClasses()"></div>

          <!-- Content -->
          <div class="relative z-10">
            {{ content() }}
          </div>
        </div>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class TooltipComponent {
  // ViewChild
  wrapperRef = viewChild<ElementRef>('wrapperRef');
  contentRef = viewChild<ElementRef>('contentRef');

  // Inputs
  content = input.required<string>();
  placement = input<TooltipPlacement>('top');
  disabled = input(false);
  showDelay = input(0);
  hideDelay = input(0);

  // Outputs
  visibleChange = output<boolean>();

  // State
  visible = signal(false);
  private showTimeout: any = null;
  private hideTimeout: any = null;

  tooltipClasses = computed(() => {
    const classes = [
      'g-tooltip-content',
      'absolute z-50',
      'px-3 py-1.5',
      'text-xs text-white',
      'bg-gray-900 dark:bg-gray-700',
      'rounded-md',
      'animate-in fade-in-0 zoom-in-95',
      'whitespace-nowrap',
      'max-w-xs',
    ];

    return classes.join(' ');
  });

  tooltipStyles = computed(() => {
    return {};
  });

  arrowClasses = computed(() => {
    const classes = [
      'g-tooltip-arrow',
      'absolute',
      'w-2 h-2',
      'bg-gray-900 dark:bg-gray-700',
      'rotate-45',
    ];

    const placement = this.placement();

    // Position arrow based on placement
    switch (placement) {
      case 'top':
        classes.push('bottom-[-4px] left-1/2 -translate-x-1/2');
        break;
      case 'bottom':
        classes.push('top-[-4px] left-1/2 -translate-x-1/2');
        break;
      case 'left':
        classes.push('right-[-4px] top-1/2 -translate-y-1/2');
        break;
      case 'right':
        classes.push('left-[-4px] top-1/2 -translate-y-1/2');
        break;
    }

    return classes.join(' ');
  });

  handleMouseEnter(): void {
    if (this.disabled()) return;

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }

    const delay = this.showDelay();
    if (delay > 0) {
      this.showTimeout = setTimeout(() => {
        this.show();
      }, delay);
    } else {
      this.show();
    }
  }

  handleMouseLeave(): void {
    if (this.disabled()) return;

    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }

    const delay = this.hideDelay();
    if (delay > 0) {
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, delay);
    } else {
      this.hide();
    }
  }

  handleFocus(): void {
    if (this.disabled()) return;
    this.show();
  }

  handleBlur(): void {
    if (this.disabled()) return;
    this.hide();
  }

  show(): void {
    if (this.disabled()) return;

    this.visible.set(true);
    this.visibleChange.emit(true);

    // Position tooltip after next render
    setTimeout(() => this.positionTooltip(), 0);
  }

  hide(): void {
    this.visible.set(false);
    this.visibleChange.emit(false);
  }

  private positionTooltip(): void {
    const wrapper = this.wrapperRef()?.nativeElement;
    const content = this.contentRef()?.nativeElement;

    if (!wrapper || !content) return;

    const triggerRect = wrapper.querySelector('.g-tooltip-trigger')?.getBoundingClientRect();
    if (!triggerRect) return;

    const contentRect = content.getBoundingClientRect();
    const placement = this.placement();
    const gap = 8; // Gap between trigger and tooltip

    let top = 0;
    let left = 0;

    // Calculate position based on placement
    switch (placement) {
      case 'top':
        top = -(contentRect.height + gap);
        left = (triggerRect.width - contentRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.height + gap;
        left = (triggerRect.width - contentRect.width) / 2;
        break;
      case 'left':
        top = (triggerRect.height - contentRect.height) / 2;
        left = -(contentRect.width + gap);
        break;
      case 'right':
        top = (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.width + gap;
        break;
    }

    content.style.top = `${top}px`;
    content.style.left = `${left}px`;
  }
}

import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
  ElementRef,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, AlertCircle } from 'lucide-angular';

export type PopconfirmPlacement = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'g-popconfirm',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="g-popconfirm-wrapper relative inline-block" #wrapperRef>
      <!-- Trigger Element -->
      <div
        class="g-popconfirm-trigger"
        (click)="handleTriggerClick()"
      >
        <ng-content select="[trigger]"></ng-content>
      </div>

      <!-- Popconfirm Content -->
      @if (open()) {
        <div
          #contentRef
          role="alertdialog"
          [class]="popconfirmClasses()"
          [style]="popconfirmStyles()"
        >
          <!-- Arrow -->
          <div [class]="arrowClasses()"></div>

          <!-- Content -->
          <div class="relative z-10">
            <!-- Icon & Title -->
            <div class="flex items-start gap-2 mb-3">
              @if (showIcon()) {
                <lucide-icon
                  [img]="icon()"
                  [size]="16"
                  class="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0"
                ></lucide-icon>
              }
              <div class="flex-1">
                <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {{ title() }}
                </div>
                @if (description()) {
                  <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {{ description() }}
                  </div>
                }
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center justify-end gap-2">
              <button
                (click)="handleCancel()"
                [disabled]="loading()"
                class="px-3 py-1.5 text-xs font-medium rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ cancelText() }}
              </button>
              <button
                (click)="handleConfirm()"
                [disabled]="loading()"
                [class]="confirmButtonClasses()"
              >
                @if (loading()) {
                  <span class="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></span>
                }
                {{ okText() }}
              </button>
            </div>
          </div>
        </div>
      }
    </div>

    <!-- Backdrop for click outside -->
    @if (open()) {
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
export class PopconfirmComponent {
  // Icons
  readonly AlertCircle = AlertCircle;

  // ViewChild
  wrapperRef = viewChild<ElementRef>('wrapperRef');
  contentRef = viewChild<ElementRef>('contentRef');

  // Inputs
  title = input.required<string>();
  description = input<string>();
  okText = input('OK');
  cancelText = input('Cancel');
  okType = input<'primary' | 'danger'>('primary');
  placement = input<PopconfirmPlacement>('top');
  disabled = input(false);
  showIcon = input(true);
  icon = input(AlertCircle);

  // Outputs
  confirm = output<void>();
  cancel = output<void>();
  openChange = output<boolean>();

  // State
  open = signal(false);
  loading = signal(false);

  popconfirmClasses = computed(() => {
    const classes = [
      'g-popconfirm-content',
      'absolute',
      'z-50',
      'p-3',
      'bg-white dark:bg-gray-800',
      'border border-gray-200 dark:border-gray-700',
      'rounded-lg',
      'shadow-lg',
      'animate-in fade-in-0 zoom-in-95',
      'min-w-[280px] max-w-xs',
    ];

    return classes.join(' ');
  });

  popconfirmStyles = computed(() => {
    return {};
  });

  arrowClasses = computed(() => {
    const classes = [
      'g-popconfirm-arrow',
      'absolute',
      'w-2 h-2',
      'bg-white dark:bg-gray-800',
      'border-gray-200 dark:border-gray-700',
      'rotate-45',
    ];

    const placement = this.placement();

    // Position arrow based on placement
    if (placement === 'top') {
      classes.push('bottom-[-4px] left-1/2 -translate-x-1/2 border-r border-b');
    } else if (placement === 'bottom') {
      classes.push('top-[-4px] left-1/2 -translate-x-1/2 border-l border-t');
    } else if (placement === 'left') {
      classes.push('right-[-4px] top-1/2 -translate-y-1/2 border-r border-t');
    } else if (placement === 'right') {
      classes.push('left-[-4px] top-1/2 -translate-y-1/2 border-l border-b');
    }

    return classes.join(' ');
  });

  confirmButtonClasses = computed(() => {
    const classes = [
      'px-3 py-1.5 text-xs font-medium rounded border transition-colors',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ];

    if (this.okType() === 'danger') {
      classes.push(
        'border-red-600 bg-red-600 text-white',
        'hover:bg-red-700 hover:border-red-700'
      );
    } else {
      classes.push(
        'border-blue-600 bg-blue-600 text-white',
        'hover:bg-blue-700 hover:border-blue-700'
      );
    }

    return classes.join(' ');
  });

  handleTriggerClick(): void {
    if (this.disabled()) return;
    this.toggleOpen();
  }

  handleBackdropClick(): void {
    this.setOpen(false);
  }

  async handleConfirm(): Promise<void> {
    this.loading.set(true);
    this.confirm.emit();

    // Wait a bit for potential async operations
    await new Promise(resolve => setTimeout(resolve, 100));

    this.loading.set(false);
    this.setOpen(false);
  }

  handleCancel(): void {
    this.cancel.emit();
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
      // Position popconfirm after next render
      setTimeout(() => this.positionPopconfirm(), 0);
    }
  }

  private positionPopconfirm(): void {
    const wrapper = this.wrapperRef()?.nativeElement;
    const content = this.contentRef()?.nativeElement;

    if (!wrapper || !content) return;

    const triggerRect = wrapper.querySelector('.g-popconfirm-trigger')?.getBoundingClientRect();
    if (!triggerRect) return;

    const contentRect = content.getBoundingClientRect();
    const placement = this.placement();
    const gap = 8;

    let top = 0;
    let left = 0;

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

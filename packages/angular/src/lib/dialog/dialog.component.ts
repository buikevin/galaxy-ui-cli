import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X } from 'lucide-angular';

export type DialogSize = 'small' | 'medium' | 'large' | 'full';

@Component({
  selector: 'g-dialog',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (open()) {
      <!-- Backdrop -->
      <div
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        [class.animate-in]="open()"
        [class.fade-in-0]="open()"
        (click)="handleBackdropClick()"
      ></div>

      <!-- Dialog -->
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          [class]="dialogClasses()"
          role="dialog"
          aria-modal="true"
          [attr.aria-labelledby]="title() ? 'dialog-title' : null"
          [attr.aria-describedby]="description() ? 'dialog-description' : null"
        >
          <!-- Header -->
          @if (showHeader()) {
            <div [class]="headerClasses()">
              <div>
                @if (title()) {
                  <h2 id="dialog-title" class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {{ title() }}
                  </h2>
                }
                @if (description()) {
                  <p id="dialog-description" class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {{ description() }}
                  </p>
                }
              </div>
              @if (closable()) {
                <button
                  (click)="handleClose()"
                  class="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none dark:ring-offset-gray-950 dark:focus:ring-gray-800"
                  [attr.aria-label]="'Close'"
                >
                  <lucide-icon [img]="XIcon" [size]="20" class="text-gray-500 dark:text-gray-400"></lucide-icon>
                </button>
              }
            </div>
          }

          <!-- Body -->
          <div [class]="bodyClasses()">
            <ng-content></ng-content>
          </div>

          <!-- Footer -->
          @if (showFooter()) {
            <div [class]="footerClasses()">
              <ng-content select="[footer]"></ng-content>
            </div>
          }
        </div>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class DialogComponent {
  // Icons
  readonly XIcon = X;

  // Inputs
  open = input(false);
  title = input<string>();
  description = input<string>();
  size = input<DialogSize>('medium');
  closable = input(true);
  maskClosable = input(true);
  showHeader = input(true);
  showFooter = input(false);

  // Outputs
  openChange = output<boolean>();
  close = output<void>();

  // State
  private isOpen = signal(false);

  constructor() {
    effect(() => {
      this.isOpen.set(this.open());

      // Prevent body scroll when dialog is open
      if (this.open()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  dialogClasses = computed(() => {
    const classes = [
      'g-dialog',
      'relative',
      'w-full',
      'bg-white dark:bg-gray-900',
      'rounded-lg',
      'shadow-lg',
      'flex flex-col',
      'animate-in fade-in-0 zoom-in-95',
    ];

    const size = this.size();

    const sizeClasses = {
      small: 'max-w-md',
      medium: 'max-w-lg',
      large: 'max-w-2xl',
      full: 'max-w-7xl',
    };

    classes.push(sizeClasses[size]);

    // Max height to prevent overflow
    classes.push('max-h-[90vh]');

    return classes.join(' ');
  });

  headerClasses = computed(() => {
    return 'g-dialog-header flex items-start justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800';
  });

  bodyClasses = computed(() => {
    return 'g-dialog-body flex-1 overflow-y-auto px-6 py-4';
  });

  footerClasses = computed(() => {
    return 'g-dialog-footer px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end gap-2';
  });

  handleBackdropClick(): void {
    if (this.maskClosable()) {
      this.handleClose();
    }
  }

  handleClose(): void {
    this.openChange.emit(false);
    this.close.emit();
  }
}

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

export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';
export type DrawerSize = 'small' | 'medium' | 'large' | 'full';

@Component({
  selector: 'g-drawer',
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

      <!-- Drawer -->
      <div
        [class]="drawerClasses()"
        role="dialog"
        aria-modal="true"
        [attr.aria-labelledby]="title() ? 'drawer-title' : null"
      >
        <!-- Header -->
        @if (showHeader()) {
          <div [class]="headerClasses()">
            <h2 id="drawer-title" class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {{ title() }}
            </h2>
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
export class DrawerComponent {
  // Icons
  readonly XIcon = X;

  // Inputs
  open = input(false);
  title = input<string>();
  placement = input<DrawerPlacement>('right');
  size = input<DrawerSize>('medium');
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

      // Prevent body scroll when drawer is open
      if (this.open()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  drawerClasses = computed(() => {
    const classes = [
      'g-drawer',
      'fixed z-50',
      'bg-white dark:bg-gray-900',
      'border-gray-200 dark:border-gray-800',
      'shadow-lg',
      'flex flex-col',
    ];

    const placement = this.placement();
    const size = this.size();

    // Placement classes
    switch (placement) {
      case 'top':
        classes.push('top-0 left-0 right-0 border-b');
        classes.push('animate-in slide-in-from-top');
        break;
      case 'right':
        classes.push('top-0 right-0 bottom-0 border-l');
        classes.push('animate-in slide-in-from-right');
        break;
      case 'bottom':
        classes.push('bottom-0 left-0 right-0 border-t');
        classes.push('animate-in slide-in-from-bottom');
        break;
      case 'left':
        classes.push('top-0 left-0 bottom-0 border-r');
        classes.push('animate-in slide-in-from-left');
        break;
    }

    // Size classes
    const isVertical = placement === 'left' || placement === 'right';

    if (isVertical) {
      const widthClasses = {
        small: 'w-80',
        medium: 'w-96',
        large: 'w-[32rem]',
        full: 'w-full',
      };
      classes.push(widthClasses[size]);
    } else {
      const heightClasses = {
        small: 'h-64',
        medium: 'h-80',
        large: 'h-96',
        full: 'h-full',
      };
      classes.push(heightClasses[size]);
    }

    return classes.join(' ');
  });

  headerClasses = computed(() => {
    return 'g-drawer-header flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800';
  });

  bodyClasses = computed(() => {
    return 'g-drawer-body flex-1 overflow-y-auto px-6 py-4';
  });

  footerClasses = computed(() => {
    return 'g-drawer-footer px-6 py-4 border-t border-gray-200 dark:border-gray-800';
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

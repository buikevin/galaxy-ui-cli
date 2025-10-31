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

export interface TourStep {
  target: string; // CSS selector
  title: string;
  description?: string;
  cover?: string; // Image URL
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  mask?: boolean;
  nextButtonText?: string;
  prevButtonText?: string;
}

@Component({
  selector: 'g-tour',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (open() && currentStep()) {
      <!-- Mask -->
      @if (currentStep()!.mask !== false && mask()) {
        <div class="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm animate-in fade-in-0"></div>
      }

      <!-- Spotlight for target element -->
      @if (targetElement()) {
        <div
          class="fixed z-[1001] pointer-events-none"
          [style]="spotlightStyles()"
        >
          <div class="absolute inset-0 ring-4 ring-white/30 rounded-lg"></div>
        </div>
      }

      <!-- Tour popover -->
      <div
        class="fixed z-[1002]"
        [style]="popoverStyles()"
      >
        <div [class]="popoverClasses()">
          <!-- Close button -->
          @if (closable()) {
            <button
              (click)="handleClose()"
              class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              [attr.aria-label]="'Close tour'"
            >
              <lucide-icon [img]="XIcon" [size]="16"></lucide-icon>
            </button>
          }

          <!-- Cover Image -->
          @if (currentStep()!.cover) {
            <div class="mb-3 -mt-4 -mx-4">
              <img
                [src]="currentStep()!.cover"
                [alt]="currentStep()!.title"
                class="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
          }

          <!-- Content -->
          <div class="pr-6">
            <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {{ currentStep()!.title }}
            </h3>

            @if (currentStep()!.description) {
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {{ currentStep()!.description }}
              </p>
            }
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
            <!-- Step indicator -->
            <div class="flex items-center gap-1">
              @for (step of steps(); track $index) {
                <div
                  [class]="indicatorDotClasses($index)"
                  (click)="goToStep($index)"
                ></div>
              }
            </div>

            <!-- Navigation buttons -->
            <div class="flex items-center gap-2">
              @if (currentStepIndex() > 0) {
                <button
                  (click)="handlePrev()"
                  class="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {{ currentStep()!.prevButtonText || 'Previous' }}
                </button>
              }

              @if (currentStepIndex() < steps().length - 1) {
                <button
                  (click)="handleNext()"
                  class="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  {{ currentStep()!.nextButtonText || 'Next' }}
                </button>
              } @else {
                <button
                  (click)="handleFinish()"
                  class="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Finish
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Arrow -->
        @if (currentStep()!.placement !== 'center') {
          <div [class]="arrowClasses()"></div>
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
export class TourComponent {
  // Icons
  readonly XIcon = X;

  // Inputs
  open = input(false);
  steps = input<TourStep[]>([]);
  current = input(0);
  mask = input(true);
  closable = input(true);

  // Outputs
  openChange = output<boolean>();
  currentChange = output<number>();
  finish = output<void>();
  close = output<void>();

  // State
  currentStepIndex = signal(0);
  targetElement = signal<HTMLElement | null>(null);
  popoverPosition = signal<{ top: number; left: number }>({ top: 0, left: 0 });

  constructor() {
    // Sync current index with input
    effect(() => {
      this.currentStepIndex.set(this.current());
    });

    // Update target element when step changes
    effect(() => {
      if (this.open() && this.currentStep()) {
        this.updateTargetElement();
      }
    });
  }

  currentStep = computed(() => {
    const index = this.currentStepIndex();
    return this.steps()[index];
  });

  popoverClasses = computed(() => {
    const classes = [
      'g-tour-popover',
      'relative',
      'bg-white dark:bg-gray-800',
      'border border-gray-200 dark:border-gray-700',
      'rounded-lg',
      'shadow-lg',
      'p-4',
      'w-80',
      'max-w-sm',
      'animate-in fade-in-0 zoom-in-95',
    ];

    return classes.join(' ');
  });

  popoverStyles = computed(() => {
    const pos = this.popoverPosition();
    return {
      top: `${pos.top}px`,
      left: `${pos.left}px`,
    };
  });

  spotlightStyles = computed(() => {
    const el = this.targetElement();
    if (!el) return {};

    const rect = el.getBoundingClientRect();
    return {
      top: `${rect.top - 4}px`,
      left: `${rect.left - 4}px`,
      width: `${rect.width + 8}px`,
      height: `${rect.height + 8}px`,
    };
  });

  arrowClasses = computed(() => {
    const classes = [
      'g-tour-arrow',
      'absolute',
      'w-3 h-3',
      'bg-white dark:bg-gray-800',
      'border-gray-200 dark:border-gray-700',
      'rotate-45',
    ];

    const placement = this.currentStep()?.placement || 'bottom';

    switch (placement) {
      case 'top':
        classes.push('bottom-[-6px] left-1/2 -translate-x-1/2 border-r border-b');
        break;
      case 'bottom':
        classes.push('top-[-6px] left-1/2 -translate-x-1/2 border-l border-t');
        break;
      case 'left':
        classes.push('right-[-6px] top-1/2 -translate-y-1/2 border-r border-t');
        break;
      case 'right':
        classes.push('left-[-6px] top-1/2 -translate-y-1/2 border-l border-b');
        break;
    }

    return classes.join(' ');
  });

  indicatorDotClasses = computed(() => {
    return (index: number) => {
      const classes = ['w-2 h-2 rounded-full cursor-pointer transition-all'];

      if (index === this.currentStepIndex()) {
        classes.push('bg-blue-600 w-4');
      } else {
        classes.push('bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500');
      }

      return classes.join(' ');
    };
  });

  updateTargetElement(): void {
    const step = this.currentStep();
    if (!step) return;

    const element = document.querySelector(step.target) as HTMLElement;
    this.targetElement.set(element);

    if (element) {
      // Calculate popover position
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        const placement = step.placement || 'bottom';
        const gap = 12;
        const popoverWidth = 320;
        const popoverHeight = 200; // Estimated

        let top = 0;
        let left = 0;

        switch (placement) {
          case 'top':
            top = rect.top - popoverHeight - gap;
            left = rect.left + rect.width / 2 - popoverWidth / 2;
            break;
          case 'bottom':
            top = rect.bottom + gap;
            left = rect.left + rect.width / 2 - popoverWidth / 2;
            break;
          case 'left':
            top = rect.top + rect.height / 2 - popoverHeight / 2;
            left = rect.left - popoverWidth - gap;
            break;
          case 'right':
            top = rect.top + rect.height / 2 - popoverHeight / 2;
            left = rect.right + gap;
            break;
          case 'center':
            top = window.innerHeight / 2 - popoverHeight / 2;
            left = window.innerWidth / 2 - popoverWidth / 2;
            break;
        }

        // Keep within viewport
        top = Math.max(gap, Math.min(top, window.innerHeight - popoverHeight - gap));
        left = Math.max(gap, Math.min(left, window.innerWidth - popoverWidth - gap));

        this.popoverPosition.set({ top, left });

        // Scroll element into view
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
    }
  }

  handleNext(): void {
    const nextIndex = this.currentStepIndex() + 1;
    if (nextIndex < this.steps().length) {
      this.goToStep(nextIndex);
    }
  }

  handlePrev(): void {
    const prevIndex = this.currentStepIndex() - 1;
    if (prevIndex >= 0) {
      this.goToStep(prevIndex);
    }
  }

  goToStep(index: number): void {
    this.currentStepIndex.set(index);
    this.currentChange.emit(index);
  }

  handleFinish(): void {
    this.finish.emit();
    this.handleClose();
  }

  handleClose(): void {
    this.openChange.emit(false);
    this.close.emit();
  }
}

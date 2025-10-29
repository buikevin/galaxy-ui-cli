import {
  Component,
  input,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Loader2 } from 'lucide-angular';

export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerType = 'border' | 'grow' | 'dots' | 'pulse' | 'icon';

@Component({
  selector: 'g-spinner',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="wrapperClasses()">
      @if (spinning()) {
        <div [class]="spinnerWrapperClasses()">
          @if (type() === 'icon') {
            <lucide-icon
              [img]="Loader2"
              [size]="iconSize()"
              class="animate-spin"
              [class]="colorClasses()"
            ></lucide-icon>
          } @else if (type() === 'border') {
            <div [class]="borderSpinnerClasses()"></div>
          } @else if (type() === 'grow') {
            <div [class]="growSpinnerClasses()"></div>
          } @else if (type() === 'dots') {
            <div class="flex items-center gap-1">
              @for (dot of [0, 1, 2]; track dot) {
                <div
                  [class]="dotClasses()"
                  [style.animation-delay]="dot * 150 + 'ms'"
                ></div>
              }
            </div>
          } @else if (type() === 'pulse') {
            <div [class]="pulseSpinnerClasses()"></div>
          }

          @if (tip()) {
            <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {{ tip() }}
            </div>
          }
        </div>
      }

      <!-- Content -->
      @if (!fullscreen()) {
        <div [class]="contentClasses()">
          <ng-content></ng-content>
        </div>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      @keyframes spinner-border {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes spinner-grow {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }

      @keyframes spinner-dot {
        0%, 80%, 100% {
          transform: scale(0);
          opacity: 0.3;
        }
        40% {
          transform: scale(1);
          opacity: 1;
        }
      }

      @keyframes spinner-pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.3;
        }
      }
    `,
  ],
})
export class SpinnerComponent {
  // Icons
  readonly Loader2 = Loader2;

  // Inputs
  spinning = input(true);
  type = input<SpinnerType>('icon');
  size = input<SpinnerSize>('medium');
  tip = input<string>();
  fullscreen = input(false);
  delay = input(0);

  wrapperClasses = computed(() => {
    const classes = ['g-spinner-wrapper'];

    if (this.fullscreen()) {
      classes.push('fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm');
    } else {
      classes.push('relative');
    }

    return classes.join(' ');
  });

  spinnerWrapperClasses = computed(() => {
    const classes = ['g-spinner flex flex-col items-center justify-center'];

    if (this.fullscreen()) {
      classes.push('h-full');
    } else {
      classes.push('absolute inset-0 bg-white/80 dark:bg-gray-900/80 z-10');
    }

    return classes.join(' ');
  });

  contentClasses = computed(() => {
    const classes = [];

    if (this.spinning()) {
      classes.push('pointer-events-none select-none opacity-50');
    }

    return classes.join(' ');
  });

  colorClasses = computed(() => {
    return 'text-blue-600 dark:text-blue-400';
  });

  iconSize = computed(() => {
    const sizes = {
      small: 16,
      medium: 24,
      large: 32,
    };
    return sizes[this.size()];
  });

  borderSpinnerClasses = computed(() => {
    const classes = [
      'rounded-full border-2 border-gray-200 dark:border-gray-700 border-t-blue-600 dark:border-t-blue-400',
      'animate-[spinner-border_0.8s_linear_infinite]',
    ];

    const sizeClasses = {
      small: 'w-4 h-4',
      medium: 'w-6 h-6',
      large: 'w-8 h-8',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  growSpinnerClasses = computed(() => {
    const classes = [
      'rounded-full bg-blue-600 dark:bg-blue-400',
      'animate-[spinner-grow_1s_ease-in-out_infinite]',
    ];

    const sizeClasses = {
      small: 'w-4 h-4',
      medium: 'w-6 h-6',
      large: 'w-8 h-8',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  dotClasses = computed(() => {
    const classes = [
      'rounded-full bg-blue-600 dark:bg-blue-400',
      'animate-[spinner-dot_1.4s_ease-in-out_infinite]',
    ];

    const sizeClasses = {
      small: 'w-1.5 h-1.5',
      medium: 'w-2 h-2',
      large: 'w-2.5 h-2.5',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  pulseSpinnerClasses = computed(() => {
    const classes = [
      'rounded-full bg-blue-600 dark:bg-blue-400',
      'animate-[spinner-pulse_1.5s_ease-in-out_infinite]',
    ];

    const sizeClasses = {
      small: 'w-8 h-8',
      medium: 'w-12 h-12',
      large: 'w-16 h-16',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });
}

import {
  Component,
  input,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Check, X } from 'lucide-angular';

export type ProgressType = 'line' | 'circle' | 'dashboard';
export type ProgressStatus = 'normal' | 'success' | 'exception' | 'active';
export type ProgressSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'g-progress',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (type() === 'line') {
      <div class="g-progress-line w-full">
        <div class="flex items-center gap-2">
          <!-- Progress Bar -->
          <div class="flex-1">
            <div [class]="lineTrackClasses()">
              <div
                [class]="lineBarClasses()"
                [style.width.%]="percent()"
              >
                @if (status() === 'active') {
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-progress-active"></div>
                }
              </div>
            </div>
          </div>

          <!-- Info -->
          @if (showInfo()) {
            <div [class]="infoClasses()">
              @if (status() === 'success') {
                <lucide-icon [img]="CheckIcon" [size]="infoIconSize()" class="text-green-600 dark:text-green-400"></lucide-icon>
              } @else if (status() === 'exception') {
                <lucide-icon [img]="XIcon" [size]="infoIconSize()" class="text-red-600 dark:text-red-400"></lucide-icon>
              } @else {
                <span>{{ percent() }}%</span>
              }
            </div>
          }
        </div>

        <!-- Steps (if enabled) -->
        @if (steps() > 0) {
          <div class="flex gap-1 mt-2">
            @for (step of getSteps(); track $index) {
              <div
                [class]="stepClasses($index)"
                [style.width.%]="100 / steps()"
              ></div>
            }
          </div>
        }
      </div>
    }

    @if (type() === 'circle' || type() === 'dashboard') {
      <div class="g-progress-circle inline-block" [style.width.px]="width()" [style.height.px]="width()">
        <svg [attr.width]="width()" [attr.height]="width()" [attr.viewBox]="viewBox()">
          <!-- Background Circle -->
          <circle
            [attr.cx]="center()"
            [attr.cy]="center()"
            [attr.r]="radius()"
            [attr.stroke-width]="strokeWidth()"
            [class]="circleTrackClasses()"
            fill="none"
            [attr.stroke-dasharray]="type() === 'dashboard' ? getDashboardDashArray() : null"
            [attr.stroke-dashoffset]="type() === 'dashboard' ? 0 : null"
          />

          <!-- Progress Circle -->
          <circle
            [attr.cx]="center()"
            [attr.cy]="center()"
            [attr.r]="radius()"
            [attr.stroke-width]="strokeWidth()"
            [class]="circleBarClasses()"
            fill="none"
            [attr.stroke-dasharray]="circumference()"
            [attr.stroke-dashoffset]="strokeDashoffset()"
            [attr.transform]="getCircleTransform()"
          />
        </svg>

        <!-- Center Content -->
        <div class="absolute inset-0 flex items-center justify-center">
          @if (showInfo()) {
            <div [class]="circleInfoClasses()">
              @if (status() === 'success') {
                <lucide-icon [img]="CheckIcon" [size]="circleIconSize()" class="text-green-600 dark:text-green-400"></lucide-icon>
              } @else if (status() === 'exception') {
                <lucide-icon [img]="XIcon" [size]="circleIconSize()" class="text-red-600 dark:text-red-400"></lucide-icon>
              } @else {
                <span>{{ percent() }}%</span>
              }
            </div>
          }
        </div>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }

      @keyframes progress-active {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }

      .animate-progress-active {
        animation: progress-active 2s ease-in-out infinite;
      }
    `,
  ],
})
export class ProgressComponent {
  // Icons
  readonly CheckIcon = Check;
  readonly XIcon = X;

  // Inputs
  percent = input(0);
  type = input<ProgressType>('line');
  status = input<ProgressStatus>('normal');
  size = input<ProgressSize>('medium');
  showInfo = input(true);
  strokeColor = input<string>();
  trailColor = input<string>();
  steps = input(0);
  width = input(120); // For circle/dashboard type

  // Computed
  strokeWidth = computed(() => {
    const sizes = {
      small: 6,
      medium: 8,
      large: 10,
    };
    return sizes[this.size()];
  });

  infoIconSize = computed(() => {
    const sizes = {
      small: 14,
      medium: 16,
      large: 18,
    };
    return sizes[this.size()];
  });

  circleIconSize = computed(() => {
    return this.width() / 4;
  });

  lineTrackClasses = computed(() => {
    const classes = ['relative overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700'];

    const sizeClasses = {
      small: 'h-1.5',
      medium: 'h-2.5',
      large: 'h-3.5',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  lineBarClasses = computed(() => {
    const classes = ['h-full transition-all duration-300 ease-out relative overflow-hidden'];

    const status = this.status();
    const statusClasses = {
      normal: 'bg-blue-600 dark:bg-blue-500',
      success: 'bg-green-600 dark:bg-green-500',
      exception: 'bg-red-600 dark:bg-red-500',
      active: 'bg-blue-600 dark:bg-blue-500',
    };

    classes.push(statusClasses[status]);

    if (this.strokeColor()) {
      classes.push(`bg-[${this.strokeColor()}]`);
    }

    return classes.join(' ');
  });

  infoClasses = computed(() => {
    const classes = ['text-sm font-medium'];

    const status = this.status();
    if (status === 'normal' || status === 'active') {
      classes.push('text-gray-700 dark:text-gray-300');
    }

    return classes.join(' ');
  });

  stepClasses = computed(() => {
    return (index: number) => {
      const classes = ['h-2 rounded-full transition-colors'];

      const currentStep = Math.floor((this.percent() / 100) * this.steps());

      if (index < currentStep) {
        const status = this.status();
        const statusClasses = {
          normal: 'bg-blue-600 dark:bg-blue-500',
          success: 'bg-green-600 dark:bg-green-500',
          exception: 'bg-red-600 dark:bg-red-500',
          active: 'bg-blue-600 dark:bg-blue-500',
        };
        classes.push(statusClasses[status]);
      } else {
        classes.push('bg-gray-200 dark:bg-gray-700');
      }

      return classes.join(' ');
    };
  });

  circleTrackClasses = computed(() => {
    return 'stroke-gray-200 dark:stroke-gray-700';
  });

  circleBarClasses = computed(() => {
    const classes = ['transition-all duration-300 ease-out'];

    const status = this.status();
    const statusClasses = {
      normal: 'stroke-blue-600 dark:stroke-blue-500',
      success: 'stroke-green-600 dark:stroke-green-500',
      exception: 'stroke-red-600 dark:stroke-red-500',
      active: 'stroke-blue-600 dark:stroke-blue-500',
    };

    classes.push(statusClasses[status]);

    return classes.join(' ');
  });

  circleInfoClasses = computed(() => {
    const classes = ['text-center font-medium'];

    const sizeClasses = {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  // Circle calculations
  center = computed(() => this.width() / 2);
  radius = computed(() => (this.width() - this.strokeWidth()) / 2);
  circumference = computed(() => 2 * Math.PI * this.radius());
  viewBox = computed(() => `0 0 ${this.width()} ${this.width()}`);

  strokeDashoffset = computed(() => {
    const progress = Math.min(100, Math.max(0, this.percent()));
    const circumference = this.circumference();

    if (this.type() === 'dashboard') {
      // Dashboard is 75% of a full circle (270 degrees)
      const dashboardCircumference = circumference * 0.75;
      return dashboardCircumference * (1 - progress / 100);
    }

    return circumference * (1 - progress / 100);
  });

  getCircleTransform(): string {
    const center = this.center();

    if (this.type() === 'dashboard') {
      // Rotate to start from bottom (135 degrees)
      return `rotate(135 ${center} ${center})`;
    }

    // Rotate to start from top (-90 degrees)
    return `rotate(-90 ${center} ${center})`;
  }

  getDashboardDashArray(): string {
    const circumference = this.circumference();
    const dashboardCircumference = circumference * 0.75;
    const gap = circumference - dashboardCircumference;
    return `${dashboardCircumference} ${gap}`;
  }

  getSteps(): number[] {
    return Array.from({ length: this.steps() }, (_, i) => i);
  }
}

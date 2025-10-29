import {
  Component,
  input,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type SkeletonShape = 'default' | 'circle' | 'square';
export type SkeletonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'g-skeleton',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (loading()) {
      <div class="g-skeleton">
        @if (avatar()) {
          <div class="flex gap-4">
            <!-- Avatar -->
            <div [class]="avatarClasses()"></div>

            <!-- Content -->
            <div class="flex-1 space-y-2">
              @for (line of getLines(); track $index) {
                <div
                  [class]="lineClasses($index)"
                  [style.width.%]="getLineWidth($index)"
                ></div>
              }
            </div>
          </div>
        } @else if (paragraph()) {
          <div class="space-y-2">
            <!-- Title -->
            @if (title()) {
              <div [class]="titleClasses()"></div>
            }

            <!-- Paragraph Lines -->
            @for (line of getLines(); track $index) {
              <div
                [class]="lineClasses($index)"
                [style.width.%]="getLineWidth($index)"
              ></div>
            }
          </div>
        } @else {
          <!-- Single Element -->
          <div [class]="elementClasses()" [style]="elementStyles()"></div>
        }
      </div>
    } @else {
      <ng-content></ng-content>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }

      @keyframes skeleton-loading {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    `,
  ],
})
export class SkeletonComponent {
  // Inputs
  loading = input(true);
  active = input(true);
  avatar = input(false);
  paragraph = input(false);
  title = input(true);
  rows = input(3);
  shape = input<SkeletonShape>('default');
  size = input<SkeletonSize>('medium');
  width = input<string | number>();
  height = input<string | number>();

  baseClasses = computed(() => {
    const classes = ['bg-gray-200 dark:bg-gray-700'];

    if (this.active()) {
      classes.push('bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700');
      classes.push('bg-[length:200%_100%]');
      classes.push('animate-[skeleton-loading_1.5s_ease-in-out_infinite]');
    }

    return classes;
  });

  elementClasses = computed(() => {
    const classes = [...this.baseClasses()];

    const shape = this.shape();

    if (shape === 'circle') {
      classes.push('rounded-full');
    } else if (shape === 'square') {
      classes.push('rounded-none');
    } else {
      classes.push('rounded');
    }

    // Default size if no width/height specified
    if (!this.width() && !this.height()) {
      const sizeClasses = {
        small: 'h-4',
        medium: 'h-5',
        large: 'h-6',
      };
      classes.push(sizeClasses[this.size()]);

      if (shape === 'circle' || shape === 'square') {
        const squareSizes = {
          small: 'w-8 h-8',
          medium: 'w-10 h-10',
          large: 'w-12 h-12',
        };
        classes.push(squareSizes[this.size()]);
      } else {
        classes.push('w-full');
      }
    }

    return classes.join(' ');
  });

  elementStyles = computed(() => {
    const styles: any = {};

    const width = this.width();
    const height = this.height();

    if (width) {
      styles.width = typeof width === 'number' ? `${width}px` : width;
    }

    if (height) {
      styles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return styles;
  });

  avatarClasses = computed(() => {
    const classes = [...this.baseClasses(), 'rounded-full flex-shrink-0'];

    const sizeClasses = {
      small: 'w-8 h-8',
      medium: 'w-10 h-10',
      large: 'w-12 h-12',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  titleClasses = computed(() => {
    const classes = [...this.baseClasses(), 'rounded'];

    const sizeClasses = {
      small: 'h-4 w-1/3',
      medium: 'h-5 w-2/5',
      large: 'h-6 w-1/2',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  lineClasses = computed(() => {
    return (index: number) => {
      const classes = [...this.baseClasses(), 'rounded'];

      const sizeClasses = {
        small: 'h-3',
        medium: 'h-4',
        large: 'h-5',
      };

      classes.push(sizeClasses[this.size()]);

      return classes.join(' ');
    };
  });

  getLines(): number[] {
    return Array.from({ length: this.rows() }, (_, i) => i);
  }

  getLineWidth(index: number): number {
    const rows = this.rows();

    // Last line is shorter
    if (index === rows - 1) {
      return 60 + Math.random() * 20;
    }

    return 90 + Math.random() * 10;
  }
}

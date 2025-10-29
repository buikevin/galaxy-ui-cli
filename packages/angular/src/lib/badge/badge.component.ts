import {
  Component,
  input,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeStatus = 'success' | 'error' | 'warning' | 'info' | 'default' | 'processing';
export type BadgeSize = 'small' | 'medium';

@Component({
  selector: 'g-badge',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="g-badge-wrapper relative inline-block">
      <!-- Content -->
      <ng-content></ng-content>

      <!-- Badge -->
      @if (showBadge()) {
        <span [class]="badgeClasses()" [style]="badgeStyles()">
          @if (dot()) {
            <!-- Dot badge -->
            <span [class]="dotClasses()"></span>
          } @else if (count() !== undefined) {
            <!-- Count badge -->
            {{ displayCount() }}
          } @else if (text()) {
            <!-- Text badge -->
            {{ text() }}
          } @else {
            <!-- Status dot -->
            <span [class]="statusDotClasses()"></span>
          }
        </span>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      @keyframes badge-processing {
        0% {
          transform: scale(0.8);
          opacity: 0.5;
        }
        100% {
          transform: scale(2.4);
          opacity: 0;
        }
      }
    `,
  ],
})
export class BadgeComponent {
  // Inputs
  count = input<number>();
  dot = input(false);
  text = input<string>();
  status = input<BadgeStatus>();
  overflowCount = input(99);
  showZero = input(false);
  offset = input<[number, number]>();
  size = input<BadgeSize>('medium');
  color = input<string>();

  showBadge = computed(() => {
    // Always show if dot, text, or status
    if (this.dot() || this.text() || this.status()) {
      return true;
    }

    // Show count if greater than 0 or showZero is true
    const count = this.count();
    if (count !== undefined) {
      return count > 0 || this.showZero();
    }

    return false;
  });

  displayCount = computed(() => {
    const count = this.count();
    const overflow = this.overflowCount();

    if (count === undefined) return '';
    if (count > overflow) return `${overflow}+`;
    return count.toString();
  });

  badgeClasses = computed(() => {
    const classes = [
      'g-badge',
      'absolute',
      'flex items-center justify-center',
      'font-medium',
      'whitespace-nowrap',
      'leading-none',
      'z-10',
    ];

    // Position
    if (!this.status()) {
      classes.push('top-0 right-0 transform translate-x-1/2 -translate-y-1/2');
    } else {
      classes.push('relative inline-flex');
    }

    // Size and padding
    if (this.dot()) {
      // Dot has no padding
    } else if (this.count() !== undefined) {
      const sizeClasses = {
        small: 'min-w-[18px] h-[18px] px-1 text-xs',
        medium: 'min-w-[20px] h-[20px] px-1.5 text-xs',
      };
      classes.push(sizeClasses[this.size()]);
      classes.push('rounded-full');
    } else if (this.text()) {
      classes.push('px-2 py-0.5 text-xs rounded');
    } else if (this.status()) {
      // Status dot container
      classes.push('gap-2');
    }

    // Color based on status or custom
    if (!this.status() && !this.dot()) {
      if (this.color()) {
        classes.push(`bg-[${this.color()}] text-white`);
      } else {
        classes.push('bg-red-600 text-white');
      }
    }

    return classes.join(' ');
  });

  badgeStyles = computed(() => {
    const offset = this.offset();
    if (!offset) return {};

    return {
      transform: `translate(${offset[0]}px, ${offset[1]}px)`,
    };
  });

  dotClasses = computed(() => {
    const classes = ['g-badge-dot w-2 h-2 rounded-full'];

    if (this.color()) {
      classes.push(`bg-[${this.color()}]`);
    } else {
      classes.push('bg-red-600');
    }

    return classes.join(' ');
  });

  statusDotClasses = computed(() => {
    const classes = ['g-badge-status-dot w-2 h-2 rounded-full relative'];

    const status = this.status();

    const statusClasses = {
      success: 'bg-green-600',
      error: 'bg-red-600',
      warning: 'bg-amber-600',
      info: 'bg-blue-600',
      default: 'bg-gray-400',
      processing: 'bg-blue-600',
    };

    if (status) {
      classes.push(statusClasses[status]);

      // Processing animation
      if (status === 'processing') {
        classes.push('after:absolute after:inset-0 after:rounded-full after:bg-blue-600 after:animate-[badge-processing_1.2s_ease-in-out_infinite]');
      }
    }

    return classes.join(' ');
  });
}

// Ribbon Badge Component
@Component({
  selector: 'g-badge-ribbon',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="g-badge-ribbon-wrapper relative">
      <!-- Content -->
      <ng-content></ng-content>

      <!-- Ribbon -->
      <div [class]="ribbonClasses()">
        <span class="relative z-10">
          {{ text() }}
        </span>
        <!-- Corner fold -->
        <div [class]="cornerClasses()"></div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class BadgeRibbonComponent {
  // Inputs
  text = input.required<string>();
  color = input<string>();
  placement = input<'start' | 'end'>('end');

  ribbonClasses = computed(() => {
    const classes = [
      'g-badge-ribbon',
      'absolute top-2',
      'px-3 py-1',
      'text-xs font-medium text-white',
      'whitespace-nowrap',
      'z-10',
    ];

    const placement = this.placement();
    if (placement === 'end') {
      classes.push('right-[-8px]');
    } else {
      classes.push('left-[-8px]');
    }

    if (this.color()) {
      classes.push(`bg-[${this.color()}]`);
    } else {
      classes.push('bg-blue-600');
    }

    return classes.join(' ');
  });

  cornerClasses = computed(() => {
    const classes = ['absolute bottom-[-4px] w-0 h-0 border-4 border-transparent'];

    const placement = this.placement();
    if (placement === 'end') {
      classes.push('right-0 border-r-0');

      if (this.color()) {
        classes.push(`border-t-[${this.color()}] border-l-[${this.color()}]`);
      } else {
        classes.push('border-t-blue-800 border-l-blue-800');
      }
    } else {
      classes.push('left-0 border-l-0');

      if (this.color()) {
        classes.push(`border-t-[${this.color()}] border-r-[${this.color()}]`);
      } else {
        classes.push('border-t-blue-800 border-r-blue-800');
      }
    }

    return classes.join(' ');
  });
}

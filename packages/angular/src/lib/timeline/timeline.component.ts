import {
  Component,
  input,
  output,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Clock, CheckCircle, XCircle, AlertCircle, Info } from 'lucide-angular';

export interface TimelineItem {
  title: string;
  description?: string;
  timestamp?: string;
  status?: TimelineStatus;
  icon?: string;
  color?: string;
  [key: string]: any;
}

export type TimelineStatus = 'pending' | 'success' | 'error' | 'warning' | 'info' | 'default';
export type TimelineSize = 'small' | 'medium' | 'large';
export type TimelineMode = 'left' | 'right' | 'alternate';

@Component({
  selector: 'g-timeline',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="wrapperClasses()">
      @for (item of items(); track $index) {
        <div [class]="itemClasses($index)">
          <!-- Content (Left side for alternate mode) -->
          @if (mode() === 'alternate' && $index % 2 === 0) {
            <div class="g-timeline-content-left flex-1 pr-6 text-right">
              <div [class]="titleClasses()">{{ item.title }}</div>
              @if (item.description) {
                <div [class]="descriptionClasses()">{{ item.description }}</div>
              }
              @if (item.timestamp) {
                <div [class]="timestampClasses()">{{ item.timestamp }}</div>
              }
            </div>
          }

          <!-- Timeline Dot and Line -->
          <div class="g-timeline-tail-wrapper flex flex-col items-center">
            <!-- Dot -->
            <div [class]="dotClasses(item)">
              @if (item.icon) {
                <span class="text-white">{{ item.icon }}</span>
              } @else {
                <lucide-icon
                  [img]="getStatusIcon(item.status || 'default')"
                  [size]="dotIconSize()"
                  class="text-white"
                ></lucide-icon>
              }
            </div>

            <!-- Line -->
            @if ($index < items().length - 1) {
              <div [class]="lineClasses(item)"></div>
            }
          </div>

          <!-- Content (Right side or default) -->
          @if (mode() === 'left' || mode() === 'right' || (mode() === 'alternate' && $index % 2 === 1)) {
            <div class="g-timeline-content-right flex-1 pl-6">
              <div [class]="titleClasses()">{{ item.title }}</div>
              @if (item.description) {
                <div [class]="descriptionClasses()">{{ item.description }}</div>
              }
              @if (item.timestamp) {
                <div [class]="timestampClasses()">{{ item.timestamp }}</div>
              }
            </div>
          }

          <!-- Spacer for alternate mode right items -->
          @if (mode() === 'alternate' && $index % 2 === 1) {
            <div class="flex-1"></div>
          }
        </div>
      }

      @if (items().length === 0) {
        <div class="text-center py-8 text-gray-500 dark:text-gray-400">
          No timeline items
        </div>
      }
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
export class TimelineComponent {
  // Icons
  readonly Clock = Clock;
  readonly CheckCircle = CheckCircle;
  readonly XCircle = XCircle;
  readonly AlertCircle = AlertCircle;
  readonly InfoIcon = Info;

  // Inputs
  items = input<TimelineItem[]>([]);
  size = input<TimelineSize>('medium');
  mode = input<TimelineMode>('left');
  reverse = input(false);

  // Outputs
  itemClick = output<TimelineItem>();

  wrapperClasses = computed(() => {
    const classes = ['g-timeline'];

    if (this.mode() === 'alternate') {
      classes.push('max-w-4xl mx-auto');
    }

    return classes.join(' ');
  });

  itemClasses = computed(() => {
    return (index: number) => {
      const classes = ['g-timeline-item flex'];

      const sizeClasses = {
        small: 'mb-4',
        medium: 'mb-6',
        large: 'mb-8',
      };
      classes.push(sizeClasses[this.size()]);

      if (this.mode() === 'alternate') {
        classes.push('relative');
      }

      return classes.join(' ');
    };
  });

  dotClasses = computed(() => {
    return (item: TimelineItem) => {
      const classes = [
        'g-timeline-dot',
        'rounded-full',
        'flex items-center justify-center',
        'flex-shrink-0',
      ];

      const sizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-8 h-8',
        large: 'w-10 h-10',
      };
      classes.push(sizeClasses[this.size()]);

      // Custom color or status color
      if (item.color) {
        classes.push(item.color);
      } else {
        const statusClasses = {
          pending: 'bg-gray-400 dark:bg-gray-600',
          success: 'bg-green-500 dark:bg-green-600',
          error: 'bg-red-500 dark:bg-red-600',
          warning: 'bg-amber-500 dark:bg-amber-600',
          info: 'bg-cyan-500 dark:bg-cyan-600',
          default: 'bg-blue-500 dark:bg-blue-600',
        };
        classes.push(statusClasses[item.status || 'default']);
      }

      return classes.join(' ');
    };
  });

  lineClasses = computed(() => {
    return (item: TimelineItem) => {
      const classes = ['g-timeline-line flex-1'];

      const sizeClasses = {
        small: 'w-0.5 min-h-[20px]',
        medium: 'w-0.5 min-h-[30px]',
        large: 'w-1 min-h-[40px]',
      };
      classes.push(sizeClasses[this.size()]);

      // Custom color or status color
      if (item.color) {
        classes.push(item.color);
      } else {
        const statusClasses = {
          pending: 'bg-gray-300 dark:bg-gray-700',
          success: 'bg-green-300 dark:bg-green-700',
          error: 'bg-red-300 dark:bg-red-700',
          warning: 'bg-amber-300 dark:bg-amber-700',
          info: 'bg-cyan-300 dark:bg-cyan-700',
          default: 'bg-blue-300 dark:bg-blue-700',
        };
        classes.push(statusClasses[item.status || 'default']);
      }

      return classes.join(' ');
    };
  });

  titleClasses = computed(() => {
    const classes = ['g-timeline-title font-semibold text-gray-900 dark:text-gray-100'];

    const sizeClasses = {
      small: 'text-sm mb-1',
      medium: 'text-base mb-1',
      large: 'text-lg mb-2',
    };
    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  descriptionClasses = computed(() => {
    const classes = ['g-timeline-description text-gray-600 dark:text-gray-400'];

    const sizeClasses = {
      small: 'text-xs mb-1',
      medium: 'text-sm mb-1',
      large: 'text-base mb-2',
    };
    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  timestampClasses = computed(() => {
    const classes = ['g-timeline-timestamp text-gray-500 dark:text-gray-500'];

    const sizeClasses = {
      small: 'text-xs',
      medium: 'text-xs',
      large: 'text-sm',
    };
    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  dotIconSize = computed(() => {
    const sizes = {
      small: 12,
      medium: 14,
      large: 16,
    };
    return sizes[this.size()];
  });

  getStatusIcon(status: TimelineStatus) {
    const icons = {
      pending: this.Clock,
      success: this.CheckCircle,
      error: this.XCircle,
      warning: this.AlertCircle,
      info: this.InfoIcon,
      default: this.Clock,
    };
    return icons[status];
  }
}

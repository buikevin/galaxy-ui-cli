import {
  Component,
  input,
  output,
  computed,
  ChangeDetectionStrategy,
  contentChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ListDataSource {
  title: string;
  description?: string;
  avatar?: string;
  actions?: string[];
  extra?: string;
  [key: string]: any;
}

export type ListSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'g-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="itemClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class ListItemComponent {
  size = input<ListSize>('medium');

  itemClasses = computed(() => {
    const classes = ['g-list-item'];

    const sizeClasses = {
      small: 'px-3 py-2',
      medium: 'px-4 py-3',
      large: 'px-6 py-4',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });
}

@Component({
  selector: 'g-list',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="wrapperClasses()">
      <!-- Header -->
      @if (header()) {
        <div [class]="headerClasses()">
          {{ header() }}
        </div>
      }

      <!-- List Content -->
      <div class="g-list-content">
        @if (loading()) {
          <div class="flex items-center justify-center py-8 text-gray-500 dark:text-gray-400">
            <div class="flex items-center gap-2">
              <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              <span>Loading...</span>
            </div>
          </div>
        } @else if (dataSource().length === 0) {
          <div class="text-center py-8 text-gray-500 dark:text-gray-400">
            {{ emptyText() }}
          </div>
        } @else {
          @for (item of dataSource(); track $index) {
            <div
              [class]="itemClasses($index)"
              (click)="handleItemClick(item)"
            >
              <div class="flex items-start gap-4">
                <!-- Avatar -->
                @if (item.avatar) {
                  <div class="flex-shrink-0">
                    @if (isImageUrl(item.avatar)) {
                      <img
                        [src]="item.avatar"
                        [alt]="item.title"
                        [class]="avatarClasses()"
                      />
                    } @else {
                      <div [class]="avatarTextClasses()">
                        {{ item.avatar }}
                      </div>
                    }
                  </div>
                }

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <!-- Title and Description -->
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex-1 min-w-0">
                      <h4 [class]="titleClasses()">
                        {{ item.title }}
                      </h4>
                      @if (item.description) {
                        <p [class]="descriptionClasses()">
                          {{ item.description }}
                        </p>
                      }
                    </div>

                    <!-- Extra Content -->
                    @if (item.extra) {
                      <div class="flex-shrink-0 text-sm text-gray-500 dark:text-gray-400">
                        {{ item.extra }}
                      </div>
                    }
                  </div>

                  <!-- Actions -->
                  @if (item.actions && item.actions.length > 0) {
                    <div class="mt-2 flex items-center gap-3">
                      @for (action of item.actions; track $index) {
                        <button
                          (click)="handleActionClick(item, action, $event)"
                          class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          {{ action }}
                        </button>
                      }
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        }
      </div>

      <!-- Footer -->
      @if (footer()) {
        <div [class]="footerClasses()">
          {{ footer() }}
        </div>
      }

      <!-- Load More -->
      @if (showLoadMore() && !loading() && dataSource().length > 0) {
        <div class="g-list-load-more text-center py-4 border-t border-gray-200 dark:border-gray-700">
          <button
            (click)="loadMore.emit()"
            class="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {{ loadMoreText() }}
          </button>
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
export class ListComponent {
  // Inputs
  dataSource = input<ListDataSource[]>([]);
  size = input<ListSize>('medium');
  bordered = input(true);
  split = input(true);
  loading = input(false);
  header = input<string>();
  footer = input<string>();
  emptyText = input('No data');
  showLoadMore = input(false);
  loadMoreText = input('Load more');
  hoverable = input(true);

  // Outputs
  itemClick = output<ListDataSource>();
  actionClick = output<{ item: ListDataSource; action: string }>();
  loadMore = output<void>();

  // Content Children
  items = contentChildren(ListItemComponent);

  wrapperClasses = computed(() => {
    const classes = ['g-list', 'bg-white dark:bg-gray-900'];

    if (this.bordered()) {
      classes.push('border border-gray-200 dark:border-gray-700 rounded-lg');
    }

    return classes.join(' ');
  });

  headerClasses = computed(() => {
    const classes = [
      'g-list-header',
      'font-semibold',
      'text-gray-900 dark:text-gray-100',
      'border-b border-gray-200 dark:border-gray-700',
    ];

    const sizeClasses = {
      small: 'px-3 py-2 text-sm',
      medium: 'px-4 py-3 text-base',
      large: 'px-6 py-4 text-lg',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  footerClasses = computed(() => {
    const classes = [
      'g-list-footer',
      'text-gray-600 dark:text-gray-400',
      'border-t border-gray-200 dark:border-gray-700',
    ];

    const sizeClasses = {
      small: 'px-3 py-2 text-sm',
      medium: 'px-4 py-3 text-base',
      large: 'px-6 py-4 text-lg',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  itemClasses = computed(() => {
    return (index: number) => {
      const classes = ['g-list-item'];

      const sizeClasses = {
        small: 'px-3 py-2',
        medium: 'px-4 py-3',
        large: 'px-6 py-4',
      };

      classes.push(sizeClasses[this.size()]);

      if (this.split() && index < this.dataSource().length - 1) {
        classes.push('border-b border-gray-200 dark:border-gray-700');
      }

      if (this.hoverable()) {
        classes.push('hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer');
      }

      return classes.join(' ');
    };
  });

  titleClasses = computed(() => {
    const classes = ['font-medium text-gray-900 dark:text-gray-100 truncate'];

    const sizeClasses = {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  descriptionClasses = computed(() => {
    const classes = ['mt-1 text-gray-600 dark:text-gray-400'];

    const sizeClasses = {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  avatarClasses = computed(() => {
    const classes = ['rounded-full object-cover'];

    const sizeClasses = {
      small: 'w-8 h-8',
      medium: 'w-10 h-10',
      large: 'w-12 h-12',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  avatarTextClasses = computed(() => {
    const classes = [
      'rounded-full',
      'bg-blue-100 dark:bg-blue-900',
      'text-blue-600 dark:text-blue-300',
      'flex items-center justify-center',
      'font-semibold',
    ];

    const sizeClasses = {
      small: 'w-8 h-8 text-xs',
      medium: 'w-10 h-10 text-sm',
      large: 'w-12 h-12 text-base',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  handleItemClick(item: ListDataSource): void {
    this.itemClick.emit(item);
  }

  handleActionClick(item: ListDataSource, action: string, event: Event): void {
    event.stopPropagation();
    this.actionClick.emit({ item, action });
  }

  isImageUrl(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/');
  }
}

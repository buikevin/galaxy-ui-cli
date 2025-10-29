import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-angular';

export type PaginationSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'g-pagination',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="wrapperClasses()">
      <!-- Total Info -->
      @if (showTotal()) {
        <div class="g-pagination-total text-sm text-gray-600 dark:text-gray-400 mr-4">
          Total {{ total() }} items
        </div>
      }

      <!-- Page Size Selector -->
      @if (showSizeChanger()) {
        <div class="g-pagination-size-changer mr-4">
          <select
            [value]="pageSize()"
            (change)="handlePageSizeChange($event)"
            [class]="selectClasses()"
          >
            @for (size of pageSizeOptions(); track size) {
              <option [value]="size">{{ size }} / page</option>
            }
          </select>
        </div>
      }

      <!-- Pagination Controls -->
      <div class="g-pagination-controls flex items-center gap-1">
        <!-- First Page Button -->
        @if (showFirstLast()) {
          <button
            [disabled]="currentPage() === 1"
            (click)="goToPage(1)"
            [class]="buttonClasses()"
            [attr.aria-label]="'Go to first page'"
          >
            <lucide-icon [img]="ChevronsLeft" [size]="iconSize()"></lucide-icon>
          </button>
        }

        <!-- Previous Button -->
        <button
          [disabled]="currentPage() === 1"
          (click)="goToPage(currentPage() - 1)"
          [class]="buttonClasses()"
          [attr.aria-label]="'Go to previous page'"
        >
          <lucide-icon [img]="ChevronLeft" [size]="iconSize()"></lucide-icon>
        </button>

        <!-- Page Numbers -->
        @for (page of visiblePages(); track page) {
          @if (page === '...') {
            <span [class]="ellipsisClasses()">...</span>
          } @else {
            <button
              [class]="pageButtonClasses(page)"
              (click)="goToPage(page as number)"
              [attr.aria-label]="'Go to page ' + page"
              [attr.aria-current]="currentPage() === page ? 'page' : null"
            >
              {{ page }}
            </button>
          }
        }

        <!-- Next Button -->
        <button
          [disabled]="currentPage() === totalPages()"
          (click)="goToPage(currentPage() + 1)"
          [class]="buttonClasses()"
          [attr.aria-label]="'Go to next page'"
        >
          <lucide-icon [img]="ChevronRight" [size]="iconSize()"></lucide-icon>
        </button>

        <!-- Last Page Button -->
        @if (showFirstLast()) {
          <button
            [disabled]="currentPage() === totalPages()"
            (click)="goToPage(totalPages())"
            [class]="buttonClasses()"
            [attr.aria-label]="'Go to last page'"
          >
            <lucide-icon [img]="ChevronsRight" [size]="iconSize()"></lucide-icon>
          </button>
        }
      </div>

      <!-- Quick Jumper -->
      @if (showQuickJumper()) {
        <div class="g-pagination-jumper ml-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Go to</span>
          <input
            type="number"
            min="1"
            [max]="totalPages()"
            [value]="jumpValue()"
            (input)="handleJumpInput($event)"
            (keydown.enter)="handleJumpEnter()"
            [class]="inputClasses()"
            [attr.aria-label]="'Jump to page'"
          />
        </div>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type='number'] {
        -moz-appearance: textfield;
      }
    `,
  ],
})
export class PaginationComponent {
  // Icons
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly ChevronsLeft = ChevronsLeft;
  readonly ChevronsRight = ChevronsRight;

  // Inputs
  total = input.required<number>();
  pageSize = input(10);
  currentPage = input(1);
  size = input<PaginationSize>('medium');
  showTotal = input(true);
  showSizeChanger = input(false);
  showQuickJumper = input(false);
  showFirstLast = input(false);
  pageSizeOptions = input<number[]>([10, 20, 50, 100]);
  maxPageButtons = input(7); // Maximum number of page buttons to show

  // Outputs
  pageChange = output<number>();
  pageSizeChange = output<number>();

  // State
  jumpValue = signal<number | null>(null);

  // Computed
  totalPages = computed(() => {
    return Math.ceil(this.total() / this.pageSize());
  });

  visiblePages = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const max = this.maxPageButtons();

    if (total <= max) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const half = Math.floor(max / 2);

    let start = Math.max(1, current - half);
    let end = Math.min(total, current + half);

    // Adjust if we're near the start or end
    if (current <= half) {
      end = max - 1;
    } else if (current >= total - half) {
      start = total - max + 2;
    }

    // Always show first page
    pages.push(1);

    // Add ellipsis if needed
    if (start > 2) {
      pages.push('...');
    }

    // Add page numbers
    for (let i = Math.max(2, start); i <= Math.min(total - 1, end); i++) {
      pages.push(i);
    }

    // Add ellipsis if needed
    if (end < total - 1) {
      pages.push('...');
    }

    // Always show last page if there's more than 1 page
    if (total > 1) {
      pages.push(total);
    }

    return pages;
  });

  wrapperClasses = computed(() => {
    return 'g-pagination flex items-center';
  });

  buttonClasses = computed(() => {
    const classes = [
      'g-pagination-button',
      'flex items-center justify-center',
      'border border-gray-300 dark:border-gray-600',
      'bg-white dark:bg-gray-800',
      'hover:bg-gray-50 dark:hover:bg-gray-700',
      'hover:border-blue-500 dark:hover:border-blue-400',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300 dark:disabled:hover:border-gray-600',
      'transition-colors',
      'rounded',
    ];

    const sizeClasses = {
      small: 'w-7 h-7 text-sm',
      medium: 'w-8 h-8 text-base',
      large: 'w-10 h-10 text-lg',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  pageButtonClasses = computed(() => {
    return (page: number | string) => {
      const classes = [
        'g-pagination-page-button',
        'flex items-center justify-center',
        'border border-gray-300 dark:border-gray-600',
        'hover:bg-gray-50 dark:hover:bg-gray-700',
        'hover:border-blue-500 dark:hover:border-blue-400',
        'transition-colors',
        'rounded',
      ];

      const sizeClasses = {
        small: 'w-7 h-7 text-sm',
        medium: 'w-8 h-8 text-base',
        large: 'w-10 h-10 text-lg',
      };

      classes.push(sizeClasses[this.size()]);

      if (this.currentPage() === page) {
        classes.push(
          'bg-blue-600 text-white border-blue-600',
          'hover:bg-blue-700 hover:border-blue-700',
          'dark:bg-blue-600 dark:border-blue-600',
          'dark:hover:bg-blue-700 dark:hover:border-blue-700'
        );
      } else {
        classes.push('bg-white dark:bg-gray-800');
      }

      return classes.join(' ');
    };
  });

  ellipsisClasses = computed(() => {
    const classes = ['g-pagination-ellipsis flex items-center justify-center text-gray-500 dark:text-gray-400'];

    const sizeClasses = {
      small: 'w-7 h-7 text-sm',
      medium: 'w-8 h-8 text-base',
      large: 'w-10 h-10 text-lg',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  selectClasses = computed(() => {
    const classes = [
      'g-pagination-select',
      'border border-gray-300 dark:border-gray-600',
      'bg-white dark:bg-gray-800',
      'text-gray-900 dark:text-gray-100',
      'rounded',
      'focus:outline-none focus:ring-2 focus:ring-blue-500',
      'transition-colors',
    ];

    const sizeClasses = {
      small: 'px-2 py-1 text-sm',
      medium: 'px-3 py-1.5 text-base',
      large: 'px-4 py-2 text-lg',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  inputClasses = computed(() => {
    const classes = [
      'g-pagination-input',
      'w-16',
      'text-center',
      'border border-gray-300 dark:border-gray-600',
      'bg-white dark:bg-gray-800',
      'text-gray-900 dark:text-gray-100',
      'rounded',
      'focus:outline-none focus:ring-2 focus:ring-blue-500',
      'transition-colors',
    ];

    const sizeClasses = {
      small: 'px-2 py-1 text-sm',
      medium: 'px-3 py-1.5 text-base',
      large: 'px-4 py-2 text-lg',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  iconSize = computed(() => {
    const sizes = {
      small: 14,
      medium: 16,
      large: 18,
    };
    return sizes[this.size()];
  });

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) {
      return;
    }
    this.pageChange.emit(page);
  }

  handlePageSizeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newSize = parseInt(target.value, 10);
    this.pageSizeChange.emit(newSize);
    // Reset to page 1 when page size changes
    this.pageChange.emit(1);
  }

  handleJumpInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value ? parseInt(target.value, 10) : null;
    this.jumpValue.set(value);
  }

  handleJumpEnter(): void {
    const value = this.jumpValue();
    if (value && value >= 1 && value <= this.totalPages()) {
      this.goToPage(value);
      this.jumpValue.set(null);
    }
  }
}

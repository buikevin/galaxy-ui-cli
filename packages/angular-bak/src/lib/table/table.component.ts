import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowUp, ArrowDown, ChevronDown, ChevronRight } from 'lucide-angular';

export interface TableColumn<T = any> {
  key: string;
  title: string;
  width?: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, record: T) => string;
  align?: 'left' | 'center' | 'right';
}

export interface TableDataSource<T = any> {
  [key: string]: any;
}

export type TableSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'g-table',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="g-table-wrapper" [class]="wrapperClasses()">
      <!-- Table Container -->
      <div class="g-table-container overflow-x-auto">
        <table class="g-table w-full border-collapse">
          <!-- Table Header -->
          <thead [class]="headerClasses()">
            <tr>
              <!-- Selection Column -->
              @if (selectable()) {
                <th class="g-table-selection-cell" [style.width]="'50px'">
                  <input
                    type="checkbox"
                    [checked]="isAllSelected()"
                    [indeterminate]="isSomeSelected()"
                    (change)="toggleSelectAll()"
                    class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                </th>
              }

              <!-- Expandable Column -->
              @if (expandable()) {
                <th class="g-table-expand-cell" [style.width]="'50px'"></th>
              }

              <!-- Data Columns -->
              @for (column of columns(); track column.key) {
                <th
                  [class]="getColumnClasses(column)"
                  [style.width]="column.width"
                  (click)="column.sortable ? handleSort(column.key) : null"
                >
                  <div class="flex items-center gap-2" [class.justify-center]="column.align === 'center'" [class.justify-end]="column.align === 'right'">
                    <span>{{ column.title }}</span>
                    @if (column.sortable) {
                      <div class="flex flex-col">
                        <lucide-icon
                          [img]="ArrowUp"
                          [class]="getSortIconClass('asc', column.key)"
                          [size]="12"
                        ></lucide-icon>
                        <lucide-icon
                          [img]="ArrowDown"
                          [class]="getSortIconClass('desc', column.key)"
                          [size]="12"
                          class="-mt-1"
                        ></lucide-icon>
                      </div>
                    }
                  </div>
                </th>
              }
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody>
            @if (loading()) {
              <tr>
                <td [attr.colspan]="getColspan()" class="text-center py-8 text-gray-500 dark:text-gray-400">
                  <div class="flex items-center justify-center gap-2">
                    <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    <span>Loading...</span>
                  </div>
                </td>
              </tr>
            } @else if (sortedData().length === 0) {
              <tr>
                <td [attr.colspan]="getColspan()" class="text-center py-8 text-gray-500 dark:text-gray-400">
                  {{ emptyText() }}
                </td>
              </tr>
            } @else {
              @for (record of sortedData(); track $index) {
                <tr [class]="getRowClasses(record, $index)" (click)="handleRowClick(record)">
                  <!-- Selection Cell -->
                  @if (selectable()) {
                    <td class="g-table-selection-cell">
                      <input
                        type="checkbox"
                        [checked]="isSelected(record)"
                        (change)="toggleSelect(record)"
                        (click)="$event.stopPropagation()"
                        class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  }

                  <!-- Expandable Cell -->
                  @if (expandable()) {
                    <td class="g-table-expand-cell">
                      <button
                        (click)="toggleExpand(record); $event.stopPropagation()"
                        class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                      >
                        <lucide-icon
                          [img]="isExpanded(record) ? ChevronDown : ChevronRight"
                          [size]="16"
                          class="text-gray-600 dark:text-gray-400"
                        ></lucide-icon>
                      </button>
                    </td>
                  }

                  <!-- Data Cells -->
                  @for (column of columns(); track column.key) {
                    <td [class]="getCellClasses(column)">
                      @if (column.render) {
                        <span [innerHTML]="column.render(record[column.key], record)"></span>
                      } @else {
                        {{ record[column.key] }}
                      }
                    </td>
                  }
                </tr>

                <!-- Expanded Row -->
                @if (expandable() && isExpanded(record)) {
                  <tr class="g-table-expanded-row">
                    <td [attr.colspan]="getColspan()" class="bg-gray-50 dark:bg-gray-800/50 p-4">
                      <ng-content></ng-content>
                    </td>
                  </tr>
                }
              }
            }
          </tbody>
        </table>
      </div>

      <!-- Footer -->
      @if (showTotal() && !loading()) {
        <div class="g-table-footer mt-4 text-sm text-gray-600 dark:text-gray-400">
          Total {{ sortedData().length }} items
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
export class TableComponent<T extends TableDataSource = TableDataSource> {
  // Icons
  readonly ArrowUp = ArrowUp;
  readonly ArrowDown = ArrowDown;
  readonly ChevronDown = ChevronDown;
  readonly ChevronRight = ChevronRight;

  // Inputs
  columns = input.required<TableColumn<T>[]>();
  dataSource = input<T[]>([]);
  size = input<TableSize>('medium');
  bordered = input(false);
  striped = input(false);
  hoverable = input(true);
  loading = input(false);
  selectable = input(false);
  expandable = input(false);
  emptyText = input('No data');
  showTotal = input(false);

  // Outputs
  rowClick = output<T>();
  selectionChange = output<T[]>();
  sortChange = output<{ key: string; direction: 'asc' | 'desc' | null }>();

  // State
  selectedRows = signal<T[]>([]);
  expandedRows = signal<Set<number>>(new Set());
  sortKey = signal<string | null>(null);
  sortDirection = signal<'asc' | 'desc' | null>(null);

  // Computed
  wrapperClasses = computed(() => {
    const classes = ['g-table-wrapper'];

    if (this.bordered()) {
      classes.push('border border-gray-200 dark:border-gray-700 rounded-lg');
    }

    return classes.join(' ');
  });

  headerClasses = computed(() => {
    const classes = ['bg-gray-50 dark:bg-gray-800'];
    const sizeClasses = {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base',
    };

    classes.push(sizeClasses[this.size()]);

    return classes.join(' ');
  });

  sortedData = computed(() => {
    let data = [...this.dataSource()];

    const key = this.sortKey();
    const direction = this.sortDirection();

    if (key && direction) {
      data.sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];

        if (aVal === bVal) return 0;

        const comparison = aVal > bVal ? 1 : -1;
        return direction === 'asc' ? comparison : -comparison;
      });
    }

    return data;
  });

  getColumnClasses(column: TableColumn<T>): string {
    const classes = ['g-table-header-cell px-4 py-3 font-semibold text-gray-700 dark:text-gray-300'];

    if (column.sortable) {
      classes.push('cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors');
    }

    if (column.align === 'center') classes.push('text-center');
    if (column.align === 'right') classes.push('text-right');

    return classes.join(' ');
  }

  getCellClasses(column: TableColumn<T>): string {
    const classes = ['g-table-cell'];

    const sizeClasses = {
      small: 'px-3 py-2 text-sm',
      medium: 'px-4 py-3 text-base',
      large: 'px-5 py-4 text-lg',
    };

    classes.push(sizeClasses[this.size()]);

    if (column.align === 'center') classes.push('text-center');
    if (column.align === 'right') classes.push('text-right');

    if (this.bordered()) {
      classes.push('border-b border-gray-200 dark:border-gray-700');
    }

    return classes.join(' ');
  }

  getRowClasses(record: T, index: number): string {
    const classes = ['g-table-row'];

    if (this.hoverable()) {
      classes.push('hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors');
    }

    if (this.striped() && index % 2 === 1) {
      classes.push('bg-gray-50/50 dark:bg-gray-800/30');
    }

    if (this.isSelected(record)) {
      classes.push('bg-blue-50 dark:bg-blue-900/20');
    }

    if (this.bordered()) {
      classes.push('border-b border-gray-200 dark:border-gray-700');
    }

    return classes.join(' ');
  }

  getSortIconClass(direction: 'asc' | 'desc', key: string): string {
    const isActive = this.sortKey() === key && this.sortDirection() === direction;
    return isActive ? 'text-blue-600' : 'text-gray-400';
  }

  handleSort(key: string): void {
    let direction: 'asc' | 'desc' | null;

    if (this.sortKey() === key) {
      if (this.sortDirection() === 'asc') {
        direction = 'desc';
      } else if (this.sortDirection() === 'desc') {
        direction = null;
      } else {
        direction = 'asc';
      }
    } else {
      direction = 'asc';
    }

    this.sortKey.set(direction ? key : null);
    this.sortDirection.set(direction);
    this.sortChange.emit({ key, direction });
  }

  handleRowClick(record: T): void {
    this.rowClick.emit(record);
  }

  // Selection methods
  isSelected(record: T): boolean {
    return this.selectedRows().includes(record);
  }

  toggleSelect(record: T): void {
    const selected = this.selectedRows();
    const index = selected.indexOf(record);

    if (index > -1) {
      selected.splice(index, 1);
      this.selectedRows.set([...selected]);
    } else {
      this.selectedRows.set([...selected, record]);
    }

    this.selectionChange.emit(this.selectedRows());
  }

  isAllSelected(): boolean {
    const data = this.sortedData();
    return data.length > 0 && this.selectedRows().length === data.length;
  }

  isSomeSelected(): boolean {
    const selected = this.selectedRows().length;
    const total = this.sortedData().length;
    return selected > 0 && selected < total;
  }

  toggleSelectAll(): void {
    if (this.isAllSelected()) {
      this.selectedRows.set([]);
    } else {
      this.selectedRows.set([...this.sortedData()]);
    }
    this.selectionChange.emit(this.selectedRows());
  }

  // Expand methods
  isExpanded(record: T): boolean {
    const index = this.dataSource().indexOf(record);
    return this.expandedRows().has(index);
  }

  toggleExpand(record: T): void {
    const index = this.dataSource().indexOf(record);
    const expanded = new Set(this.expandedRows());

    if (expanded.has(index)) {
      expanded.delete(index);
    } else {
      expanded.add(index);
    }

    this.expandedRows.set(expanded);
  }

  getColspan(): number {
    let count = this.columns().length;
    if (this.selectable()) count++;
    if (this.expandable()) count++;
    return count;
  }
}

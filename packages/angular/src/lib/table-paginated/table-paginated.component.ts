import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, TableColumn, TableDataSource, TableSize } from '../table/table.component';
import { PaginationComponent, PaginationSize } from '../pagination/pagination.component';

@Component({
  selector: 'g-table-paginated',
  standalone: true,
  imports: [CommonModule, TableComponent, PaginationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="g-table-paginated">
      <!-- Table -->
      <g-table
        [columns]="columns()"
        [dataSource]="paginatedData()"
        [size]="tableSize()"
        [bordered]="bordered()"
        [striped]="striped()"
        [hoverable]="hoverable()"
        [loading]="loading()"
        [selectable]="selectable()"
        [expandable]="expandable()"
        [emptyText]="emptyText()"
        [showTotal]="false"
        (rowClick)="rowClick.emit($event)"
        (selectionChange)="selectionChange.emit($event)"
        (sortChange)="handleSortChange($event)"
      >
        <ng-content></ng-content>
      </g-table>

      <!-- Pagination -->
      @if (dataSource().length > 0) {
        <div class="mt-4 flex justify-end">
          <g-pagination
            [total]="total()"
            [pageSize]="pageSize()"
            [currentPage]="currentPage()"
            [size]="paginationSize()"
            [showTotal]="showTotal()"
            [showSizeChanger]="showSizeChanger()"
            [showQuickJumper]="showQuickJumper()"
            [showFirstLast]="showFirstLast()"
            [pageSizeOptions]="pageSizeOptions()"
            [maxPageButtons]="maxPageButtons()"
            (pageChange)="handlePageChange($event)"
            (pageSizeChange)="handlePageSizeChange($event)"
          ></g-pagination>
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
export class TablePaginatedComponent<T extends TableDataSource = TableDataSource> {
  // Table Inputs
  columns = input.required<TableColumn<T>[]>();
  dataSource = input<T[]>([]);
  tableSize = input<TableSize>('medium');
  bordered = input(false);
  striped = input(false);
  hoverable = input(true);
  loading = input(false);
  selectable = input(false);
  expandable = input(false);
  emptyText = input('No data');

  // Pagination Inputs
  pageSize = input(10);
  paginationSize = input<PaginationSize>('medium');
  showTotal = input(true);
  showSizeChanger = input(true);
  showQuickJumper = input(false);
  showFirstLast = input(false);
  pageSizeOptions = input<number[]>([10, 20, 50, 100]);
  maxPageButtons = input(7);

  // Outputs
  rowClick = output<T>();
  selectionChange = output<T[]>();
  sortChange = output<{ key: string; direction: 'asc' | 'desc' | null }>();
  pageChange = output<{ page: number; pageSize: number }>();

  // State
  currentPage = signal(1);
  currentPageSize = signal(this.pageSize());
  sortKey = signal<string | null>(null);
  sortDirection = signal<'asc' | 'desc' | null>(null);

  // Computed
  total = computed(() => this.dataSource().length);

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

  paginatedData = computed(() => {
    const data = this.sortedData();
    const page = this.currentPage();
    const size = this.currentPageSize();

    const start = (page - 1) * size;
    const end = start + size;

    return data.slice(start, end);
  });

  handlePageChange(page: number): void {
    this.currentPage.set(page);
    this.pageChange.emit({
      page,
      pageSize: this.currentPageSize(),
    });
  }

  handlePageSizeChange(size: number): void {
    this.currentPageSize.set(size);
    this.currentPage.set(1); // Reset to first page
    this.pageChange.emit({
      page: 1,
      pageSize: size,
    });
  }

  handleSortChange(event: { key: string; direction: 'asc' | 'desc' | null }): void {
    this.sortKey.set(event.key);
    this.sortDirection.set(event.direction);
    this.sortChange.emit(event);
  }
}

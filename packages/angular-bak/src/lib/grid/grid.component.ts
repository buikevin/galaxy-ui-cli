import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridAlign = 'start' | 'center' | 'end' | 'stretch';
export type GridJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

/**
 * Galaxy UI Grid Component
 *
 * A responsive grid layout system inspired by Nebular.
 * Wrapper around CSS Grid with convenient props.
 *
 * @example
 * ```html
 * <g-grid [gridCols]="3" [gridGap]="'md'">
 *   <g-grid-col [colSpan]="2">
 *     Wide column
 *   </g-grid-col>
 *   <g-grid-col>
 *     Normal column
 *   </g-grid-col>
 * </g-grid>
 * ```
 */
@Component({
  selector: 'g-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class GridComponent {
  cols = signal<GridCols>(12);
  colsSm = signal<GridCols | null>(null);
  colsMd = signal<GridCols | null>(null);
  colsLg = signal<GridCols | null>(null);
  colsXl = signal<GridCols | null>(null);
  gap = signal<GridGap>('md');
  align = signal<GridAlign>('stretch');
  justify = signal<GridJustify>('start');

  @Input() set gridCols(v: GridCols) { this.cols.set(v); }
  @Input() set gridColsSm(v: GridCols) { this.colsSm.set(v); }
  @Input() set gridColsMd(v: GridCols) { this.colsMd.set(v); }
  @Input() set gridColsLg(v: GridCols) { this.colsLg.set(v); }
  @Input() set gridColsXl(v: GridCols) { this.colsXl.set(v); }
  @Input() set gridGap(v: GridGap) { this.gap.set(v); }
  @Input() set gridAlign(v: GridAlign) { this.align.set(v); }
  @Input() set gridJustify(v: GridJustify) { this.justify.set(v); }

  containerClasses = computed(() => {
    const baseClasses = ['grid'];

    // Columns
    const colClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    };

    baseClasses.push(colClasses[this.cols()]);

    // Responsive columns
    if (this.colsSm()) {
      baseClasses.push(`sm:grid-cols-${this.colsSm()}`);
    }
    if (this.colsMd()) {
      baseClasses.push(`md:grid-cols-${this.colsMd()}`);
    }
    if (this.colsLg()) {
      baseClasses.push(`lg:grid-cols-${this.colsLg()}`);
    }
    if (this.colsXl()) {
      baseClasses.push(`xl:grid-cols-${this.colsXl()}`);
    }

    // Gap
    const gapClasses = {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
    };
    baseClasses.push(gapClasses[this.gap()]);

    // Align items
    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    };
    baseClasses.push(alignClasses[this.align()]);

    // Justify content
    const justifyClasses = {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      between: 'justify-items-stretch',
      around: 'justify-items-stretch',
      evenly: 'justify-items-stretch',
    };
    baseClasses.push(justifyClasses[this.justify()]);

    return baseClasses.join(' ');
  });
}

/**
 * Galaxy UI Grid Column Component
 */
@Component({
  selector: 'g-grid-col',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="colClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class GridColComponent {
  span = signal<number>(1);
  spanSm = signal<number | null>(null);
  spanMd = signal<number | null>(null);
  spanLg = signal<number | null>(null);
  spanXl = signal<number | null>(null);
  start = signal<number | null>(null);
  end = signal<number | null>(null);

  @Input() set colSpan(v: number) { this.span.set(v); }
  @Input() set colSpanSm(v: number) { this.spanSm.set(v); }
  @Input() set colSpanMd(v: number) { this.spanMd.set(v); }
  @Input() set colSpanLg(v: number) { this.spanLg.set(v); }
  @Input() set colSpanXl(v: number) { this.spanXl.set(v); }
  @Input() set colStart(v: number) { this.start.set(v); }
  @Input() set colEnd(v: number) { this.end.set(v); }

  colClasses = computed(() => {
    const classes = [];

    // Column span
    if (this.span() > 1) {
      classes.push(`col-span-${this.span()}`);
    }

    // Responsive spans
    if (this.spanSm()) {
      classes.push(`sm:col-span-${this.spanSm()}`);
    }
    if (this.spanMd()) {
      classes.push(`md:col-span-${this.spanMd()}`);
    }
    if (this.spanLg()) {
      classes.push(`lg:col-span-${this.spanLg()}`);
    }
    if (this.spanXl()) {
      classes.push(`xl:col-span-${this.spanXl()}`);
    }

    // Column start/end
    if (this.start()) {
      classes.push(`col-start-${this.start()}`);
    }
    if (this.end()) {
      classes.push(`col-end-${this.end()}`);
    }

    return classes.join(' ');
  });
}

/**
 * Galaxy UI Grid Row Component
 */
@Component({
  selector: 'g-grid-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="rowClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class GridRowComponent {
  span = signal<number>(1);
  start = signal<number | null>(null);
  end = signal<number | null>(null);

  @Input() set rowSpan(v: number) { this.span.set(v); }
  @Input() set rowStart(v: number) { this.start.set(v); }
  @Input() set rowEnd(v: number) { this.end.set(v); }

  rowClasses = computed(() => {
    const classes = [];

    // Row span
    if (this.span() > 1) {
      classes.push(`row-span-${this.span()}`);
    }

    // Row start/end
    if (this.start()) {
      classes.push(`row-start-${this.start()}`);
    }
    if (this.end()) {
      classes.push(`row-end-${this.end()}`);
    }

    return classes.join(' ');
  });
}

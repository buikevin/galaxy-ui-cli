import {
  Component,
  Input,
  signal,
  computed,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type SplitterOrientation = 'horizontal' | 'vertical';

/**
 * Galaxy UI Splitter Component
 *
 * A resizable split pane layout inspired by Nebular.
 * Allows users to resize panels by dragging the divider.
 *
 * @example
 * ```html
 * <g-splitter [splitterOrientation]="'horizontal'">
 *   <g-splitter-pane [paneSize]="30">
 *     Sidebar
 *   </g-splitter-pane>
 *   <g-splitter-pane [paneSize]="70">
 *     Main content
 *   </g-splitter-pane>
 * </g-splitter>
 * ```
 */
@Component({
  selector: 'g-splitter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #container [class]="containerClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class SplitterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;

  orientation = signal<SplitterOrientation>('horizontal');
  gutterSize = signal(8);

  @Input() set splitterOrientation(v: SplitterOrientation) { this.orientation.set(v); }
  @Input() set splitterGutterSize(v: number) { this.gutterSize.set(v); }

  private resizeObserver?: ResizeObserver;

  ngAfterViewInit() {
    // Setup resize observer if needed
    this.resizeObserver = new ResizeObserver(() => {
      // Handle container resize
    });
    this.resizeObserver.observe(this.container.nativeElement);
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  containerClasses = computed(() => {
    const orientationClass =
      this.orientation() === 'horizontal' ? 'flex-row' : 'flex-col';

    return ['flex', 'w-full', 'h-full', 'overflow-hidden', orientationClass].join(' ');
  });
}

/**
 * Splitter Pane Component
 */
@Component({
  selector: 'g-splitter-pane',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="paneClasses()" [style]="paneStyles()">
      <ng-content></ng-content>
    </div>
    @if (!isLast()) {
      <div
        #gutter
        [class]="gutterClasses()"
        (mousedown)="onGutterMouseDown($event)"
      >
        <div [class]="gutterHandleClasses()"></div>
      </div>
    }
  `,
})
export class SplitterPaneComponent implements AfterViewInit {
  @ViewChild('gutter') gutter?: ElementRef<HTMLDivElement>;

  size = signal<number>(50); // Percentage
  minSize = signal<number>(10); // Percentage
  maxSize = signal<number>(90); // Percentage
  resizable = signal(true);
  isLast = signal(false);

  private isDragging = false;
  private startPos = 0;
  private startSize = 0;

  @Input() set paneSize(v: number) { this.size.set(v); }
  @Input() set paneMinSize(v: number) { this.minSize.set(v); }
  @Input() set paneMaxSize(v: number) { this.maxSize.set(v); }
  @Input() set paneResizable(v: boolean) { this.resizable.set(v); }

  ngAfterViewInit() {
    // Determine if this is the last pane
    const parent = this.gutter?.nativeElement.parentElement;
    if (parent) {
      const panes = Array.from(parent.children);
      const thisPane = this.gutter?.nativeElement.previousElementSibling;
      const lastPane = panes[panes.length - 1];
      this.isLast.set(thisPane === lastPane);
    }
  }

  paneClasses = computed(() => {
    return ['flex-shrink-0', 'overflow-auto', 'bg-white', 'dark:bg-slate-900'].join(' ');
  });

  paneStyles = computed(() => {
    return `flex-basis: ${this.size()}%`;
  });

  gutterClasses = computed(() => {
    const baseClasses = [
      'flex',
      'items-center',
      'justify-center',
      'flex-shrink-0',
      'bg-slate-200',
      'dark:bg-slate-700',
      'transition-colors',
      'duration-150',
    ];

    if (this.resizable()) {
      baseClasses.push(
        'hover:bg-slate-300',
        'dark:hover:bg-slate-600',
        'cursor-col-resize',
        'group'
      );
    } else {
      baseClasses.push('cursor-default');
    }

    // Width/height based on orientation
    baseClasses.push('w-2'); // For horizontal orientation
    // For vertical, parent should add h-2

    return baseClasses.join(' ');
  });

  gutterHandleClasses = computed(() => {
    return [
      'w-1',
      'h-8',
      'rounded-full',
      'bg-slate-400',
      'dark:bg-slate-500',
      'opacity-0',
      'group-hover:opacity-100',
      'transition-opacity',
      'duration-150',
    ].join(' ');
  });

  onGutterMouseDown(event: MouseEvent) {
    if (!this.resizable()) return;

    event.preventDefault();
    this.isDragging = true;
    this.startPos = event.clientX; // For horizontal
    this.startSize = this.size();

    const onMouseMove = (e: MouseEvent) => {
      if (!this.isDragging) return;

      const parent = (event.target as HTMLElement).parentElement;
      if (!parent) return;

      const containerWidth = parent.offsetWidth;
      const delta = e.clientX - this.startPos;
      const deltaPercent = (delta / containerWidth) * 100;

      let newSize = this.startSize + deltaPercent;
      newSize = Math.max(this.minSize(), Math.min(this.maxSize(), newSize));

      this.size.set(newSize);
    };

    const onMouseUp = () => {
      this.isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}

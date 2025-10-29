import { Component, Input, signal, computed, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AccordionStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';

/**
 * Galaxy UI Accordion Component
 *
 * A collapsible content container inspired by Nebular's accordion.
 * Supports single or multiple items expanded at once.
 *
 * @example
 * ```html
 * <g-accordion>
 *   <g-accordion-item title="Section 1">
 *     Content for section 1
 *   </g-accordion-item>
 *   <g-accordion-item title="Section 2">
 *     Content for section 2
 *   </g-accordion-item>
 * </g-accordion>
 * ```
 */
@Component({
  selector: 'g-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

  multi = signal(false);
  status = signal<AccordionStatus>('basic');

  @Input() set accordionMulti(v: boolean) { this.multi.set(v); }
  @Input() set accordionStatus(v: AccordionStatus) { this.status.set(v); }

  ngAfterContentInit() {
    // Setup accordion behavior
    this.items.forEach((item) => {
      item.parentStatus = this.status;
      item.onToggle = () => this.handleItemToggle(item);
    });
  }

  handleItemToggle(clickedItem: AccordionItemComponent) {
    if (!this.multi()) {
      // Close all other items
      this.items.forEach((item) => {
        if (item !== clickedItem && item.isOpen()) {
          item.isOpen.set(false);
        }
      });
    }
  }

  containerClasses = computed(() => {
    return [
      'rounded-lg',
      'border',
      'border-slate-200',
      'dark:border-slate-700',
      'overflow-hidden',
      'bg-white',
      'dark:bg-slate-900',
    ].join(' ');
  });
}

/**
 * Accordion Item Component
 */
@Component({
  selector: 'g-accordion-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="itemClasses()">
      <!-- Header -->
      <button
        type="button"
        [class]="headerClasses()"
        (click)="toggle()"
        [attr.aria-expanded]="isOpen()"
      >
        <span class="flex-1 text-left font-medium">{{ title() }}</span>
        <svg
          class="w-5 h-5 transition-transform duration-200"
          [class.rotate-180]="isOpen()"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Content -->
      <div
        [class]="contentWrapperClasses()"
        [@slideDown]="isOpen() ? 'open' : 'closed'"
      >
        <div [class]="contentClasses()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  animations: [],
})
export class AccordionItemComponent {
  isOpen = signal(false);
  title = signal('');
  disabled = signal(false);
  parentStatus = signal<AccordionStatus>('basic');
  onToggle: (() => void) | null = null;

  @Input() set itemTitle(v: string) { this.title.set(v); }
  @Input() set itemOpen(v: boolean) { this.isOpen.set(v); }
  @Input() set itemDisabled(v: boolean) { this.disabled.set(v); }

  toggle() {
    if (!this.disabled()) {
      this.isOpen.update((v) => !v);
      if (this.onToggle) {
        this.onToggle();
      }
    }
  }

  itemClasses = computed(() => {
    return 'border-b border-slate-200 dark:border-slate-700 last:border-b-0';
  });

  headerClasses = computed(() => {
    const baseClasses = [
      'w-full',
      'flex',
      'items-center',
      'gap-3',
      'px-6',
      'py-4',
      'text-left',
      'transition-colors',
      'duration-200',
    ];

    if (this.disabled()) {
      baseClasses.push(
        'opacity-50',
        'cursor-not-allowed',
        'bg-slate-50',
        'dark:bg-slate-800/30'
      );
    } else {
      // Status-based colors when open
      const statusClasses = {
        basic: this.isOpen()
          ? 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
          : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300',
        primary: this.isOpen()
          ? 'bg-violet-50 dark:bg-violet-950 text-violet-900 dark:text-violet-100'
          : 'hover:bg-violet-50 dark:hover:bg-violet-950/50 text-slate-700 dark:text-slate-300',
        success: this.isOpen()
          ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100'
          : 'hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-slate-700 dark:text-slate-300',
        info: this.isOpen()
          ? 'bg-cyan-50 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-100'
          : 'hover:bg-cyan-50 dark:hover:bg-cyan-950/50 text-slate-700 dark:text-slate-300',
        warning: this.isOpen()
          ? 'bg-amber-50 dark:bg-amber-950 text-amber-900 dark:text-amber-100'
          : 'hover:bg-amber-50 dark:hover:bg-amber-950/50 text-slate-700 dark:text-slate-300',
        danger: this.isOpen()
          ? 'bg-red-50 dark:bg-red-950 text-red-900 dark:text-red-100'
          : 'hover:bg-red-50 dark:hover:bg-red-950/50 text-slate-700 dark:text-slate-300',
      };

      baseClasses.push(statusClasses[this.parentStatus()]);
    }

    return baseClasses.join(' ');
  });

  contentWrapperClasses = computed(() => {
    return [
      'overflow-hidden',
      'transition-all',
      'duration-200',
      'ease-in-out',
      this.isOpen() ? 'max-h-screen' : 'max-h-0',
    ].join(' ');
  });

  contentClasses = computed(() => {
    return [
      'px-6',
      'py-4',
      'text-slate-700',
      'dark:text-slate-300',
      'bg-white',
      'dark:bg-slate-900',
    ].join(' ');
  });
}

import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type CardSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

/**
 * Galaxy UI Card Component
 *
 * A flexible card container inspired by Nebular's card design.
 * Perfect for grouping related content with optional header and footer.
 *
 * @example
 * ```html
 * <g-card>
 *   <g-card-header>
 *     <h3>Card Title</h3>
 *   </g-card-header>
 *   <g-card-body>
 *     Card content goes here
 *   </g-card-body>
 *   <g-card-footer>
 *     Footer content
 *   </g-card-footer>
 * </g-card>
 * ```
 */
@Component({
  selector: 'g-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  status = signal<CardStatus>('basic');
  size = signal<CardSize>('medium');
  accent = signal<CardStatus | null>(null);
  elevated = signal(true);

  @Input() set cardStatus(v: CardStatus) { this.status.set(v); }
  @Input() set cardSize(v: CardSize) { this.size.set(v); }
  @Input() set cardAccent(v: CardStatus | null) { this.accent.set(v); }
  @Input() set cardElevated(v: boolean) { this.elevated.set(v); }

  containerClasses = computed(() => {
    const baseClasses = [
      'rounded-lg',
      'overflow-hidden',
      'transition-shadow',
      'duration-200',
      'bg-white',
      'dark:bg-slate-900',
    ];

    // Status border
    const statusClasses = {
      basic: 'border border-slate-200 dark:border-slate-700',
      primary: 'border border-violet-200 dark:border-violet-800',
      success: 'border border-emerald-200 dark:border-emerald-800',
      info: 'border border-cyan-200 dark:border-cyan-800',
      warning: 'border border-amber-200 dark:border-amber-800',
      danger: 'border border-red-200 dark:border-red-800',
    };

    // Accent (colored left border)
    const accentClasses = {
      basic: 'border-l-4 border-l-slate-600 dark:border-l-slate-400',
      primary: 'border-l-4 border-l-violet-600 dark:border-l-violet-400',
      success: 'border-l-4 border-l-emerald-600 dark:border-l-emerald-400',
      info: 'border-l-4 border-l-cyan-600 dark:border-l-cyan-400',
      warning: 'border-l-4 border-l-amber-500 dark:border-l-amber-400',
      danger: 'border-l-4 border-l-red-600 dark:border-l-red-400',
    };

    // Elevation shadow
    const elevationClass = this.elevated()
      ? 'shadow-lg hover:shadow-xl'
      : 'shadow-sm';

    const classes = [
      ...baseClasses,
      statusClasses[this.status()],
      elevationClass,
    ];

    if (this.accent()) {
      classes.push(accentClasses[this.accent()!]);
    }

    return classes.join(' ');
  });
}

/**
 * Card Header Component
 */
@Component({
  selector: 'g-card-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="headerClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardHeaderComponent {
  size = signal<CardSize>('medium');

  @Input() set headerSize(v: CardSize) { this.size.set(v); }

  headerClasses = computed(() => {
    const sizeClasses = {
      tiny: 'px-3 py-2',
      small: 'px-4 py-3',
      medium: 'px-6 py-4',
      large: 'px-7 py-5',
      giant: 'px-8 py-6',
    };

    return [
      sizeClasses[this.size()],
      'border-b',
      'border-slate-200',
      'dark:border-slate-700',
      'bg-slate-50',
      'dark:bg-slate-800/50',
      'font-semibold',
      'text-slate-900',
      'dark:text-slate-100',
    ].join(' ');
  });
}

/**
 * Card Body Component
 */
@Component({
  selector: 'g-card-body',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="bodyClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardBodyComponent {
  size = signal<CardSize>('medium');

  @Input() set bodySize(v: CardSize) { this.size.set(v); }

  bodyClasses = computed(() => {
    const sizeClasses = {
      tiny: 'p-3',
      small: 'p-4',
      medium: 'p-6',
      large: 'p-7',
      giant: 'p-8',
    };

    return [
      sizeClasses[this.size()],
      'text-slate-700',
      'dark:text-slate-300',
    ].join(' ');
  });
}

/**
 * Card Footer Component
 */
@Component({
  selector: 'g-card-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="footerClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardFooterComponent {
  size = signal<CardSize>('medium');

  @Input() set footerSize(v: CardSize) { this.size.set(v); }

  footerClasses = computed(() => {
    const sizeClasses = {
      tiny: 'px-3 py-2',
      small: 'px-4 py-3',
      medium: 'px-6 py-4',
      large: 'px-7 py-5',
      giant: 'px-8 py-6',
    };

    return [
      sizeClasses[this.size()],
      'border-t',
      'border-slate-200',
      'dark:border-slate-700',
      'bg-slate-50',
      'dark:bg-slate-800/50',
      'text-slate-600',
      'dark:text-slate-400',
    ].join(' ');
  });
}

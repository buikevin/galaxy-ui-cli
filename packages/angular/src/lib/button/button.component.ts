import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type ButtonAppearance = 'filled' | 'outline' | 'ghost';
export type ButtonShape = 'rectangle' | 'semi-round' | 'round';

/**
 * Galaxy UI Button Component
 *
 * Inspired by Nebular's button design with Tailwind CSS implementation.
 * Supports multiple statuses, sizes, appearances, and shapes.
 *
 * @example
 * ```html
 * <button gButton status="primary" size="medium">
 *   Click me
 * </button>
 * ```
 */
@Component({
  selector: 'button[gButton], a[gButton]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class]': 'computedClasses()',
    '[attr.disabled]': 'disabled() ? true : null',
  },
})
export class ButtonComponent {
  /** Button status (color scheme) */
  status = signal<ButtonStatus>('basic');

  /** Button size */
  size = signal<ButtonSize>('medium');

  /** Button appearance */
  appearance = signal<ButtonAppearance>('filled');

  /** Button shape */
  shape = signal<ButtonShape>('rectangle');

  /** Disabled state */
  disabled = signal(false);

  /** Full width button */
  fullWidth = signal(false);

  @Input() set buttonStatus(value: ButtonStatus) { this.status.set(value); }
  @Input() set buttonSize(value: ButtonSize) { this.size.set(value); }
  @Input() set buttonAppearance(value: ButtonAppearance) { this.appearance.set(value); }
  @Input() set buttonShape(value: ButtonShape) { this.shape.set(value); }
  @Input() set buttonDisabled(value: boolean) { this.disabled.set(value); }
  @Input() set buttonFullWidth(value: boolean) { this.fullWidth.set(value); }

  computedClasses = computed(() => {
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:pointer-events-none',
    ];

    // Size classes (inspired by Nebular)
    const sizeClasses = {
      tiny: 'px-2.5 py-1 text-xs',
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-5 py-2.5 text-lg',
      giant: 'px-6 py-3 text-xl',
    };

    // Shape classes
    const shapeClasses = {
      rectangle: 'rounded-md',
      'semi-round': 'rounded-lg',
      round: 'rounded-full',
    };

    // Status classes (Nebular-inspired color scheme)
    const statusClasses = {
      filled: {
        basic: 'bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600',
        primary: 'bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500 dark:bg-violet-500 dark:hover:bg-violet-600',
        success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600',
        info: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600',
        warning: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500 dark:bg-amber-400 dark:hover:bg-amber-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600',
      },
      outline: {
        basic: 'border-2 border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-500 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800',
        primary: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50 focus:ring-violet-500 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-950',
        success: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950',
        info: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-950',
        warning: 'border-2 border-amber-500 text-amber-600 hover:bg-amber-50 focus:ring-amber-500 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950',
        danger: 'border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950',
      },
      ghost: {
        basic: 'text-slate-700 hover:bg-slate-100 focus:ring-slate-500 dark:text-slate-300 dark:hover:bg-slate-800',
        primary: 'text-violet-600 hover:bg-violet-50 focus:ring-violet-500 dark:text-violet-400 dark:hover:bg-violet-950',
        success: 'text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950',
        info: 'text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500 dark:text-cyan-400 dark:hover:bg-cyan-950',
        warning: 'text-amber-600 hover:bg-amber-50 focus:ring-amber-500 dark:text-amber-400 dark:hover:bg-amber-950',
        danger: 'text-red-600 hover:bg-red-50 focus:ring-red-500 dark:text-red-400 dark:hover:bg-red-950',
      },
    };

    const classes = [
      ...baseClasses,
      sizeClasses[this.size()],
      shapeClasses[this.shape()],
      statusClasses[this.appearance()][this.status()],
    ];

    if (this.fullWidth()) {
      classes.push('w-full');
    }

    return classes.join(' ');
  });
}

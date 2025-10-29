import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerAlign = 'start' | 'center' | 'end';

/**
 * Galaxy UI Divider Component
 *
 * A visual separator inspired by Nebular's divider.
 * Supports horizontal and vertical orientations with optional label.
 *
 * @example
 * ```html
 * <!-- Simple divider -->
 * <g-divider></g-divider>
 *
 * <!-- Divider with label -->
 * <g-divider [dividerLabel]="'OR'"></g-divider>
 *
 * <!-- Vertical divider -->
 * <div class="flex items-center gap-4">
 *   <span>Left</span>
 *   <g-divider [dividerOrientation]="'vertical'"></g-divider>
 *   <span>Right</span>
 * </div>
 * ```
 */
@Component({
  selector: 'g-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (orientation() === 'horizontal') {
      <div [class]="horizontalContainerClasses()">
        @if (label()) {
          <div [class]="labelWrapperClasses()">
            <span [class]="labelClasses()">{{ label() }}</span>
          </div>
        } @else {
          <div [class]="lineClasses()"></div>
        }
      </div>
    } @else {
      <div [class]="verticalContainerClasses()">
        <div [class]="verticalLineClasses()"></div>
      </div>
    }
  `,
})
export class DividerComponent {
  orientation = signal<DividerOrientation>('horizontal');
  label = signal('');
  align = signal<DividerAlign>('center');
  dashed = signal(false);

  @Input() set dividerOrientation(v: DividerOrientation) { this.orientation.set(v); }
  @Input() set dividerLabel(v: string) { this.label.set(v); }
  @Input() set dividerAlign(v: DividerAlign) { this.align.set(v); }
  @Input() set dividerDashed(v: boolean) { this.dashed.set(v); }

  horizontalContainerClasses = computed(() => {
    return [
      'relative',
      'flex',
      'items-center',
      'w-full',
      'my-4',
    ].join(' ');
  });

  verticalContainerClasses = computed(() => {
    return [
      'inline-flex',
      'items-stretch',
      'h-full',
      'mx-4',
    ].join(' ');
  });

  lineClasses = computed(() => {
    const baseClasses = [
      'flex-1',
      'border-t',
      'border-slate-200',
      'dark:border-slate-700',
    ];

    if (this.dashed()) {
      baseClasses.push('border-dashed');
    }

    return baseClasses.join(' ');
  });

  verticalLineClasses = computed(() => {
    const baseClasses = [
      'w-px',
      'bg-slate-200',
      'dark:bg-slate-700',
    ];

    if (this.dashed()) {
      baseClasses.push('bg-gradient-to-b', 'from-slate-200', 'via-transparent');
    }

    return baseClasses.join(' ');
  });

  labelWrapperClasses = computed(() => {
    const alignClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    };

    return [
      'flex',
      'items-center',
      'w-full',
      alignClasses[this.align()],
      'gap-4',
    ].join(' ');
  });

  labelClasses = computed(() => {
    const positionClasses = {
      start: 'pr-4 before:hidden after:flex-1',
      center: 'px-4 before:flex-1 after:flex-1',
      end: 'pl-4 before:flex-1 after:hidden',
    };

    const lineStyle = this.dashed() ? 'border-dashed' : '';

    return [
      'relative',
      'inline-flex',
      'items-center',
      'text-sm',
      'font-medium',
      'text-slate-600',
      'dark:text-slate-400',
      'whitespace-nowrap',
      'before:content-[""]',
      'before:border-t',
      'before:border-slate-200',
      'dark:before:border-slate-700',
      'after:content-[""]',
      'after:border-t',
      'after:border-slate-200',
      'dark:after:border-slate-700',
      positionClasses[this.align()],
      lineStyle,
      lineStyle ? 'before:border-dashed after:border-dashed' : '',
    ].join(' ');
  });
}

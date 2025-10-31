import { Component, Input, signal, computed, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type CheckboxStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';

/**
 * Galaxy UI Checkbox Component
 *
 * Inspired by Nebular's checkbox design with Tailwind CSS implementation.
 * Supports indeterminate state and various statuses.
 *
 * @example
 * ```html
 * <g-checkbox
 *   label="Accept terms and conditions"
 *   [(checked)]="accepted">
 * </g-checkbox>
 * ```
 */
@Component({
  selector: 'g-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label [class]="containerClasses()">
      <div class="relative flex items-center">
        <input
          type="checkbox"
          [id]="checkboxId()"
          [checked]="checked()"
          [indeterminate]="indeterminate()"
          [disabled]="disabled()"
          [class]="checkboxClasses()"
          (change)="onChange($event)"
        />
        <div [class]="checkmarkContainerClasses()">
          @if (checked()) {
            <svg class="w-full h-full" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 4L6 11L3 8"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          @if (indeterminate() && !checked()) {
            <svg class="w-full h-full" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 8H12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          }
        </div>
      </div>

      @if (label()) {
        <span [class]="labelClasses()">{{ label() }}</span>
      }

      @if (description()) {
        <span class="block mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          {{ description() }}
        </span>
      }
    </label>
  `,
})
export class CheckboxComponent {
  // Signals
  checkboxId = signal(`galaxy-checkbox-${Math.random().toString(36).substr(2, 9)}`);
  checked = signal(false);
  indeterminate = signal(false);
  status = signal<CheckboxStatus>('primary');
  label = signal('');
  description = signal('');
  disabled = signal(false);

  @Output() checkedChange = new EventEmitter<boolean>();

  // Input setters
  @Input() set checkboxChecked(v: boolean) { this.checked.set(v); }
  @Input() set checkboxIndeterminate(v: boolean) { this.indeterminate.set(v); }
  @Input() set checkboxStatus(v: CheckboxStatus) { this.status.set(v); }
  @Input() set checkboxLabel(v: string) { this.label.set(v); }
  @Input() set checkboxDescription(v: string) { this.description.set(v); }
  @Input() set checkboxDisabled(v: boolean) { this.disabled.set(v); }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked.set(target.checked);
    this.indeterminate.set(false);
    this.checkedChange.emit(target.checked);
  }

  containerClasses = computed(() => {
    return [
      'flex',
      'items-start',
      'gap-3',
      'cursor-pointer',
      this.disabled() ? 'opacity-50 cursor-not-allowed' : '',
    ].filter(Boolean).join(' ');
  });

  checkboxClasses = computed(() => {
    return 'sr-only peer';
  });

  checkmarkContainerClasses = computed(() => {
    const baseClasses = [
      'flex',
      'items-center',
      'justify-center',
      'w-5',
      'h-5',
      'border-2',
      'rounded',
      'transition-all',
      'duration-200',
      'peer-focus:ring-2',
      'peer-focus:ring-offset-2',
    ];

    // Status classes
    const statusClasses = {
      basic: {
        unchecked: 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900',
        checked: 'border-slate-600 bg-slate-600 text-white dark:border-slate-500 dark:bg-slate-500',
        ring: 'peer-focus:ring-slate-500',
      },
      primary: {
        unchecked: 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900',
        checked: 'border-violet-600 bg-violet-600 text-white dark:border-violet-500 dark:bg-violet-500',
        ring: 'peer-focus:ring-violet-500',
      },
      success: {
        unchecked: 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900',
        checked: 'border-emerald-600 bg-emerald-600 text-white dark:border-emerald-500 dark:bg-emerald-500',
        ring: 'peer-focus:ring-emerald-500',
      },
      info: {
        unchecked: 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900',
        checked: 'border-cyan-600 bg-cyan-600 text-white dark:border-cyan-500 dark:bg-cyan-500',
        ring: 'peer-focus:ring-cyan-500',
      },
      warning: {
        unchecked: 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900',
        checked: 'border-amber-500 bg-amber-500 text-white dark:border-amber-400 dark:bg-amber-400',
        ring: 'peer-focus:ring-amber-500',
      },
      danger: {
        unchecked: 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900',
        checked: 'border-red-600 bg-red-600 text-white dark:border-red-500 dark:bg-red-500',
        ring: 'peer-focus:ring-red-500',
      },
    };

    const currentStatus = this.status();
    const isCheckedOrIndeterminate = this.checked() || this.indeterminate();

    return [
      ...baseClasses,
      isCheckedOrIndeterminate
        ? statusClasses[currentStatus].checked
        : statusClasses[currentStatus].unchecked,
      statusClasses[currentStatus].ring,
    ].join(' ');
  });

  labelClasses = computed(() => {
    return 'text-sm font-medium text-slate-700 dark:text-slate-300 select-none';
  });
}

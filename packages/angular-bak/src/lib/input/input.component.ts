import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type InputStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type InputSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type InputShape = 'rectangle' | 'semi-round' | 'round';

/**
 * Galaxy UI Input Component
 *
 * Inspired by Nebular's input design with Tailwind CSS implementation.
 * Supports labels, hints, error messages, and various statuses.
 *
 * @example
 * ```html
 * <g-input
 *   label="Email"
 *   placeholder="Enter your email"
 *   [(ngModel)]="email">
 * </g-input>
 * ```
 */
@Component({
  selector: 'g-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div [class]="containerClasses()">
      @if (label()) {
        <label [for]="inputId()" [class]="labelClasses()">
          {{ label() }}
          @if (required()) {
            <span class="text-red-500 ml-1">*</span>
          }
        </label>
      }

      <div class="relative">
        @if (prefixIcon()) {
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span [class]="iconClasses()">{{ prefixIcon() }}</span>
          </div>
        }

        <input
          [id]="inputId()"
          [type]="type()"
          [placeholder]="placeholder()"
          [disabled]="disabled()"
          [readonly]="readonly()"
          [class]="inputClasses()"
          [value]="value()"
          (input)="onInput($event)"
          (blur)="onBlur()"
          (focus)="onFocus()"
        />

        @if (suffixIcon()) {
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span [class]="iconClasses()">{{ suffixIcon() }}</span>
          </div>
        }
      </div>

      @if (hint() && !error()) {
        <p class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
          {{ hint() }}
        </p>
      }

      @if (error()) {
        <p class="mt-1.5 text-sm text-red-600 dark:text-red-400">
          {{ error() }}
        </p>
      }
    </div>
  `,
})
export class InputComponent {
  // Signals
  inputId = signal(`galaxy-input-${Math.random().toString(36).substr(2, 9)}`);
  value = signal('');
  status = signal<InputStatus>('basic');
  size = signal<InputSize>('medium');
  shape = signal<InputShape>('rectangle');
  type = signal('text');
  label = signal('');
  placeholder = signal('');
  hint = signal('');
  error = signal('');
  prefixIcon = signal('');
  suffixIcon = signal('');
  disabled = signal(false);
  readonly = signal(false);
  required = signal(false);
  fullWidth = signal(true);
  focused = signal(false);

  // Input setters
  @Input() set inputValue(v: string) { this.value.set(v); }
  @Input() set inputStatus(v: InputStatus) { this.status.set(v); }
  @Input() set inputSize(v: InputSize) { this.size.set(v); }
  @Input() set inputShape(v: InputShape) { this.shape.set(v); }
  @Input() set inputType(v: string) { this.type.set(v); }
  @Input() set inputLabel(v: string) { this.label.set(v); }
  @Input() set inputPlaceholder(v: string) { this.placeholder.set(v); }
  @Input() set inputHint(v: string) { this.hint.set(v); }
  @Input() set inputError(v: string) { this.error.set(v); }
  @Input() set inputPrefixIcon(v: string) { this.prefixIcon.set(v); }
  @Input() set inputSuffixIcon(v: string) { this.suffixIcon.set(v); }
  @Input() set inputDisabled(v: boolean) { this.disabled.set(v); }
  @Input() set inputReadonly(v: boolean) { this.readonly.set(v); }
  @Input() set inputRequired(v: boolean) { this.required.set(v); }
  @Input() set inputFullWidth(v: boolean) { this.fullWidth.set(v); }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }

  onFocus() {
    this.focused.set(true);
  }

  onBlur() {
    this.focused.set(false);
  }

  containerClasses = computed(() => {
    const classes = [];
    if (this.fullWidth()) {
      classes.push('w-full');
    }
    return classes.join(' ');
  });

  labelClasses = computed(() => {
    return 'block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5';
  });

  inputClasses = computed(() => {
    const baseClasses = [
      'block',
      'w-full',
      'font-normal',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'placeholder:text-slate-400',
      'dark:placeholder:text-slate-500',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:bg-slate-100',
      'dark:disabled:bg-slate-800',
    ];

    // Size classes
    const sizeClasses = {
      tiny: 'px-2.5 py-1 text-xs',
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-3.5 py-2 text-base',
      large: 'px-4 py-2.5 text-lg',
      giant: 'px-5 py-3 text-xl',
    };

    // Shape classes
    const shapeClasses = {
      rectangle: 'rounded-md',
      'semi-round': 'rounded-lg',
      round: 'rounded-full',
    };

    // Status classes (border and ring colors)
    const statusClasses = {
      basic: 'border-slate-300 focus:ring-slate-500 focus:border-slate-500 dark:border-slate-600 dark:focus:ring-slate-400',
      primary: 'border-violet-300 focus:ring-violet-500 focus:border-violet-500 dark:border-violet-600 dark:focus:ring-violet-400',
      success: 'border-emerald-300 focus:ring-emerald-500 focus:border-emerald-500 dark:border-emerald-600 dark:focus:ring-emerald-400',
      info: 'border-cyan-300 focus:ring-cyan-500 focus:border-cyan-500 dark:border-cyan-600 dark:focus:ring-cyan-400',
      warning: 'border-amber-300 focus:ring-amber-500 focus:border-amber-500 dark:border-amber-600 dark:focus:ring-amber-400',
      danger: 'border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-600 dark:focus:ring-red-400',
    };

    // Background color
    const bgClasses = 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100';

    // Icon padding
    const iconPadding = [];
    if (this.prefixIcon()) iconPadding.push('pl-10');
    if (this.suffixIcon()) iconPadding.push('pr-10');

    const currentStatus = this.error() ? 'danger' : this.status();

    return [
      ...baseClasses,
      sizeClasses[this.size()],
      shapeClasses[this.shape()],
      'border',
      statusClasses[currentStatus],
      bgClasses,
      ...iconPadding,
    ].join(' ');
  });

  iconClasses = computed(() => {
    return 'text-slate-400 dark:text-slate-500';
  });
}

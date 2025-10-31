import { Component, Input, Output, EventEmitter, signal, forwardRef, contentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type ButtonGroupStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type ButtonGroupSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type ButtonGroupShape = 'rectangle' | 'semi-round' | 'round';

export interface ButtonGroupOption {
  value: any;
  label: string;
  icon?: string;
  disabled?: boolean;
}

@Component({
  selector: 'g-button-group-item',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class ButtonGroupItemComponent {}

@Component({
  selector: 'g-button-group',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonGroupComponent),
      multi: true,
    },
  ],
  template: `
    <div [class]="containerClasses()">
      @if (label()) {
        <label [class]="labelClasses()">
          {{ label() }}
          @if (required()) {
            <span class="text-red-500 ml-1">*</span>
          }
        </label>
      }

      <div [class]="groupClasses()">
        @for (option of options(); track option.value) {
          <button
            type="button"
            [class]="buttonClasses(option)"
            [disabled]="disabled() || option.disabled"
            (click)="selectOption(option)">
            @if (option.icon) {
              <span class="text-lg">{{ option.icon }}</span>
            }
            <span>{{ option.label }}</span>
          </button>
        }
      </div>

      @if (hint() && !error()) {
        <p class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{{ hint() }}</p>
      }

      @if (error()) {
        <p class="mt-1.5 text-sm text-red-600 dark:text-red-400">{{ error() }}</p>
      }
    </div>
  `,
  styles: [],
})
export class ButtonGroupComponent implements ControlValueAccessor {
  items = contentChildren(ButtonGroupItemComponent);

  // Inputs
  @Input() set buttonGroupLabel(value: string) { this.label.set(value); }
  @Input() set buttonGroupOptions(value: ButtonGroupOption[]) { this.options.set(value); }
  @Input() set buttonGroupStatus(value: ButtonGroupStatus) { this.status.set(value); }
  @Input() set buttonGroupSize(value: ButtonGroupSize) { this.size.set(value); }
  @Input() set buttonGroupShape(value: ButtonGroupShape) { this.shape.set(value); }
  @Input() set buttonGroupDisabled(value: boolean) { this.disabled.set(value); }
  @Input() set buttonGroupRequired(value: boolean) { this.required.set(value); }
  @Input() set buttonGroupMultiple(value: boolean) { this.multiple.set(value); }
  @Input() set buttonGroupVertical(value: boolean) { this.vertical.set(value); }
  @Input() set buttonGroupFullWidth(value: boolean) { this.fullWidth.set(value); }
  @Input() set buttonGroupHint(value: string) { this.hint.set(value); }
  @Input() set buttonGroupError(value: string) { this.error.set(value); }

  // Output
  @Output() valueChange = new EventEmitter<any>();

  // Signals
  label = signal<string>('');
  options = signal<ButtonGroupOption[]>([]);
  status = signal<ButtonGroupStatus>('primary');
  size = signal<ButtonGroupSize>('medium');
  shape = signal<ButtonGroupShape>('semi-round');
  disabled = signal<boolean>(false);
  required = signal<boolean>(false);
  multiple = signal<boolean>(false);
  vertical = signal<boolean>(false);
  fullWidth = signal<boolean>(false);
  hint = signal<string>('');
  error = signal<string>('');
  value = signal<any>(null);

  // ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  selectOption(option: ButtonGroupOption): void {
    if (this.disabled() || option.disabled) return;

    if (this.multiple()) {
      // Multiple selection
      const currentValue = Array.isArray(this.value()) ? [...this.value()] : [];
      const index = currentValue.indexOf(option.value);

      if (index > -1) {
        currentValue.splice(index, 1);
      } else {
        currentValue.push(option.value);
      }

      this.value.set(currentValue);
      this.onChange(currentValue);
      this.valueChange.emit(currentValue);
    } else {
      // Single selection
      // Allow deselect if clicking same option
      const newValue = this.value() === option.value ? null : option.value;
      this.value.set(newValue);
      this.onChange(newValue);
      this.valueChange.emit(newValue);
    }

    this.onTouched();
  }

  isSelected(option: ButtonGroupOption): boolean {
    if (this.multiple()) {
      return Array.isArray(this.value()) && this.value().includes(option.value);
    }
    return this.value() === option.value;
  }

  // Style classes
  containerClasses(): string {
    return 'w-full';
  }

  labelClasses(): string {
    const sizeClasses = {
      tiny: 'text-xs',
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
      giant: 'text-xl',
    };

    return `
      block font-medium text-slate-700 dark:text-slate-200 mb-2
      ${sizeClasses[this.size()]}
    `.trim();
  }

  groupClasses(): string {
    const shapeClasses = {
      rectangle: 'rounded-md',
      'semi-round': 'rounded-lg',
      round: 'rounded-full',
    };

    return `
      inline-flex border border-slate-200 dark:border-slate-700
      ${shapeClasses[this.shape()]}
      ${this.vertical() ? 'flex-col' : 'flex-row'}
      ${this.fullWidth() ? 'w-full' : ''}
      overflow-hidden
    `.trim();
  }

  buttonClasses(option: ButtonGroupOption): string {
    const isSelected = this.isSelected(option);
    const isDisabled = this.disabled() || option.disabled;

    const sizeClasses = {
      tiny: 'px-2.5 py-1.5 text-xs',
      small: 'px-3 py-2 text-sm',
      medium: 'px-4 py-2.5 text-base',
      large: 'px-5 py-3 text-lg',
      giant: 'px-6 py-3.5 text-xl',
    };

    const colorClasses = isSelected
      ? `bg-${this.getStatusColor()} text-white border-transparent`
      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200';

    return `
      ${sizeClasses[this.size()]}
      flex items-center justify-center gap-2 font-medium
      transition-all duration-200
      ${colorClasses}
      ${this.fullWidth() ? 'flex-1' : ''}
      ${this.vertical() ? 'border-b last:border-b-0' : 'border-r last:border-r-0'}
      border-slate-200 dark:border-slate-700
      ${isDisabled
        ? 'opacity-50 cursor-not-allowed'
        : 'hover:bg-opacity-90 hover:shadow-sm cursor-pointer'}
      ${isSelected && !isDisabled ? 'shadow-inner' : ''}
      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${this.getStatusColor()}
    `.trim();
  }

  private getStatusColor(): string {
    const colors = {
      basic: 'slate-600',
      primary: 'blue-600',
      success: 'emerald-600',
      info: 'cyan-600',
      warning: 'amber-500',
      danger: 'red-600',
    };
    return colors[this.status()];
  }
}

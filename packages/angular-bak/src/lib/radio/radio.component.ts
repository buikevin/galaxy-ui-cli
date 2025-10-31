import { Component, Input, Output, EventEmitter, signal, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type RadioStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type RadioSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

export interface RadioOption {
  value: any;
  label: string;
  description?: string;
  disabled?: boolean;
}

@Component({
  selector: 'g-radio',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
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

      <div [class]="radioGroupClasses()">
        @for (option of options(); track option.value) {
          <label
            [class]="radioLabelClasses(option)"
            (click)="!option.disabled && !disabled() && selectOption(option)">
            <div [class]="radioCircleClasses(option)">
              @if (isSelected(option)) {
                <div [class]="radioInnerCircleClasses()"></div>
              }
            </div>
            <div class="flex-1">
              <div [class]="optionLabelClasses(option)">{{ option.label }}</div>
              @if (option.description) {
                <div class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {{ option.description }}
                </div>
              }
            </div>
          </label>
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
export class RadioComponent implements ControlValueAccessor {
  // Inputs
  @Input() set radioLabel(value: string) { this.label.set(value); }
  @Input() set radioOptions(value: RadioOption[]) { this.options.set(value); }
  @Input() set radioStatus(value: RadioStatus) { this.status.set(value); }
  @Input() set radioSize(value: RadioSize) { this.size.set(value); }
  @Input() set radioDisabled(value: boolean) { this.disabled.set(value); }
  @Input() set radioRequired(value: boolean) { this.required.set(value); }
  @Input() set radioHint(value: string) { this.hint.set(value); }
  @Input() set radioError(value: string) { this.error.set(value); }

  // Output
  @Output() valueChange = new EventEmitter<any>();

  // Signals
  label = signal<string>('');
  options = signal<RadioOption[]>([]);
  status = signal<RadioStatus>('primary');
  size = signal<RadioSize>('medium');
  disabled = signal<boolean>(false);
  required = signal<boolean>(false);
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

  selectOption(option: RadioOption): void {
    if (option.disabled || this.disabled()) return;

    this.value.set(option.value);
    this.onChange(option.value);
    this.onTouched();
    this.valueChange.emit(option.value);
  }

  isSelected(option: RadioOption): boolean {
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

  radioGroupClasses(): string {
    return 'space-y-2';
  }

  radioLabelClasses(option: RadioOption): string {
    const isDisabled = option.disabled || this.disabled();
    const isSelected = this.isSelected(option);

    return `
      flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer
      ${isSelected
        ? 'border-' + this.getStatusColor() + ' bg-' + this.getStatusColor() + '/5'
        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'}
      ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-sm'}
    `.trim();
  }

  radioCircleClasses(option: RadioOption): string {
    const isSelected = this.isSelected(option);
    const isDisabled = option.disabled || this.disabled();

    const sizeClasses = {
      tiny: 'w-4 h-4',
      small: 'w-5 h-5',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
      giant: 'w-7 h-7',
    };

    return `
      ${sizeClasses[this.size()]}
      rounded-full border-2 flex items-center justify-center transition-all
      ${isSelected
        ? `border-${this.getStatusColor()} bg-white dark:bg-slate-900`
        : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'}
      ${isDisabled ? 'opacity-50' : ''}
    `.trim();
  }

  radioInnerCircleClasses(): string {
    const sizeClasses = {
      tiny: 'w-2 h-2',
      small: 'w-2.5 h-2.5',
      medium: 'w-2.5 h-2.5',
      large: 'w-3 h-3',
      giant: 'w-3.5 h-3.5',
    };

    return `
      ${sizeClasses[this.size()]}
      rounded-full bg-${this.getStatusColor()} transition-all
    `.trim();
  }

  optionLabelClasses(option: RadioOption): string {
    const isDisabled = option.disabled || this.disabled();

    const sizeClasses = {
      tiny: 'text-xs',
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
      giant: 'text-xl',
    };

    return `
      font-medium text-slate-700 dark:text-slate-200
      ${sizeClasses[this.size()]}
      ${isDisabled ? 'opacity-50' : ''}
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

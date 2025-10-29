import { Component, Input, Output, EventEmitter, signal, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SwitchStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type SwitchSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

@Component({
  selector: 'g-switch',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
  template: `
    <label [class]="containerClasses()">
      <input
        type="checkbox"
        class="sr-only"
        [checked]="checked()"
        [disabled]="disabled()"
        (change)="toggle()"
        (blur)="onTouched()" />

      <div [class]="switchTrackClasses()">
        <div [class]="switchThumbClasses()"></div>
      </div>

      @if (label()) {
        <span [class]="labelClasses()">
          {{ label() }}
          @if (required()) {
            <span class="text-red-500 ml-1">*</span>
          }
        </span>
      }
    </label>

    @if (hint() && !error()) {
      <p class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{{ hint() }}</p>
    }

    @if (error()) {
      <p class="mt-1.5 text-sm text-red-600 dark:text-red-400">{{ error() }}</p>
    }
  `,
  styles: [],
})
export class SwitchComponent implements ControlValueAccessor {
  // Inputs
  @Input() set switchLabel(value: string) { this.label.set(value); }
  @Input() set switchStatus(value: SwitchStatus) { this.status.set(value); }
  @Input() set switchSize(value: SwitchSize) { this.size.set(value); }
  @Input() set switchDisabled(value: boolean) { this.disabled.set(value); }
  @Input() set switchRequired(value: boolean) { this.required.set(value); }
  @Input() set switchHint(value: string) { this.hint.set(value); }
  @Input() set switchError(value: string) { this.error.set(value); }

  // Output
  @Output() checkedChange = new EventEmitter<boolean>();

  // Signals
  label = signal<string>('');
  status = signal<SwitchStatus>('primary');
  size = signal<SwitchSize>('medium');
  disabled = signal<boolean>(false);
  required = signal<boolean>(false);
  hint = signal<string>('');
  error = signal<string>('');
  checked = signal<boolean>(false);

  // ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: boolean): void {
    this.checked.set(!!value);
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

  toggle(): void {
    if (this.disabled()) return;

    const newValue = !this.checked();
    this.checked.set(newValue);
    this.onChange(newValue);
    this.checkedChange.emit(newValue);
  }

  // Style classes
  containerClasses(): string {
    return `
      inline-flex items-center gap-3
      ${this.disabled() ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    `.trim();
  }

  switchTrackClasses(): string {
    const sizeClasses = {
      tiny: 'w-8 h-4',
      small: 'w-10 h-5',
      medium: 'w-12 h-6',
      large: 'w-14 h-7',
      giant: 'w-16 h-8',
    };

    const checkedBgColor = this.checked()
      ? `bg-${this.getStatusColor()}`
      : 'bg-slate-300 dark:bg-slate-600';

    return `
      ${sizeClasses[this.size()]}
      relative rounded-full transition-all duration-200
      ${checkedBgColor}
      ${this.disabled() ? 'opacity-50' : ''}
    `.trim();
  }

  switchThumbClasses(): string {
    const sizeClasses = {
      tiny: 'w-3 h-3',
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
      giant: 'w-7 h-7',
    };

    const translateClasses = {
      tiny: this.checked() ? 'translate-x-[18px]' : 'translate-x-0.5',
      small: this.checked() ? 'translate-x-[22px]' : 'translate-x-0.5',
      medium: this.checked() ? 'translate-x-[26px]' : 'translate-x-0.5',
      large: this.checked() ? 'translate-x-[30px]' : 'translate-x-0.5',
      giant: this.checked() ? 'translate-x-[34px]' : 'translate-x-0.5',
    };

    return `
      ${sizeClasses[this.size()]}
      absolute top-0.5 rounded-full bg-white shadow-md transition-transform duration-200
      ${translateClasses[this.size()]}
    `.trim();
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
      font-medium text-slate-700 dark:text-slate-200 select-none
      ${sizeClasses[this.size()]}
      ${this.disabled() ? 'opacity-50' : ''}
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

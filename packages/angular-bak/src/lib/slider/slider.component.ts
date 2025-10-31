import { Component, Input, Output, EventEmitter, signal, forwardRef, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SliderStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type SliderSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

@Component({
  selector: 'g-slider',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
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

      <div class="flex items-center gap-4">
        @if (showMinMax()) {
          <span [class]="minMaxClasses()">{{ min() }}</span>
        }

        <div class="flex-1 relative">
          <div [class]="trackClasses()">
            <div [class]="fillClasses()" [style.width.%]="fillPercentage()"></div>

            <div
              [class]="thumbClasses()"
              [style.left.%]="fillPercentage()"
              [attr.tabindex]="disabled() ? -1 : 0"
              (mousedown)="onMouseDown($event)"
              (keydown)="onKeyDown($event)">
              @if (showTooltip()) {
                <div [class]="tooltipClasses()">{{ value() }}</div>
              }
            </div>
          </div>

          <input
            #input
            type="range"
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            [min]="min()"
            [max]="max()"
            [step]="step()"
            [value]="value()"
            [disabled]="disabled()"
            (input)="onInput($event)"
            (change)="onChange($event)" />
        </div>

        @if (showMinMax()) {
          <span [class]="minMaxClasses()">{{ max() }}</span>
        }

        @if (showValue()) {
          <span [class]="valueClasses()">{{ value() }}</span>
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
export class SliderComponent implements ControlValueAccessor {
  input = viewChild<ElementRef<HTMLInputElement>>('input');

  // Inputs
  @Input() set sliderLabel(value: string) { this.label.set(value); }
  @Input() set sliderMin(value: number) { this.min.set(value); }
  @Input() set sliderMax(value: number) { this.max.set(value); }
  @Input() set sliderStep(value: number) { this.step.set(value); }
  @Input() set sliderStatus(value: SliderStatus) { this.status.set(value); }
  @Input() set sliderSize(value: SliderSize) { this.size.set(value); }
  @Input() set sliderDisabled(value: boolean) { this.disabled.set(value); }
  @Input() set sliderRequired(value: boolean) { this.required.set(value); }
  @Input() set sliderHint(value: string) { this.hint.set(value); }
  @Input() set sliderError(value: string) { this.error.set(value); }
  @Input() set sliderShowValue(value: boolean) { this.showValue.set(value); }
  @Input() set sliderShowMinMax(value: boolean) { this.showMinMax.set(value); }
  @Input() set sliderShowTooltip(value: boolean) { this.showTooltip.set(value); }

  // Output
  @Output() valueChange = new EventEmitter<number>();

  // Signals
  label = signal<string>('');
  min = signal<number>(0);
  max = signal<number>(100);
  step = signal<number>(1);
  status = signal<SliderStatus>('primary');
  size = signal<SliderSize>('medium');
  disabled = signal<boolean>(false);
  required = signal<boolean>(false);
  hint = signal<string>('');
  error = signal<string>('');
  value = signal<number>(0);
  showValue = signal<boolean>(true);
  showMinMax = signal<boolean>(false);
  showTooltip = signal<boolean>(false);

  // ControlValueAccessor
  onChangeCallback: any = () => {};
  onTouchedCallback: any = () => {};

  writeValue(value: number): void {
    this.value.set(value ?? this.min());
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    this.value.set(newValue);
    this.valueChange.emit(newValue);
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    this.onChangeCallback(newValue);
    this.onTouchedCallback();
  }

  onMouseDown(event: MouseEvent): void {
    event.preventDefault();
    // Focus the hidden input for keyboard navigation
    this.input()?.nativeElement.focus();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled()) return;

    const currentValue = this.value();
    const step = this.step();
    let newValue = currentValue;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        newValue = Math.min(currentValue + step, this.max());
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        newValue = Math.max(currentValue - step, this.min());
        break;
      case 'Home':
        newValue = this.min();
        break;
      case 'End':
        newValue = this.max();
        break;
      default:
        return;
    }

    event.preventDefault();
    this.value.set(newValue);
    this.onChangeCallback(newValue);
    this.valueChange.emit(newValue);
  }

  fillPercentage(): number {
    const range = this.max() - this.min();
    const value = this.value() - this.min();
    return (value / range) * 100;
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
      block font-medium text-slate-700 dark:text-slate-200 mb-3
      ${sizeClasses[this.size()]}
    `.trim();
  }

  trackClasses(): string {
    const sizeClasses = {
      tiny: 'h-1',
      small: 'h-1.5',
      medium: 'h-2',
      large: 'h-2.5',
      giant: 'h-3',
    };

    return `
      relative ${sizeClasses[this.size()]} rounded-full
      bg-slate-200 dark:bg-slate-700
      ${this.disabled() ? 'opacity-50' : ''}
    `.trim();
  }

  fillClasses(): string {
    return `
      absolute left-0 top-0 h-full rounded-full transition-all
      bg-${this.getStatusColor()}
    `.trim();
  }

  thumbClasses(): string {
    const sizeClasses = {
      tiny: 'w-3 h-3',
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
      giant: 'w-7 h-7',
    };

    return `
      absolute top-1/2 -translate-y-1/2 -translate-x-1/2
      ${sizeClasses[this.size()]}
      rounded-full bg-white border-2 shadow-md cursor-pointer
      transition-all focus:outline-none focus:ring-2 focus:ring-offset-2
      border-${this.getStatusColor()} focus:ring-${this.getStatusColor()}
      ${this.disabled() ? 'cursor-not-allowed' : 'hover:scale-110'}
    `.trim();
  }

  tooltipClasses(): string {
    return `
      absolute bottom-full left-1/2 -translate-x-1/2 mb-2
      px-2 py-1 text-xs font-medium text-white rounded
      bg-${this.getStatusColor()} whitespace-nowrap
      pointer-events-none
    `.trim();
  }

  minMaxClasses(): string {
    const sizeClasses = {
      tiny: 'text-xs',
      small: 'text-sm',
      medium: 'text-sm',
      large: 'text-base',
      giant: 'text-lg',
    };

    return `
      font-medium text-slate-500 dark:text-slate-400
      ${sizeClasses[this.size()]}
    `.trim();
  }

  valueClasses(): string {
    const sizeClasses = {
      tiny: 'text-xs min-w-[2rem]',
      small: 'text-sm min-w-[2.5rem]',
      medium: 'text-base min-w-[3rem]',
      large: 'text-lg min-w-[3.5rem]',
      giant: 'text-xl min-w-[4rem]',
    };

    return `
      font-bold text-${this.getStatusColor()} text-center
      ${sizeClasses[this.size()]}
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

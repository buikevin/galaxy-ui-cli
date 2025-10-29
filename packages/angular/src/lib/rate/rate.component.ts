import { Component, Input, Output, EventEmitter, signal, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, Star, StarHalf } from 'lucide-angular';

export type RateStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type RateSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

@Component({
  selector: 'g-rate',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RateComponent),
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

      <div [class]="rateContainerClasses()">
        <div class="flex items-center gap-1">
          @for (star of stars(); track $index) {
            <button
              type="button"
              [class]="starButtonClasses($index)"
              [disabled]="disabled() || readonly()"
              (click)="setRating($index + 1)"
              (mouseenter)="onMouseEnter($index + 1)"
              (mouseleave)="onMouseLeave()">
              @if (allowHalf() && isHalfStar($index)) {
                <lucide-icon
                  [img]="StarHalfIcon"
                  [class]="starIconClasses($index)"
                  [attr.fill]="getStarFill($index)" />
              } @else {
                <lucide-icon
                  [img]="StarIcon"
                  [class]="starIconClasses($index)"
                  [attr.fill]="getStarFill($index)" />
              }
            </button>
          }
        </div>

        @if (showText()) {
          <span [class]="textClasses()">
            {{ getRatingText() }}
          </span>
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
export class RateComponent implements ControlValueAccessor {
  StarIcon = Star;
  StarHalfIcon = StarHalf;

  // Inputs
  @Input() set rateLabel(value: string) { this.label.set(value); }
  @Input() set rateCount(value: number) { this.count.set(value); }
  @Input() set rateStatus(value: RateStatus) { this.status.set(value); }
  @Input() set rateSize(value: RateSize) { this.size.set(value); }
  @Input() set rateDisabled(value: boolean) { this.disabled.set(value); }
  @Input() set rateReadonly(value: boolean) { this.readonly.set(value); }
  @Input() set rateRequired(value: boolean) { this.required.set(value); }
  @Input() set rateAllowHalf(value: boolean) { this.allowHalf.set(value); }
  @Input() set rateAllowClear(value: boolean) { this.allowClear.set(value); }
  @Input() set rateShowText(value: boolean) { this.showText.set(value); }
  @Input() set rateTexts(value: string[]) { this.texts.set(value); }
  @Input() set rateHint(value: string) { this.hint.set(value); }
  @Input() set rateError(value: string) { this.error.set(value); }

  // Output
  @Output() rateChange = new EventEmitter<number>();

  // Signals
  label = signal<string>('');
  count = signal<number>(5);
  status = signal<RateStatus>('warning'); // Default to warning (yellow) for stars
  size = signal<RateSize>('medium');
  disabled = signal<boolean>(false);
  readonly = signal<boolean>(false);
  required = signal<boolean>(false);
  allowHalf = signal<boolean>(false);
  allowClear = signal<boolean>(true);
  showText = signal<boolean>(false);
  texts = signal<string[]>(['Terrible', 'Bad', 'Normal', 'Good', 'Excellent']);
  hint = signal<string>('');
  error = signal<string>('');
  value = signal<number>(0);
  hoverValue = signal<number>(0);

  // ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  stars = signal<number[]>([]);

  constructor() {
    // Generate stars array when count changes
    this.updateStars();
  }

  private updateStars(): void {
    this.stars.set(Array.from({ length: this.count() }, (_, i) => i));
  }

  writeValue(value: number): void {
    this.value.set(value ?? 0);
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

  setRating(rating: number): void {
    if (this.disabled() || this.readonly()) return;

    // Allow clearing if clicking same rating
    if (this.allowClear() && this.value() === rating) {
      rating = 0;
    }

    this.value.set(rating);
    this.onChange(rating);
    this.onTouched();
    this.rateChange.emit(rating);
  }

  onMouseEnter(index: number): void {
    if (this.disabled() || this.readonly()) return;
    this.hoverValue.set(index);
  }

  onMouseLeave(): void {
    this.hoverValue.set(0);
  }

  isHalfStar(index: number): boolean {
    const displayValue = this.hoverValue() || this.value();
    return this.allowHalf() && displayValue > index && displayValue < index + 1;
  }

  getStarFill(index: number): string {
    const displayValue = this.hoverValue() || this.value();
    const isFilled = displayValue >= index + 1;
    const isHalf = this.allowHalf() && displayValue > index && displayValue < index + 1;

    if (isFilled || isHalf) {
      return `currentColor`;
    }
    return 'none';
  }

  getRatingText(): string {
    const rating = Math.ceil(this.value());
    if (rating === 0) return '';

    const texts = this.texts();
    return texts[rating - 1] || `${this.value()} stars`;
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

  rateContainerClasses(): string {
    return 'flex items-center gap-3';
  }

  starButtonClasses(index: number): string {
    const displayValue = this.hoverValue() || this.value();
    const isActive = displayValue >= index + 1;

    return `
      p-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2
      focus:ring-${this.getStatusColor()}
      ${this.disabled() || this.readonly() ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
      ${isActive ? '' : 'opacity-40'}
    `.trim();
  }

  starIconClasses(index: number): string {
    const sizeClasses = {
      tiny: 'w-4 h-4',
      small: 'w-5 h-5',
      medium: 'w-6 h-6',
      large: 'w-8 h-8',
      giant: 'w-10 h-10',
    };

    const displayValue = this.hoverValue() || this.value();
    const isActive = displayValue >= index + 1 || (this.allowHalf() && displayValue > index);

    return `
      ${sizeClasses[this.size()]}
      transition-all
      ${isActive ? `text-${this.getStatusColor()} stroke-${this.getStatusColor()}` : 'text-slate-300 dark:text-slate-600 stroke-slate-300 dark:stroke-slate-600'}
    `.trim();
  }

  textClasses(): string {
    const sizeClasses = {
      tiny: 'text-xs',
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
      giant: 'text-xl',
    };

    return `
      font-medium text-slate-600 dark:text-slate-400
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

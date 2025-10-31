import { Component, Input, signal, computed, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SelectStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type SelectSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type SelectShape = 'rectangle' | 'semi-round' | 'round';

export interface SelectOption {
  label: string;
  value: any;
  disabled?: boolean;
}

/**
 * Galaxy UI Select Component
 *
 * Inspired by Nebular's select design with Tailwind CSS implementation.
 * Custom dropdown with search support.
 *
 * @example
 * ```html
 * <g-select
 *   label="Country"
 *   [options]="countries"
 *   [(selected)]="selectedCountry">
 * </g-select>
 * ```
 */
@Component({
  selector: 'g-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses()">
      @if (label()) {
        <label [for]="selectId()" [class]="labelClasses()">
          {{ label() }}
          @if (required()) {
            <span class="text-red-500 ml-1">*</span>
          }
        </label>
      }

      <div class="relative">
        <button
          type="button"
          [id]="selectId()"
          [disabled]="disabled()"
          [class]="selectClasses()"
          (click)="toggleDropdown()"
          (blur)="onBlur()"
        >
          <span [class]="selectedTextClasses()">
            {{ selectedLabel() || placeholder() }}
          </span>
          <svg
            class="w-5 h-5 transition-transform duration-200"
            [class.rotate-180]="isOpen()"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        @if (isOpen()) {
          <div [class]="dropdownClasses()" (click)="$event.stopPropagation()">
            @if (searchable()) {
              <div class="p-2 border-b border-slate-200 dark:border-slate-700">
                <input
                  type="text"
                  [value]="searchQuery()"
                  (input)="onSearch($event)"
                  placeholder="Search..."
                  class="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                />
              </div>
            }

            <div class="max-h-60 overflow-y-auto p-1">
              @for (option of filteredOptions(); track option.value) {
                <button
                  type="button"
                  [class]="optionClasses(option)"
                  [disabled]="option.disabled"
                  (click)="selectOption(option)"
                >
                  <span>{{ option.label }}</span>
                  @if (isSelected(option)) {
                    <svg class="w-5 h-5 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  }
                </button>
              } @empty {
                <div class="px-3 py-2 text-sm text-slate-500 dark:text-slate-400 text-center">
                  No options found
                </div>
              }
            </div>
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
export class SelectComponent {
  // Signals
  selectId = signal(`galaxy-select-${Math.random().toString(36).substr(2, 9)}`);
  selected = signal<any>(null);
  options = signal<SelectOption[]>([]);
  isOpen = signal(false);
  searchQuery = signal('');
  status = signal<SelectStatus>('basic');
  size = signal<SelectSize>('medium');
  shape = signal<SelectShape>('rectangle');
  label = signal('');
  placeholder = signal('Select an option');
  hint = signal('');
  error = signal('');
  disabled = signal(false);
  required = signal(false);
  searchable = signal(false);
  fullWidth = signal(true);

  @Output() selectedChange = new EventEmitter<any>();

  // Input setters
  @Input() set selectSelected(v: any) { this.selected.set(v); }
  @Input() set selectOptions(v: SelectOption[]) { this.options.set(v); }
  @Input() set selectStatus(v: SelectStatus) { this.status.set(v); }
  @Input() set selectSize(v: SelectSize) { this.size.set(v); }
  @Input() set selectShape(v: SelectShape) { this.shape.set(v); }
  @Input() set selectLabel(v: string) { this.label.set(v); }
  @Input() set selectPlaceholder(v: string) { this.placeholder.set(v); }
  @Input() set selectHint(v: string) { this.hint.set(v); }
  @Input() set selectError(v: string) { this.error.set(v); }
  @Input() set selectDisabled(v: boolean) { this.disabled.set(v); }
  @Input() set selectRequired(v: boolean) { this.required.set(v); }
  @Input() set selectSearchable(v: boolean) { this.searchable.set(v); }
  @Input() set selectFullWidth(v: boolean) { this.fullWidth.set(v); }

  selectedLabel = computed(() => {
    const selectedValue = this.selected();
    const option = this.options().find(opt => opt.value === selectedValue);
    return option?.label || '';
  });

  filteredOptions = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) return this.options();
    return this.options().filter(opt =>
      opt.label.toLowerCase().includes(query)
    );
  });

  toggleDropdown() {
    if (!this.disabled()) {
      this.isOpen.update(v => !v);
    }
  }

  selectOption(option: SelectOption) {
    if (!option.disabled) {
      this.selected.set(option.value);
      this.selectedChange.emit(option.value);
      this.isOpen.set(false);
      this.searchQuery.set('');
    }
  }

  isSelected(option: SelectOption): boolean {
    return this.selected() === option.value;
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }

  onBlur() {
    setTimeout(() => {
      this.isOpen.set(false);
      this.searchQuery.set('');
    }, 200);
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

  selectClasses = computed(() => {
    const baseClasses = [
      'flex',
      'items-center',
      'justify-between',
      'w-full',
      'font-normal',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
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

    // Status classes
    const statusClasses = {
      basic: 'border-slate-300 focus:ring-slate-500 focus:border-slate-500 dark:border-slate-600 dark:focus:ring-slate-400',
      primary: 'border-violet-300 focus:ring-violet-500 focus:border-violet-500 dark:border-violet-600 dark:focus:ring-violet-400',
      success: 'border-emerald-300 focus:ring-emerald-500 focus:border-emerald-500 dark:border-emerald-600 dark:focus:ring-emerald-400',
      info: 'border-cyan-300 focus:ring-cyan-500 focus:border-cyan-500 dark:border-cyan-600 dark:focus:ring-cyan-400',
      warning: 'border-amber-300 focus:ring-amber-500 focus:border-amber-500 dark:border-amber-600 dark:focus:ring-amber-400',
      danger: 'border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-600 dark:focus:ring-red-400',
    };

    const bgClasses = 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100';
    const currentStatus = this.error() ? 'danger' : this.status();

    return [
      ...baseClasses,
      sizeClasses[this.size()],
      shapeClasses[this.shape()],
      'border',
      statusClasses[currentStatus],
      bgClasses,
    ].join(' ');
  });

  selectedTextClasses = computed(() => {
    return this.selected()
      ? 'text-slate-900 dark:text-slate-100'
      : 'text-slate-400 dark:text-slate-500';
  });

  dropdownClasses = computed(() => {
    return [
      'absolute',
      'z-50',
      'w-full',
      'mt-1',
      'bg-white',
      'dark:bg-slate-900',
      'border',
      'border-slate-200',
      'dark:border-slate-700',
      'rounded-lg',
      'shadow-lg',
      'overflow-hidden',
    ].join(' ');
  });

  optionClasses(option: SelectOption) {
    const baseClasses = [
      'flex',
      'items-center',
      'justify-between',
      'w-full',
      'px-3',
      'py-2',
      'text-sm',
      'text-left',
      'transition-colors',
      'duration-150',
    ];

    if (option.disabled) {
      baseClasses.push('opacity-50', 'cursor-not-allowed');
    } else if (this.isSelected(option)) {
      baseClasses.push(
        'bg-violet-50',
        'dark:bg-violet-950',
        'text-violet-900',
        'dark:text-violet-100'
      );
    } else {
      baseClasses.push(
        'text-slate-900',
        'dark:text-slate-100',
        'hover:bg-slate-100',
        'dark:hover:bg-slate-800',
        'cursor-pointer'
      );
    }

    return baseClasses.join(' ');
  }
}

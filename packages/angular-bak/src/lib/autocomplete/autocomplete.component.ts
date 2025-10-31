import { Component, Input, Output, EventEmitter, signal, forwardRef, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, Search, X, ChevronDown } from 'lucide-angular';

export type AutocompleteStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type AutocompleteSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

export interface AutocompleteOption {
  value: any;
  label: string;
  description?: string;
  disabled?: boolean;
}

@Component({
  selector: 'g-autocomplete',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
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

      <div class="relative">
        <div [class]="inputWrapperClasses()">
          @if (showSearchIcon()) {
            <lucide-icon [img]="SearchIcon" class="w-5 h-5 text-slate-400" />
          }

          <input
            type="text"
            [class]="inputClasses()"
            [placeholder]="placeholder()"
            [disabled]="disabled()"
            [(ngModel)]="searchTerm"
            (input)="onSearchChange()"
            (focus)="onFocus()"
            (blur)="onBlur()"
            (keydown)="onKeyDown($event)" />

          @if (searchTerm() && allowClear()) {
            <button
              type="button"
              class="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
              (click)="clear()">
              <lucide-icon [img]="XIcon" class="w-4 h-4 text-slate-400" />
            </button>
          }

          <lucide-icon [img]="ChevronDownIcon" class="w-5 h-5 text-slate-400" />
        </div>

        @if (isOpen() && filteredOptions().length > 0) {
          <div [class]="dropdownClasses()">
            <div class="max-h-60 overflow-y-auto">
              @for (option of filteredOptions(); track option.value; let i = $index) {
                <button
                  type="button"
                  [class]="optionClasses(option, i)"
                  [disabled]="option.disabled"
                  (click)="selectOption(option)"
                  (mouseenter)="highlightedIndex.set(i)">
                  <div class="flex-1 text-left">
                    <div [class]="optionLabelClasses(option)">
                      {{ option.label }}
                    </div>
                    @if (option.description) {
                      <div class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        {{ option.description }}
                      </div>
                    }
                  </div>
                </button>
              }
            </div>

            @if (filteredOptions().length === 0 && searchTerm()) {
              <div class="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
                No results found for "{{ searchTerm() }}"
              </div>
            }
          </div>
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
})
export class AutocompleteComponent implements ControlValueAccessor {
  SearchIcon = Search;
  XIcon = X;
  ChevronDownIcon = ChevronDown;

  @Input() set autocompleteLabel(value: string) { this.label.set(value); }
  @Input() set autocompleteOptions(value: AutocompleteOption[]) { this.options.set(value); }
  @Input() set autocompletePlaceholder(value: string) { this.placeholder.set(value); }
  @Input() set autocompleteStatus(value: AutocompleteStatus) { this.status.set(value); }
  @Input() set autocompleteSize(value: AutocompleteSize) { this.size.set(value); }
  @Input() set autocompleteDisabled(value: boolean) { this.disabled.set(value); }
  @Input() set autocompleteRequired(value: boolean) { this.required.set(value); }
  @Input() set autocompleteAllowClear(value: boolean) { this.allowClear.set(value); }
  @Input() set autocompleteShowSearchIcon(value: boolean) { this.showSearchIcon.set(value); }
  @Input() set autocompleteHint(value: string) { this.hint.set(value); }
  @Input() set autocompleteError(value: string) { this.error.set(value); }

  @Output() valueChange = new EventEmitter<any>();
  @Output() searchChange = new EventEmitter<string>();

  label = signal<string>('');
  options = signal<AutocompleteOption[]>([]);
  placeholder = signal<string>('Search...');
  status = signal<AutocompleteStatus>('primary');
  size = signal<AutocompleteSize>('medium');
  disabled = signal<boolean>(false);
  required = signal<boolean>(false);
  allowClear = signal<boolean>(true);
  showSearchIcon = signal<boolean>(true);
  hint = signal<string>('');
  error = signal<string>('');
  value = signal<any>(null);
  searchTerm = signal<string>('');
  isOpen = signal<boolean>(false);
  highlightedIndex = signal<number>(-1);

  filteredOptions = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.options();
    return this.options().filter(opt =>
      opt.label.toLowerCase().includes(term) ||
      opt.description?.toLowerCase().includes(term)
    );
  });

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value.set(value);
    const selected = this.options().find(opt => opt.value === value);
    if (selected) {
      this.searchTerm.set(selected.label);
    }
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

  onSearchChange(): void {
    this.isOpen.set(true);
    this.searchChange.emit(this.searchTerm());
  }

  onFocus(): void {
    this.isOpen.set(true);
  }

  onBlur(): void {
    setTimeout(() => this.isOpen.set(false), 200);
  }

  selectOption(option: AutocompleteOption): void {
    if (option.disabled) return;

    this.value.set(option.value);
    this.searchTerm.set(option.label);
    this.isOpen.set(false);
    this.onChange(option.value);
    this.onTouched();
    this.valueChange.emit(option.value);
  }

  clear(): void {
    this.value.set(null);
    this.searchTerm.set('');
    this.onChange(null);
    this.valueChange.emit(null);
  }

  onKeyDown(event: KeyboardEvent): void {
    const filtered = this.filteredOptions();
    const current = this.highlightedIndex();

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.highlightedIndex.set(Math.min(current + 1, filtered.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.highlightedIndex.set(Math.max(current - 1, 0));
        break;
      case 'Enter':
        event.preventDefault();
        if (current >= 0 && filtered[current]) {
          this.selectOption(filtered[current]);
        }
        break;
      case 'Escape':
        this.isOpen.set(false);
        break;
    }
  }

  containerClasses(): string {
    return 'w-full';
  }

  labelClasses(): string {
    const sizeMap = { tiny: 'text-xs', small: 'text-sm', medium: 'text-base', large: 'text-lg', giant: 'text-xl' };
    return `block font-medium text-slate-700 dark:text-slate-200 mb-2 ${sizeMap[this.size()]}`;
  }

  inputWrapperClasses(): string {
    const sizeMap = {
      tiny: 'h-8 text-xs px-2',
      small: 'h-9 text-sm px-3',
      medium: 'h-10 text-base px-3',
      large: 'h-12 text-lg px-4',
      giant: 'h-14 text-xl px-5',
    };
    return `flex items-center gap-2 w-full rounded-lg border transition-colors
      ${this.error() ? 'border-red-500' : 'border-slate-300 dark:border-slate-600 focus-within:border-' + this.getStatusColor()}
      bg-white dark:bg-slate-900 ${sizeMap[this.size()]}`;
  }

  inputClasses(): string {
    return 'flex-1 outline-none bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400';
  }

  dropdownClasses(): string {
    return 'absolute z-50 mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg';
  }

  optionClasses(option: AutocompleteOption, index: number): string {
    const isHighlighted = this.highlightedIndex() === index;
    return `w-full px-4 py-3 text-left transition-colors flex items-center gap-3
      ${isHighlighted ? 'bg-slate-100 dark:bg-slate-800' : ''}
      ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer'}`;
  }

  optionLabelClasses(option: AutocompleteOption): string {
    const sizeMap = { tiny: 'text-xs', small: 'text-sm', medium: 'text-base', large: 'text-lg', giant: 'text-xl' };
    return `font-medium text-slate-700 dark:text-slate-200 ${sizeMap[this.size()]}`;
  }

  private getStatusColor(): string {
    const colors = { basic: 'slate-600', primary: 'blue-600', success: 'emerald-600', info: 'cyan-600', warning: 'amber-500', danger: 'red-600' };
    return colors[this.status()];
  }
}

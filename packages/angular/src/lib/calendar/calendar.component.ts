import { Component, Input, signal, computed, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CalendarStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

/**
 * Galaxy UI Calendar Component
 *
 * Inspired by Nebular's datepicker design with Tailwind CSS implementation.
 * Full-featured calendar with date selection and navigation.
 *
 * @example
 * ```html
 * <g-calendar
 *   [(selectedDate)]="date"
 *   [minDate]="minDate"
 *   [maxDate]="maxDate">
 * </g-calendar>
 * ```
 */
@Component({
  selector: 'g-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses()">
      <!-- Header with month/year navigation -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
        <button
          type="button"
          [class]="navButtonClasses()"
          (click)="previousMonth()"
          [disabled]="!canNavigatePrevious()"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="flex items-center gap-2">
          <button
            type="button"
            [class]="monthYearButtonClasses()"
            (click)="toggleMonthPicker()"
          >
            {{ currentMonthName() }}
          </button>
          <button
            type="button"
            [class]="monthYearButtonClasses()"
            (click)="toggleYearPicker()"
          >
            {{ currentYear() }}
          </button>
        </div>

        <button
          type="button"
          [class]="navButtonClasses()"
          (click)="nextMonth()"
          [disabled]="!canNavigateNext()"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Month picker -->
      @if (showMonthPicker()) {
        <div class="grid grid-cols-3 gap-2 p-4">
          @for (month of months; track month.value) {
            <button
              type="button"
              [class]="monthPickerButtonClasses(month.value)"
              (click)="selectMonth(month.value)"
            >
              {{ month.label }}
            </button>
          }
        </div>
      }

      <!-- Year picker -->
      @if (showYearPicker()) {
        <div class="grid grid-cols-4 gap-2 p-4 max-h-64 overflow-y-auto">
          @for (year of yearRange(); track year) {
            <button
              type="button"
              [class]="yearPickerButtonClasses(year)"
              (click)="selectYear(year)"
            >
              {{ year }}
            </button>
          }
        </div>
      }

      <!-- Calendar grid -->
      @if (!showMonthPicker() && !showYearPicker()) {
        <div class="p-4">
          <!-- Weekday headers -->
          <div class="grid grid-cols-7 gap-1 mb-2">
            @for (day of weekDays; track day) {
              <div class="text-center text-sm font-medium text-slate-600 dark:text-slate-400 py-2">
                {{ day }}
              </div>
            }
          </div>

          <!-- Calendar days -->
          <div class="grid grid-cols-7 gap-1">
            @for (day of calendarDays(); track day.date.getTime()) {
              <button
                type="button"
                [class]="dayButtonClasses(day)"
                [disabled]="day.isDisabled"
                (click)="selectDate(day)"
              >
                {{ day.day }}
              </button>
            }
          </div>
        </div>
      }

      <!-- Footer with today button -->
      @if (showTodayButton()) {
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700">
          <button
            type="button"
            [class]="todayButtonClasses()"
            (click)="selectToday()"
          >
            Today
          </button>
        </div>
      }
    </div>
  `,
})
export class CalendarComponent {
  // Signals
  selectedDate = signal<Date | null>(null);
  currentMonth = signal(new Date().getMonth());
  currentYear = signal(new Date().getFullYear());
  minDate = signal<Date | null>(null);
  maxDate = signal<Date | null>(null);
  status = signal<CalendarStatus>('primary');
  showMonthPicker = signal(false);
  showYearPicker = signal(false);
  showTodayButton = signal(true);

  @Output() selectedDateChange = new EventEmitter<Date | null>();

  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  months = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 1 },
    { label: 'Mar', value: 2 },
    { label: 'Apr', value: 3 },
    { label: 'May', value: 4 },
    { label: 'Jun', value: 5 },
    { label: 'Jul', value: 6 },
    { label: 'Aug', value: 7 },
    { label: 'Sep', value: 8 },
    { label: 'Oct', value: 9 },
    { label: 'Nov', value: 10 },
    { label: 'Dec', value: 11 },
  ];

  // Input setters
  @Input() set calendarSelectedDate(v: Date | null) { this.selectedDate.set(v); }
  @Input() set calendarMinDate(v: Date | null) { this.minDate.set(v); }
  @Input() set calendarMaxDate(v: Date | null) { this.maxDate.set(v); }
  @Input() set calendarStatus(v: CalendarStatus) { this.status.set(v); }
  @Input() set calendarShowTodayButton(v: boolean) { this.showTodayButton.set(v); }

  currentMonthName = computed(() => {
    return new Date(this.currentYear(), this.currentMonth(), 1).toLocaleDateString('en-US', { month: 'long' });
  });

  yearRange = computed(() => {
    const currentYear = this.currentYear();
    const years: number[] = [];
    for (let i = currentYear - 50; i <= currentYear + 50; i++) {
      years.push(i);
    }
    return years;
  });

  calendarDays = computed(() => {
    const year = this.currentYear();
    const month = this.currentMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    const firstDayOfWeek = firstDay.getDay();
    const lastDateOfMonth = lastDay.getDate();
    const prevLastDate = prevLastDay.getDate();

    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Previous month days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevLastDate - i);
      days.push({
        date,
        day: prevLastDate - i,
        isCurrentMonth: false,
        isToday: this.isSameDay(date, today),
        isSelected: this.isSameDay(date, this.selectedDate()),
        isDisabled: this.isDateDisabled(date),
      });
    }

    // Current month days
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const date = new Date(year, month, i);
      days.push({
        date,
        day: i,
        isCurrentMonth: true,
        isToday: this.isSameDay(date, today),
        isSelected: this.isSameDay(date, this.selectedDate()),
        isDisabled: this.isDateDisabled(date),
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      days.push({
        date,
        day: i,
        isCurrentMonth: false,
        isToday: this.isSameDay(date, today),
        isSelected: this.isSameDay(date, this.selectedDate()),
        isDisabled: this.isDateDisabled(date),
      });
    }

    return days;
  });

  isSameDay(date1: Date | null, date2: Date | null): boolean {
    if (!date1 || !date2) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  isDateDisabled(date: Date): boolean {
    const minDate = this.minDate();
    const maxDate = this.maxDate();

    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;

    return false;
  }

  canNavigatePrevious = computed(() => {
    const minDate = this.minDate();
    if (!minDate) return true;
    const firstDayOfMonth = new Date(this.currentYear(), this.currentMonth(), 1);
    return firstDayOfMonth > minDate;
  });

  canNavigateNext = computed(() => {
    const maxDate = this.maxDate();
    if (!maxDate) return true;
    const lastDayOfMonth = new Date(this.currentYear(), this.currentMonth() + 1, 0);
    return lastDayOfMonth < maxDate;
  });

  previousMonth() {
    if (this.currentMonth() === 0) {
      this.currentMonth.set(11);
      this.currentYear.update(y => y - 1);
    } else {
      this.currentMonth.update(m => m - 1);
    }
  }

  nextMonth() {
    if (this.currentMonth() === 11) {
      this.currentMonth.set(0);
      this.currentYear.update(y => y + 1);
    } else {
      this.currentMonth.update(m => m + 1);
    }
  }

  toggleMonthPicker() {
    this.showMonthPicker.update(v => !v);
    this.showYearPicker.set(false);
  }

  toggleYearPicker() {
    this.showYearPicker.update(v => !v);
    this.showMonthPicker.set(false);
  }

  selectMonth(month: number) {
    this.currentMonth.set(month);
    this.showMonthPicker.set(false);
  }

  selectYear(year: number) {
    this.currentYear.set(year);
    this.showYearPicker.set(false);
  }

  selectDate(day: CalendarDay) {
    if (!day.isDisabled) {
      this.selectedDate.set(day.date);
      this.selectedDateChange.emit(day.date);
    }
  }

  selectToday() {
    const today = new Date();
    this.selectedDate.set(today);
    this.currentMonth.set(today.getMonth());
    this.currentYear.set(today.getFullYear());
    this.selectedDateChange.emit(today);
  }

  // Style methods
  containerClasses = computed(() => {
    return [
      'bg-white',
      'dark:bg-slate-900',
      'border',
      'border-slate-200',
      'dark:border-slate-700',
      'rounded-lg',
      'shadow-lg',
      'w-full',
      'max-w-sm',
    ].join(' ');
  });

  navButtonClasses = computed(() => {
    return [
      'p-2',
      'rounded-md',
      'text-slate-700',
      'dark:text-slate-300',
      'hover:bg-slate-100',
      'dark:hover:bg-slate-800',
      'transition-colors',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
    ].join(' ');
  });

  monthYearButtonClasses = computed(() => {
    return [
      'px-3',
      'py-1.5',
      'rounded-md',
      'text-sm',
      'font-semibold',
      'text-slate-900',
      'dark:text-slate-100',
      'hover:bg-slate-100',
      'dark:hover:bg-slate-800',
      'transition-colors',
    ].join(' ');
  });

  monthPickerButtonClasses(month: number) {
    const isCurrentMonth = month === this.currentMonth();
    const baseClasses = [
      'px-4',
      'py-2',
      'rounded-md',
      'text-sm',
      'font-medium',
      'transition-colors',
    ];

    if (isCurrentMonth) {
      const statusColors = {
        basic: 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100',
        primary: 'bg-violet-100 text-violet-900 dark:bg-violet-900 dark:text-violet-100',
        success: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100',
        info: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-100',
        warning: 'bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100',
        danger: 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100',
      };
      baseClasses.push(statusColors[this.status()]);
    } else {
      baseClasses.push(
        'text-slate-700',
        'dark:text-slate-300',
        'hover:bg-slate-100',
        'dark:hover:bg-slate-800'
      );
    }

    return baseClasses.join(' ');
  }

  yearPickerButtonClasses(year: number) {
    const isCurrentYear = year === this.currentYear();
    const baseClasses = [
      'px-3',
      'py-2',
      'rounded-md',
      'text-sm',
      'font-medium',
      'transition-colors',
    ];

    if (isCurrentYear) {
      const statusColors = {
        basic: 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100',
        primary: 'bg-violet-100 text-violet-900 dark:bg-violet-900 dark:text-violet-100',
        success: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100',
        info: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-100',
        warning: 'bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100',
        danger: 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100',
      };
      baseClasses.push(statusColors[this.status()]);
    } else {
      baseClasses.push(
        'text-slate-700',
        'dark:text-slate-300',
        'hover:bg-slate-100',
        'dark:hover:bg-slate-800'
      );
    }

    return baseClasses.join(' ');
  }

  dayButtonClasses(day: CalendarDay) {
    const baseClasses = [
      'aspect-square',
      'flex',
      'items-center',
      'justify-center',
      'rounded-md',
      'text-sm',
      'font-medium',
      'transition-colors',
    ];

    if (day.isDisabled) {
      baseClasses.push(
        'text-slate-300',
        'dark:text-slate-700',
        'cursor-not-allowed'
      );
    } else if (day.isSelected) {
      const statusColors = {
        basic: 'bg-slate-600 text-white dark:bg-slate-500',
        primary: 'bg-violet-600 text-white dark:bg-violet-500',
        success: 'bg-emerald-600 text-white dark:bg-emerald-500',
        info: 'bg-cyan-600 text-white dark:bg-cyan-500',
        warning: 'bg-amber-500 text-white dark:bg-amber-400',
        danger: 'bg-red-600 text-white dark:bg-red-500',
      };
      baseClasses.push(statusColors[this.status()]);
    } else if (day.isToday) {
      const statusColors = {
        basic: 'border-2 border-slate-600 text-slate-900 dark:border-slate-400 dark:text-slate-100',
        primary: 'border-2 border-violet-600 text-violet-900 dark:border-violet-400 dark:text-violet-100',
        success: 'border-2 border-emerald-600 text-emerald-900 dark:border-emerald-400 dark:text-emerald-100',
        info: 'border-2 border-cyan-600 text-cyan-900 dark:border-cyan-400 dark:text-cyan-100',
        warning: 'border-2 border-amber-500 text-amber-900 dark:border-amber-400 dark:text-amber-100',
        danger: 'border-2 border-red-600 text-red-900 dark:border-red-400 dark:text-red-100',
      };
      baseClasses.push(statusColors[this.status()]);
    } else {
      if (day.isCurrentMonth) {
        baseClasses.push(
          'text-slate-900',
          'dark:text-slate-100',
          'hover:bg-slate-100',
          'dark:hover:bg-slate-800'
        );
      } else {
        baseClasses.push(
          'text-slate-400',
          'dark:text-slate-600',
          'hover:bg-slate-50',
          'dark:hover:bg-slate-850'
        );
      }
    }

    return baseClasses.join(' ');
  }

  todayButtonClasses = computed(() => {
    return [
      'w-full',
      'px-4',
      'py-2',
      'text-sm',
      'font-medium',
      'rounded-md',
      'transition-colors',
      'text-violet-600',
      'dark:text-violet-400',
      'hover:bg-violet-50',
      'dark:hover:bg-violet-950',
    ].join(' ');
  });
}

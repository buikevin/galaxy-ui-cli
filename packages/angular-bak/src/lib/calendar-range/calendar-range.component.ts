import { Component, Input, signal, computed, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CalendarRangeStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
  isDisabled: boolean;
}

@Component({
  selector: 'g-calendar-range',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses()">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
        <button type="button" [class]="navButtonClasses()" (click)="previousMonth()" [disabled]="!canNavigatePrevious()">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="flex items-center gap-2">
          <button type="button" [class]="monthYearButtonClasses()" (click)="toggleMonthPicker()">
            {{ currentMonthName() }}
          </button>
          <button type="button" [class]="monthYearButtonClasses()" (click)="toggleYearPicker()">
            {{ currentYear() }}
          </button>
        </div>

        <button type="button" [class]="navButtonClasses()" (click)="nextMonth()" [disabled]="!canNavigateNext()">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      @if (showMonthPicker()) {
        <div class="grid grid-cols-3 gap-2 p-4">
          @for (month of months; track month.value) {
            <button type="button" [class]="monthPickerButtonClasses(month.value)" (click)="selectMonth(month.value)">
              {{ month.label }}
            </button>
          }
        </div>
      }

      @if (showYearPicker()) {
        <div class="grid grid-cols-4 gap-2 p-4 max-h-64 overflow-y-auto">
          @for (year of yearRange(); track year) {
            <button type="button" [class]="yearPickerButtonClasses(year)" (click)="selectYear(year)">
              {{ year }}
            </button>
          }
        </div>
      }

      @if (!showMonthPicker() && !showYearPicker()) {
        <!-- Weekday headers -->
        <div class="grid grid-cols-7 gap-1 px-4 py-2 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
          @for (day of weekDays; track day) {
            <div>{{ day }}</div>
          }
        </div>

        <!-- Calendar days -->
        <div class="grid grid-cols-7 gap-1 px-4 pb-4">
          @for (day of calendarDays(); track day.date.getTime()) {
            <button
              type="button"
              [class]="dayButtonClasses(day)"
              [disabled]="day.isDisabled"
              (click)="selectDate(day.date)"
              (mouseenter)="onDayHover(day.date)">
              {{ day.day }}
            </button>
          }
        </div>

        <!-- Footer with quick actions -->
        <div class="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-slate-700">
          <button type="button" [class]="footerButtonClasses()" (click)="selectToday()">
            Today
          </button>
          <button type="button" [class]="footerButtonClasses()" (click)="clear()">
            Clear
          </button>
        </div>

        @if (range().start || range().end) {
          <div class="px-4 pb-3 text-sm text-center text-slate-600 dark:text-slate-400">
            @if (range().start && !range().end) {
              <span>Start: {{ formatDate(range().start!) }}</span>
            }
            @if (range().start && range().end) {
              <span>{{ formatDate(range().start!) }} - {{ formatDate(range().end!) }}</span>
            }
          </div>
        }
      }
    </div>
  `,
})
export class CalendarRangeComponent {
  @Input() set calendarRangeStatus(value: CalendarRangeStatus) { this.status.set(value); }
  @Input() set calendarRangeMinDate(value: Date | null) { this.minDate.set(value); }
  @Input() set calendarRangeMaxDate(value: Date | null) { this.maxDate.set(value); }
  @Input() set calendarRangeValue(value: DateRange) { this.range.set(value); }

  @Output() rangeChange = new EventEmitter<DateRange>();

  status = signal<CalendarRangeStatus>('primary');
  minDate = signal<Date | null>(null);
  maxDate = signal<Date | null>(null);
  range = signal<DateRange>({ start: null, end: null });
  hoverDate = signal<Date | null>(null);

  currentMonth = signal<number>(new Date().getMonth());
  currentYear = signal<number>(new Date().getFullYear());
  showMonthPicker = signal<boolean>(false);
  showYearPicker = signal<boolean>(false);

  months = [
    { value: 0, label: 'Jan' }, { value: 1, label: 'Feb' }, { value: 2, label: 'Mar' },
    { value: 3, label: 'Apr' }, { value: 4, label: 'May' }, { value: 5, label: 'Jun' },
    { value: 6, label: 'Jul' }, { value: 7, label: 'Aug' }, { value: 8, label: 'Sep' },
    { value: 9, label: 'Oct' }, { value: 10, label: 'Nov' }, { value: 11, label: 'Dec' },
  ];

  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  currentMonthName = computed(() => {
    return new Date(this.currentYear(), this.currentMonth(), 1).toLocaleDateString('en-US', { month: 'long' });
  });

  yearRange = computed(() => {
    const current = this.currentYear();
    return Array.from({ length: 12 }, (_, i) => current - 5 + i);
  });

  calendarDays = computed(() => {
    const year = this.currentYear();
    const month = this.currentMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthLastDay - i);
      days.push(this.createCalendarDay(date, false));
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      days.push(this.createCalendarDay(date, true));
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      days.push(this.createCalendarDay(date, false));
    }

    return days;
  });

  private createCalendarDay(date: Date, isCurrentMonth: boolean): CalendarDay {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);

    const range = this.range();
    const hover = this.hoverDate();

    return {
      date: compareDate,
      day: date.getDate(),
      isCurrentMonth,
      isToday: compareDate.getTime() === today.getTime(),
      isRangeStart: range.start ? compareDate.getTime() === new Date(range.start).setHours(0, 0, 0, 0) : false,
      isRangeEnd: range.end ? compareDate.getTime() === new Date(range.end).setHours(0, 0, 0, 0) : false,
      isInRange: this.isDateInRange(compareDate, hover),
      isDisabled: this.isDateDisabled(compareDate),
    };
  }

  private isDateInRange(date: Date, hover: Date | null): boolean {
    const range = this.range();
    if (!range.start) return false;

    const start = new Date(range.start).setHours(0, 0, 0, 0);
    const compareDate = date.getTime();

    if (range.end) {
      const end = new Date(range.end).setHours(0, 0, 0, 0);
      return compareDate > start && compareDate < end;
    }

    if (hover) {
      const hoverTime = new Date(hover).setHours(0, 0, 0, 0);
      return compareDate > Math.min(start, hoverTime) && compareDate < Math.max(start, hoverTime);
    }

    return false;
  }

  private isDateDisabled(date: Date): boolean {
    const min = this.minDate();
    const max = this.maxDate();
    const compareDate = new Date(date).setHours(0, 0, 0, 0);

    if (min && compareDate < new Date(min).setHours(0, 0, 0, 0)) return true;
    if (max && compareDate > new Date(max).setHours(0, 0, 0, 0)) return true;
    return false;
  }

  selectDate(date: Date): void {
    const range = this.range();

    if (!range.start || (range.start && range.end)) {
      // Start new range
      this.range.set({ start: date, end: null });
    } else {
      // Complete range
      const start = range.start;
      if (date < start) {
        this.range.set({ start: date, end: start });
      } else {
        this.range.set({ start, end: date });
      }
    }

    this.rangeChange.emit(this.range());
  }

  onDayHover(date: Date): void {
    const range = this.range();
    if (range.start && !range.end) {
      this.hoverDate.set(date);
    }
  }

  selectToday(): void {
    this.range.set({ start: new Date(), end: null });
    this.rangeChange.emit(this.range());
  }

  clear(): void {
    this.range.set({ start: null, end: null });
    this.hoverDate.set(null);
    this.rangeChange.emit(this.range());
  }

  previousMonth(): void {
    if (this.currentMonth() === 0) {
      this.currentMonth.set(11);
      this.currentYear.set(this.currentYear() - 1);
    } else {
      this.currentMonth.set(this.currentMonth() - 1);
    }
  }

  nextMonth(): void {
    if (this.currentMonth() === 11) {
      this.currentMonth.set(0);
      this.currentYear.set(this.currentYear() + 1);
    } else {
      this.currentMonth.set(this.currentMonth() + 1);
    }
  }

  canNavigatePrevious(): boolean {
    const min = this.minDate();
    if (!min) return true;
    const current = new Date(this.currentYear(), this.currentMonth(), 1);
    return current > new Date(min);
  }

  canNavigateNext(): boolean {
    const max = this.maxDate();
    if (!max) return true;
    const current = new Date(this.currentYear(), this.currentMonth() + 1, 0);
    return current < new Date(max);
  }

  toggleMonthPicker(): void {
    this.showMonthPicker.set(!this.showMonthPicker());
    this.showYearPicker.set(false);
  }

  toggleYearPicker(): void {
    this.showYearPicker.set(!this.showYearPicker());
    this.showMonthPicker.set(false);
  }

  selectMonth(month: number): void {
    this.currentMonth.set(month);
    this.showMonthPicker.set(false);
  }

  selectYear(year: number): void {
    this.currentYear.set(year);
    this.showYearPicker.set(false);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  // Style classes
  containerClasses(): string {
    return 'w-full max-w-md bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700';
  }

  navButtonClasses(): string {
    return 'p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors';
  }

  monthYearButtonClasses(): string {
    return 'px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-slate-700 dark:text-slate-200 transition-colors';
  }

  monthPickerButtonClasses(month: number): string {
    const isSelected = this.currentMonth() === month;
    return `px-4 py-2 rounded-md transition-colors ${
      isSelected
        ? 'bg-' + this.getStatusColor() + ' text-white'
        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
    }`;
  }

  yearPickerButtonClasses(year: number): string {
    const isSelected = this.currentYear() === year;
    return `px-4 py-2 rounded-md transition-colors ${
      isSelected
        ? 'bg-' + this.getStatusColor() + ' text-white'
        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
    }`;
  }

  dayButtonClasses(day: CalendarDay): string {
    let classes = 'aspect-square flex items-center justify-center rounded-md transition-all text-sm font-medium';

    if (day.isDisabled) {
      classes += ' opacity-30 cursor-not-allowed';
    } else {
      classes += ' hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer';
    }

    if (!day.isCurrentMonth) {
      classes += ' text-slate-400 dark:text-slate-600';
    } else {
      classes += ' text-slate-700 dark:text-slate-200';
    }

    if (day.isRangeStart || day.isRangeEnd) {
      classes += ' bg-' + this.getStatusColor() + ' text-white hover:bg-' + this.getStatusColor() + '/90';
    } else if (day.isInRange) {
      classes += ' bg-' + this.getStatusColor() + '/10';
    }

    if (day.isToday && !day.isRangeStart && !day.isRangeEnd) {
      classes += ' ring-2 ring-' + this.getStatusColor();
    }

    return classes;
  }

  footerButtonClasses(): string {
    return 'px-4 py-1.5 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors';
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

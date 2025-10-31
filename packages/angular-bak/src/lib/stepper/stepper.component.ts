import {
  Component,
  Input,
  signal,
  computed,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, icons } from 'lucide-angular';

type StepperOrientation = 'horizontal' | 'vertical';
type StepperStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';

// Step component
@Component({
  selector: 'g-step',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <ng-content></ng-content>
  `,
})
export class StepComponent {
  @Input() set stepLabel(value: string) {
    this._stepLabel.set(value);
  }
  @Input() set stepDescription(value: string | null) {
    this._stepDescription.set(value);
  }
  @Input() set stepIcon(value: keyof typeof icons | null) {
    this._stepIcon.set(value);
  }
  @Input() set stepCompleted(value: boolean) {
    this._stepCompleted.set(value);
  }
  @Input() set stepError(value: boolean) {
    this._stepError.set(value);
  }
  @Input() set stepOptional(value: boolean) {
    this._stepOptional.set(value);
  }
  @Input() set stepEditable(value: boolean) {
    this._stepEditable.set(value);
  }

  private _stepLabel = signal('');
  private _stepDescription = signal<string | null>(null);
  private _stepIcon = signal<keyof typeof icons | null>(null);
  private _stepCompleted = signal(false);
  private _stepError = signal(false);
  private _stepOptional = signal(false);
  private _stepEditable = signal(true);
  private _stepActive = signal(false);

  stepLabel = this._stepLabel.asReadonly();
  stepDescription = this._stepDescription.asReadonly();
  stepIcon = this._stepIcon.asReadonly();
  stepCompleted = this._stepCompleted.asReadonly();
  stepError = this._stepError.asReadonly();
  stepOptional = this._stepOptional.asReadonly();
  stepEditable = this._stepEditable.asReadonly();
  stepActive = this._stepActive.asReadonly();

  setActive(active: boolean) {
    this._stepActive.set(active);
  }
}

// Main stepper component
@Component({
  selector: 'g-stepper',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div [class]="stepperClasses()">
      @for (step of steps; track $index; let i = $index; let isLast = $last) {
        <!-- Step header -->
        <div
          [class]="stepHeaderClasses(step, i)"
          (click)="onStepClick(step, i)"
          [attr.role]="'button'"
          [attr.tabindex]="canSelectStep(step, i) ? '0' : '-1'"
          [attr.aria-label]="step.stepLabel() + (step.stepOptional() ? ' (optional)' : '')"
          (keydown.enter)="onStepClick(step, i)"
          (keydown.space)="onStepClick(step, i)">

          <!-- Step indicator -->
          <div [class]="stepIndicatorClasses(step)">
            @if (step.stepIcon()) {
              <lucide-angular [img]="step.stepIcon()!" class="w-4 h-4"></lucide-angular>
            } @else if (step.stepCompleted() && !step.stepError()) {
              <lucide-angular [img]="'check'" class="w-4 h-4"></lucide-angular>
            } @else if (step.stepError()) {
              <lucide-angular [img]="'alert-circle'" class="w-4 h-4"></lucide-angular>
            } @else {
              <span class="text-sm font-medium">{{ i + 1 }}</span>
            }
          </div>

          <!-- Step label -->
          <div class="flex-1">
            <div [class]="stepLabelClasses(step)">
              {{ step.stepLabel() }}
              @if (step.stepOptional()) {
                <span class="text-xs opacity-60 ml-1">(Optional)</span>
              }
            </div>
            @if (step.stepDescription()) {
              <div class="text-xs opacity-60 mt-0.5">
                {{ step.stepDescription() }}
              </div>
            }
          </div>
        </div>

        <!-- Connector line -->
        @if (!isLast) {
          <div [class]="connectorClasses(step)"></div>
        }
      }

      <!-- Step content -->
      <div class="mt-6">
        @for (step of steps; track $index; let i = $index) {
          @if (step.stepActive()) {
            <div class="animate-in fade-in slide-in-from-right-4 duration-200">
              <ng-content [select]="getStepSelector(i)"></ng-content>
            </div>
          }
        }
      </div>

      <!-- Navigation buttons -->
      @if (stepperShowButtons()) {
        <div class="flex gap-2 mt-6">
          @if (currentStepIndex() > 0) {
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              (click)="previous()">
              <lucide-angular [img]="'chevron-left'" class="w-4 h-4 inline-block mr-1"></lucide-angular>
              Back
            </button>
          }

          @if (currentStepIndex() < steps.length - 1) {
            <button
              type="button"
              [class]="nextButtonClasses()"
              (click)="next()"
              [disabled]="!canProceedNext()">
              Next
              <lucide-angular [img]="'chevron-right'" class="w-4 h-4 inline-block ml-1"></lucide-angular>
            </button>
          } @else {
            <button
              type="button"
              [class]="finishButtonClasses()"
              (click)="finish()"
              [disabled]="!canFinish()">
              <lucide-angular [img]="'check'" class="w-4 h-4 inline-block mr-1"></lucide-angular>
              Finish
            </button>
          }
        </div>
      }
    </div>
  `,
})
export class StepperComponent implements AfterContentInit {
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  @Input() set stepperOrientation(value: StepperOrientation) {
    this._stepperOrientation.set(value);
  }
  @Input() set stepperStatus(value: StepperStatus) {
    this._stepperStatus.set(value);
  }
  @Input() set stepperLinear(value: boolean) {
    this._stepperLinear.set(value);
  }
  @Input() set stepperSelectedIndex(value: number) {
    this._currentStepIndex.set(value);
  }
  @Input() set stepperShowButtons(value: boolean) {
    this._stepperShowButtons.set(value);
  }

  @Output() stepperSelectionChange = new EventEmitter<number>();
  @Output() stepperFinish = new EventEmitter<void>();

  private _stepperOrientation = signal<StepperOrientation>('horizontal');
  private _stepperStatus = signal<StepperStatus>('primary');
  private _stepperLinear = signal(true);
  private _currentStepIndex = signal(0);
  private _stepperShowButtons = signal(true);

  stepperOrientation = this._stepperOrientation.asReadonly();
  stepperStatus = this._stepperStatus.asReadonly();
  stepperLinear = this._stepperLinear.asReadonly();
  currentStepIndex = this._currentStepIndex.asReadonly();
  stepperShowButtons = this._stepperShowButtons.asReadonly();

  ngAfterContentInit() {
    this.updateStepStates();
  }

  stepperClasses = computed(() => {
    return 'w-full';
  });

  stepHeaderClasses(step: StepComponent, index: number) {
    const orientation = this.stepperOrientation();
    const canSelect = this.canSelectStep(step, index);

    const base = [
      'flex items-center gap-3 transition-all',
      orientation === 'horizontal' ? 'flex-1' : 'py-2',
    ];

    const interactive = canSelect
      ? 'cursor-pointer hover:opacity-80'
      : 'cursor-not-allowed opacity-60';

    return [...base, interactive].join(' ');
  }

  stepIndicatorClasses(step: StepComponent) {
    const status = this.stepperStatus();
    const isActive = step.stepActive();
    const isCompleted = step.stepCompleted();
    const hasError = step.stepError();

    const statusColors: Record<StepperStatus, string> = {
      basic: 'bg-slate-600 text-white',
      primary: 'bg-violet-600 text-white',
      success: 'bg-emerald-600 text-white',
      info: 'bg-sky-600 text-white',
      warning: 'bg-amber-600 text-white',
      danger: 'bg-red-600 text-white',
    };

    let classes = [
      'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all',
    ];

    if (hasError) {
      classes.push('bg-red-600 text-white');
    } else if (isCompleted) {
      classes.push('bg-emerald-600 text-white');
    } else if (isActive) {
      classes.push(statusColors[status]);
    } else {
      classes.push('bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400');
    }

    return classes.join(' ');
  }

  stepLabelClasses(step: StepComponent) {
    const isActive = step.stepActive();
    const base = 'text-sm font-medium transition-colors';
    const activeClass = isActive
      ? 'text-slate-900 dark:text-slate-100'
      : 'text-slate-600 dark:text-slate-400';
    return `${base} ${activeClass}`;
  }

  connectorClasses(step: StepComponent) {
    const orientation = this.stepperOrientation();
    const isCompleted = step.stepCompleted();

    const base = 'transition-colors';
    const orientationClass =
      orientation === 'horizontal'
        ? 'flex-1 h-0.5 mx-2'
        : 'w-0.5 h-8 ml-4';
    const colorClass = isCompleted
      ? 'bg-emerald-600'
      : 'bg-slate-200 dark:bg-slate-700';

    return `${base} ${orientationClass} ${colorClass}`;
  }

  nextButtonClasses() {
    const status = this.stepperStatus();
    const statusColors: Record<StepperStatus, string> = {
      basic: 'bg-slate-600 hover:bg-slate-700',
      primary: 'bg-violet-600 hover:bg-violet-700',
      success: 'bg-emerald-600 hover:bg-emerald-700',
      info: 'bg-sky-600 hover:bg-sky-700',
      warning: 'bg-amber-600 hover:bg-amber-700',
      danger: 'bg-red-600 hover:bg-red-700',
    };

    return [
      'px-4 py-2 text-sm font-medium text-white rounded-md transition-colors',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      statusColors[status],
    ].join(' ');
  }

  finishButtonClasses() {
    return [
      'px-4 py-2 text-sm font-medium text-white rounded-md transition-colors',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'bg-emerald-600 hover:bg-emerald-700',
    ].join(' ');
  }

  canSelectStep(step: StepComponent, index: number): boolean {
    if (!this.stepperLinear()) return step.stepEditable();
    return index <= this.currentStepIndex() && step.stepEditable();
  }

  canProceedNext(): boolean {
    const currentStep = this.steps.get(this.currentStepIndex());
    return currentStep ? !currentStep.stepError() : false;
  }

  canFinish(): boolean {
    return this.steps.toArray().every((step) => step.stepCompleted() || step.stepOptional());
  }

  onStepClick(step: StepComponent, index: number) {
    if (this.canSelectStep(step, index)) {
      this.selectStep(index);
    }
  }

  selectStep(index: number) {
    this._currentStepIndex.set(index);
    this.updateStepStates();
    this.stepperSelectionChange.emit(index);
  }

  next() {
    if (this.currentStepIndex() < this.steps.length - 1) {
      this.selectStep(this.currentStepIndex() + 1);
    }
  }

  previous() {
    if (this.currentStepIndex() > 0) {
      this.selectStep(this.currentStepIndex() - 1);
    }
  }

  finish() {
    if (this.canFinish()) {
      this.stepperFinish.emit();
    }
  }

  reset() {
    this._currentStepIndex.set(0);
    this.steps.forEach((step) => {
      (step as any)._stepCompleted.set(false);
      (step as any)._stepError.set(false);
    });
    this.updateStepStates();
  }

  private updateStepStates() {
    const currentIndex = this.currentStepIndex();
    this.steps.forEach((step, index) => {
      step.setActive(index === currentIndex);
    });
  }

  getStepSelector(index: number): string {
    return `g-step:nth-child(${index + 1})`;
  }
}

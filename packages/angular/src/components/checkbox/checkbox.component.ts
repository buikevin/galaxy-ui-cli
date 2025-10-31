import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxCheckboxRootDirective,
  RdxCheckboxIndicatorDirective
} from '@radix-ng/primitives/checkbox';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule, RdxCheckboxRootDirective, RdxCheckboxIndicatorDirective],
  template: `
    <button
      rdxCheckboxRoot
      [rdxCheckboxChecked]="checked"
      [disabled]="disabled"
      [class]="checkboxClasses"
      (rdxCheckboxCheckedChange)="onCheckedChange($event)"
    >
      <span rdxCheckboxIndicator>
        @if (checked) {
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        }
      </span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() class?: string;
  @Output() checkedChange = new EventEmitter<boolean>();

  get checkboxClasses(): string {
    return cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      this.class
    );
  }

  onCheckedChange(checked: boolean): void {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }
}

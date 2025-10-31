import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxRadioGroupRootDirective,
  RdxRadioGroupItemDirective,
  RdxRadioGroupIndicatorDirective,
} from '@radix-ng/primitives/radio-group';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-radio-group',
  standalone: true,
  imports: [CommonModule, RdxRadioGroupRootDirective],
  template: `
    <div
      rdxRadioGroupRoot
      [rdxRadioGroupValue]="value"
      (rdxRadioGroupValueChange)="onValueChange($event)"
      class="grid gap-2"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent {
  @Input() value?: string;
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string) {
    this.value = value;
    this.valueChange.emit(value);
  }
}

@Component({
  selector: 'ui-radio-group-item',
  standalone: true,
  imports: [CommonModule, RdxRadioGroupItemDirective, RdxRadioGroupIndicatorDirective],
  template: `
    <button
      rdxRadioGroupItem
      [rdxRadioGroupItemValue]="value"
      [disabled]="disabled"
      [class]="itemClasses"
    >
      <span rdxRadioGroupIndicator class="flex items-center justify-center">
        <svg class="h-2.5 w-2.5 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupItemComponent {
  @Input() value!: string;
  @Input() disabled: boolean = false;
  @Input() class?: string;

  get itemClasses(): string {
    return cn(
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      this.class
    );
  }
}

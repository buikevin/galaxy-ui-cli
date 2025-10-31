import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxSliderRootDirective,
  RdxSliderTrackDirective,
  RdxSliderRangeDirective,
  RdxSliderThumbDirective,
} from '@radix-ng/primitives/slider';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-slider',
  standalone: true,
  imports: [
    CommonModule,
    RdxSliderRootDirective,
    RdxSliderTrackDirective,
    RdxSliderRangeDirective,
    RdxSliderThumbDirective,
  ],
  template: `
    <span
      rdxSliderRoot
      [rdxSliderValue]="[value]"
      [rdxSliderMin]="min"
      [rdxSliderMax]="max"
      [rdxSliderStep]="step"
      [disabled]="disabled"
      (rdxSliderValueChange)="onValueChange($event)"
      [class]="sliderClasses"
    >
      <span rdxSliderTrack class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <span rdxSliderRange class="absolute h-full bg-primary"></span>
      </span>
      <span rdxSliderThumb class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"></span>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() value: number = 50;
  @Input() disabled: boolean = false;
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<number>();

  get sliderClasses(): string {
    return cn(
      'relative flex w-full touch-none select-none items-center',
      this.class
    );
  }

  onValueChange(values: number[]): void {
    if (values && values.length > 0) {
      this.value = values[0];
      this.valueChange.emit(this.value);
    }
  }
}

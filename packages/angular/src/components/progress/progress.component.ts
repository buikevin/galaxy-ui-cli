import { Component, Input, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxProgressRootDirective,
  RdxProgressIndicatorDirective,
} from '@radix-ng/primitives/progress';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-progress',
  standalone: true,
  imports: [CommonModule, RdxProgressRootDirective, RdxProgressIndicatorDirective],
  template: `
    <div
      rdxProgressRoot
      [rdxProgressValue]="value()"
      [rdxProgressMax]="max()"
      [class]="rootClasses()"
    >
      <div
        rdxProgressIndicator
        class="h-full w-full flex-1 bg-primary transition-all"
        [style.transform]="'translateX(-' + (100 - percentage()) + '%)'"
      ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  @Input() set value(val: number | null | undefined) {
    this._value.set(val ?? 0);
  }
  @Input() set max(val: number) {
    this._max.set(val);
  }
  @Input() class?: string;

  private _value = signal<number>(0);
  private _max = signal<number>(100);

  protected value = computed(() => this._value());
  protected max = computed(() => this._max());

  protected percentage = computed(() => {
    const val = this.value();
    const maxVal = this.max();
    return Math.min(Math.max((val / maxVal) * 100, 0), 100);
  });

  protected rootClasses = computed(() => {
    return cn(
      'relative h-2 w-full overflow-hidden rounded-full bg-secondary',
      this.class
    );
  });
}

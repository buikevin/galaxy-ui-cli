import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdxPrimitiveDirective } from '@radix-ng/primitives';
import { type ButtonVariants, buttonVariants } from './variants';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-button, button[ui-button]',
  standalone: true,
  imports: [CommonModule, RdxPrimitiveDirective],
  template: `<ng-content></ng-content>`,
  hostDirectives: [
    {
      directive: RdxPrimitiveDirective,
      inputs: ['rdxPrimitiveAs: asChild']
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariants['variant'] = 'default';
  @Input() size: ButtonVariants['size'] = 'default';
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(buttonVariants({ variant: this.variant, size: this.size }), this.class);
  }

  @HostBinding('attr.type')
  get buttonType(): string {
    return 'button';
  }
}

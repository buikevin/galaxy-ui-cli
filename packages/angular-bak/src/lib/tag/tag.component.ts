import {
  Component,
  input,
  output,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X } from 'lucide-angular';

export type TagStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type TagSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'g-tag',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="tagClasses()">
      <!-- Icon -->
      @if (icon()) {
        <span class="g-tag-icon mr-1">{{ icon() }}</span>
      }

      <!-- Content -->
      <span class="g-tag-content">
        <ng-content></ng-content>
      </span>

      <!-- Close Button -->
      @if (closable()) {
        <button
          (click)="handleClose($event)"
          class="g-tag-close ml-1 hover:opacity-70 transition-opacity focus:outline-none"
          [attr.aria-label]="'Close'"
        >
          <lucide-icon [img]="XIcon" [size]="closeIconSize()"></lucide-icon>
        </button>
      }
    </span>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class TagComponent {
  // Icons
  readonly XIcon = X;

  // Inputs
  status = input<TagStatus>('basic');
  size = input<TagSize>('medium');
  closable = input(false);
  bordered = input(false);
  icon = input<string>();

  // Outputs
  close = output<MouseEvent>();

  tagClasses = computed(() => {
    const classes = [
      'g-tag',
      'inline-flex items-center',
      'font-medium',
      'transition-all',
      'rounded',
    ];

    // Size classes
    const sizeClasses = {
      small: 'px-2 py-0.5 text-xs',
      medium: 'px-2.5 py-1 text-sm',
      large: 'px-3 py-1.5 text-base',
    };
    classes.push(sizeClasses[this.size()]);

    // Status classes
    const statusClasses = {
      basic: this.bordered()
        ? 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
      primary: this.bordered()
        ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700'
        : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
      success: this.bordered()
        ? 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 border border-green-300 dark:border-green-700'
        : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      info: this.bordered()
        ? 'bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-700'
        : 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300',
      warning: this.bordered()
        ? 'bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-700'
        : 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300',
      danger: this.bordered()
        ? 'bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-700'
        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    };
    classes.push(statusClasses[this.status()]);

    return classes.join(' ');
  });

  closeIconSize = computed(() => {
    const sizes = {
      small: 12,
      medium: 14,
      large: 16,
    };
    return sizes[this.size()];
  });

  handleClose(event: MouseEvent): void {
    event.stopPropagation();
    this.close.emit(event);
  }
}

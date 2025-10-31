import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, User } from 'lucide-angular';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';
export type AvatarShape = 'circle' | 'square';

@Component({
  selector: 'g-avatar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      [class]="avatarClasses()"
      [style.width.px]="customSize() || sizeValue()"
      [style.height.px]="customSize() || sizeValue()"
      (click)="handleClick()"
    >
      @if (src() && !imageError()) {
        <img
          [src]="src()"
          [alt]="alt() || text()"
          (error)="handleImageError()"
          class="w-full h-full object-cover"
        />
      } @else if (icon()) {
        <lucide-icon
          [img]="icon()"
          [size]="iconSize()"
          class="text-current"
        ></lucide-icon>
      } @else if (text()) {
        <span [class]="textClasses()">
          {{ getInitials() }}
        </span>
      } @else {
        <lucide-icon
          [img]="UserIcon"
          [size]="iconSize()"
          class="text-current"
        ></lucide-icon>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class AvatarComponent {
  // Icons
  readonly UserIcon = User;

  // Inputs
  src = input<string>();
  alt = input<string>();
  text = input<string>();
  icon = input<any>();
  size = input<AvatarSize>('medium');
  customSize = input<number>();
  shape = input<AvatarShape>('circle');
  bgColor = input<string>();
  textColor = input<string>();

  // Outputs
  click = output<MouseEvent>();
  error = output<Event>();

  // State
  imageError = signal(false);

  avatarClasses = computed(() => {
    const classes = [
      'g-avatar',
      'inline-flex items-center justify-center',
      'overflow-hidden',
      'bg-gray-200 dark:bg-gray-700',
      'text-gray-600 dark:text-gray-300',
      'font-medium',
      'select-none',
      'flex-shrink-0',
    ];

    const shape = this.shape();
    if (shape === 'circle') {
      classes.push('rounded-full');
    } else {
      classes.push('rounded-md');
    }

    // Custom background color
    if (this.bgColor()) {
      classes.push(`bg-[${this.bgColor()}]`);
    }

    // Custom text color
    if (this.textColor()) {
      classes.push(`text-[${this.textColor()}]`);
    }

    // Hover effect if clickable
    if (this.click.observed) {
      classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    }

    return classes.join(' ');
  });

  textClasses = computed(() => {
    const classes = ['font-semibold'];

    const sizeTextClasses = {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base',
      xlarge: 'text-lg',
    };

    classes.push(sizeTextClasses[this.size()]);

    return classes.join(' ');
  });

  sizeValue = computed(() => {
    const sizes = {
      small: 32,
      medium: 40,
      large: 48,
      xlarge: 64,
    };
    return sizes[this.size()];
  });

  iconSize = computed(() => {
    const sizes = {
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 32,
    };
    return sizes[this.size()];
  });

  getInitials(): string {
    const text = this.text();
    if (!text) return '';

    const words = text.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }

    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  handleImageError(): void {
    this.imageError.set(true);
    this.error.emit(event as Event);
  }

  handleClick(): void {
    if (this.click.observed) {
      this.click.emit(event as MouseEvent);
    }
  }
}

// Avatar Group Component
@Component({
  selector: 'g-avatar-group',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="groupClasses()">
      <ng-content></ng-content>
      @if (maxCount() && totalCount() > maxCount()) {
        <div [class]="moreClasses()">
          +{{ totalCount() - maxCount() }}
        </div>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      ::ng-deep g-avatar {
        margin-left: -8px;
      }

      ::ng-deep g-avatar:first-child {
        margin-left: 0;
      }

      ::ng-deep g-avatar:hover {
        z-index: 10;
      }
    `,
  ],
})
export class AvatarGroupComponent {
  // Inputs
  maxCount = input<number>();
  totalCount = input<number>(0);
  size = input<AvatarSize>('medium');
  shape = input<AvatarShape>('circle');

  groupClasses = computed(() => {
    return 'g-avatar-group inline-flex items-center';
  });

  moreClasses = computed(() => {
    const classes = [
      'g-avatar-more',
      'inline-flex items-center justify-center',
      'bg-gray-200 dark:bg-gray-700',
      'text-gray-600 dark:text-gray-300',
      'font-medium',
      'text-sm',
      '-ml-2',
      'border-2 border-white dark:border-gray-900',
    ];

    const shape = this.shape();
    if (shape === 'circle') {
      classes.push('rounded-full');
    } else {
      classes.push('rounded-md');
    }

    const sizes = {
      small: 'w-8 h-8 text-xs',
      medium: 'w-10 h-10 text-sm',
      large: 'w-12 h-12 text-base',
      xlarge: 'w-16 h-16 text-lg',
    };

    classes.push(sizes[this.size()]);

    return classes.join(' ');
  });
}

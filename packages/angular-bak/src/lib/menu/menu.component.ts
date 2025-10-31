import { Component, Input, signal, computed, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, icons } from 'lucide-angular';

export type MenuStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';

/**
 * Galaxy UI Menu Component
 *
 * A flexible navigation menu inspired by Nebular and shadcn/ui.
 * Supports icons from Lucide, nested items, and active states.
 *
 * @example
 * ```html
 * <g-menu>
 *   <g-menu-item [itemIcon]="'home'" [itemLabel]="'Home'" [itemActive]="true">
 *   </g-menu-item>
 *   <g-menu-item [itemIcon]="'settings'" [itemLabel]="'Settings'">
 *   </g-menu-item>
 * </g-menu>
 * ```
 */
@Component({
  selector: 'g-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class]="containerClasses()">
      <ng-content></ng-content>
    </nav>
  `,
})
export class MenuComponent {
  status = signal<MenuStatus>('basic');
  compact = signal(false);

  @Input() set menuStatus(v: MenuStatus) { this.status.set(v); }
  @Input() set menuCompact(v: boolean) { this.compact.set(v); }

  containerClasses = computed(() => {
    return [
      'flex',
      'flex-col',
      'gap-1',
      'p-2',
    ].join(' ');
  });
}

/**
 * Menu Item Component
 */
@Component({
  selector: 'g-menu-item',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      type="button"
      [class]="itemClasses()"
      [disabled]="disabled()"
      (click)="handleClick()"
    >
      <!-- Icon -->
      @if (icon()) {
        <lucide-angular
          [img]="icon()"
          [class]="iconClasses()"
        ></lucide-angular>
      }

      <!-- Label -->
      <span [class]="labelClasses()">{{ label() }}</span>

      <!-- Badge -->
      @if (badge()) {
        <span [class]="badgeClasses()">{{ badge() }}</span>
      }

      <!-- Submenu indicator -->
      @if (hasSubmenu()) {
        <lucide-angular
          [img]="'chevron-right'"
          class="w-4 h-4 ml-auto transition-transform"
          [class.rotate-90]="isExpanded()"
        ></lucide-angular>
      }
    </button>

    <!-- Submenu -->
    @if (hasSubmenu() && isExpanded()) {
      <div class="ml-4 mt-1 space-y-1">
        <ng-content></ng-content>
      </div>
    }
  `,
})
export class MenuItemComponent {
  label = signal('');
  icon = signal<keyof typeof icons | null>(null);
  badge = signal<string | number | null>(null);
  active = signal(false);
  disabled = signal(false);
  hasSubmenu = signal(false);
  isExpanded = signal(false);
  href = signal<string | null>(null);

  @Output() itemClick = new EventEmitter<void>();

  @Input() set itemLabel(v: string) { this.label.set(v); }
  @Input() set itemIcon(v: keyof typeof icons) { this.icon.set(v); }
  @Input() set itemBadge(v: string | number) { this.badge.set(v); }
  @Input() set itemActive(v: boolean) { this.active.set(v); }
  @Input() set itemDisabled(v: boolean) { this.disabled.set(v); }
  @Input() set itemHasSubmenu(v: boolean) { this.hasSubmenu.set(v); }
  @Input() set itemExpanded(v: boolean) { this.isExpanded.set(v); }
  @Input() set itemHref(v: string) { this.href.set(v); }

  handleClick() {
    if (this.hasSubmenu()) {
      this.isExpanded.update(v => !v);
    }
    this.itemClick.emit();
  }

  itemClasses = computed(() => {
    const baseClasses = [
      'flex',
      'items-center',
      'gap-3',
      'px-3',
      'py-2',
      'rounded-md',
      'text-sm',
      'font-medium',
      'transition-all',
      'duration-200',
      'w-full',
      'text-left',
    ];

    if (this.disabled()) {
      baseClasses.push(
        'opacity-50',
        'cursor-not-allowed',
        'pointer-events-none'
      );
    } else if (this.active()) {
      baseClasses.push(
        'bg-violet-100',
        'dark:bg-violet-950',
        'text-violet-900',
        'dark:text-violet-100',
        'font-semibold'
      );
    } else {
      baseClasses.push(
        'text-slate-700',
        'dark:text-slate-300',
        'hover:bg-slate-100',
        'dark:hover:bg-slate-800',
        'hover:text-slate-900',
        'dark:hover:text-slate-100'
      );
    }

    return baseClasses.join(' ');
  });

  iconClasses = computed(() => {
    return 'w-5 h-5 flex-shrink-0';
  });

  labelClasses = computed(() => {
    return 'flex-1';
  });

  badgeClasses = computed(() => {
    return [
      'px-2',
      'py-0.5',
      'text-xs',
      'font-semibold',
      'rounded-full',
      'bg-violet-600',
      'text-white',
      'dark:bg-violet-500',
    ].join(' ');
  });
}

/**
 * Menu Group Component (for section headers)
 */
@Component({
  selector: 'g-menu-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="groupClasses()">
      @if (title()) {
        <div [class]="titleClasses()">{{ title() }}</div>
      }
      <div class="space-y-1">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class MenuGroupComponent {
  title = signal('');

  @Input() set groupTitle(v: string) { this.title.set(v); }

  groupClasses = computed(() => {
    return 'mt-4 first:mt-0';
  });

  titleClasses = computed(() => {
    return [
      'px-3',
      'py-2',
      'text-xs',
      'font-semibold',
      'text-slate-500',
      'dark:text-slate-400',
      'uppercase',
      'tracking-wider',
    ].join(' ');
  });
}

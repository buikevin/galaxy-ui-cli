import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, icons } from 'lucide-angular';

/**
 * Galaxy UI Breadcrumb Component
 *
 * Navigation breadcrumbs inspired by shadcn/ui and Ant Design.
 * Shows the current location within a navigation hierarchy.
 *
 * @example
 * ```html
 * <g-breadcrumb>
 *   <g-breadcrumb-item [itemIcon]="'home'" [itemHref]="'/'">
 *     Home
 *   </g-breadcrumb-item>
 *   <g-breadcrumb-item [itemHref]="'/products'">
 *     Products
 *   </g-breadcrumb-item>
 *   <g-breadcrumb-item [itemActive]="true">
 *     Laptop
 *   </g-breadcrumb-item>
 * </g-breadcrumb>
 * ```
 */
@Component({
  selector: 'g-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class]="containerClasses()" aria-label="Breadcrumb">
      <ol class="flex items-center gap-2">
        <ng-content></ng-content>
      </ol>
    </nav>
  `,
})
export class BreadcrumbComponent {
  separator = signal<string | null>(null);

  @Input() set breadcrumbSeparator(v: string) { this.separator.set(v); }

  containerClasses = computed(() => {
    return 'text-sm text-slate-600 dark:text-slate-400';
  });
}

/**
 * Breadcrumb Item Component
 */
@Component({
  selector: 'g-breadcrumb-item',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <li [class]="itemClasses()">
      <div class="flex items-center gap-2">
        <!-- Item content -->
        @if (href() && !active()) {
          <a [href]="href()" [routerLink]="href()" [class]="linkClasses()">
            @if (icon()) {
              <lucide-angular [img]="icon()!" class="w-4 h-4"></lucide-angular>
            }
            <span>
              <ng-content></ng-content>
            </span>
          </a>
        } @else {
          <span [class]="textClasses()">
            @if (icon()) {
              <lucide-angular [img]="icon()!" class="w-4 h-4"></lucide-angular>
            }
            <span>
              <ng-content></ng-content>
            </span>
          </span>
        }

        <!-- Separator -->
        @if (!isLast()) {
          <span class="text-slate-400 dark:text-slate-600">
            <lucide-angular [img]="'chevron-right'" class="w-4 h-4"></lucide-angular>
          </span>
        }
      </div>
    </li>
  `,
})
export class BreadcrumbItemComponent {
  href = signal<string | null>(null);
  icon = signal<keyof typeof icons | null>(null);
  active = signal(false);
  isLast = signal(false);

  @Input() set itemHref(v: string) { this.href.set(v); }
  @Input() set itemIcon(v: keyof typeof icons) { this.icon.set(v); }
  @Input() set itemActive(v: boolean) { this.active.set(v); }
  @Input() set itemIsLast(v: boolean) { this.isLast.set(v); }

  itemClasses = computed(() => {
    return 'flex items-center';
  });

  linkClasses = computed(() => {
    return [
      'flex',
      'items-center',
      'gap-1.5',
      'hover:text-slate-900',
      'dark:hover:text-slate-100',
      'transition-colors',
      'duration-150',
    ].join(' ');
  });

  textClasses = computed(() => {
    const baseClasses = ['flex', 'items-center', 'gap-1.5'];

    if (this.active()) {
      baseClasses.push(
        'text-slate-900',
        'dark:text-slate-100',
        'font-medium'
      );
    }

    return baseClasses.join(' ');
  });
}

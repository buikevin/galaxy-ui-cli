import { Component, Input, signal, computed, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, icons } from 'lucide-angular';

export type TabsOrientation = 'horizontal' | 'vertical';

/**
 * Galaxy UI Tabs Component
 *
 * Tabbed navigation inspired by Nebular and shadcn/ui.
 * Supports horizontal and vertical orientations with icons.
 *
 * @example
 * ```html
 * <g-tabs>
 *   <g-tab [tabLabel]="'Profile'" [tabIcon]="'user'" [tabActive]="true">
 *     Profile content
 *   </g-tab>
 *   <g-tab [tabLabel]="'Settings'" [tabIcon]="'settings'">
 *     Settings content
 *   </g-tab>
 * </g-tabs>
 * ```
 */
@Component({
  selector: 'g-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses()">
      <!-- Tab List -->
      <div [class]="tabListClasses()" role="tablist">
        @for (tab of tabs; track tab; let i = $index) {
          <button
            type="button"
            role="tab"
            [attr.aria-selected]="tab.active()"
            [attr.aria-controls]="'panel-' + i"
            [class]="tabButtonClasses(tab)"
            [disabled]="tab.disabled()"
            (click)="selectTab(tab)"
          >
            @if (tab.icon()) {
              <lucide-angular [img]="tab.icon()!" class="w-4 h-4"></lucide-angular>
            }
            <span>{{ tab.label() }}</span>
            @if (tab.badge()) {
              <span [class]="badgeClasses()">{{ tab.badge() }}</span>
            }
          </button>
        }
      </div>

      <!-- Tab Panels -->
      <div [class]="panelContainerClasses()">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  orientation = signal<TabsOrientation>('horizontal');
  fullWidth = signal(false);

  @Output() tabChange = new EventEmitter<number>();

  @Input() set tabsOrientation(v: TabsOrientation) { this.orientation.set(v); }
  @Input() set tabsFullWidth(v: boolean) { this.fullWidth.set(v); }

  ngAfterContentInit() {
    // Ensure at least one tab is active
    const hasActive = this.tabs.some(tab => tab.active());
    if (!hasActive && this.tabs.length > 0) {
      this.tabs.first.active.set(true);
    }
  }

  selectTab(selectedTab: TabComponent) {
    if (selectedTab.disabled()) return;

    this.tabs.forEach((tab, index) => {
      const isSelected = tab === selectedTab;
      tab.active.set(isSelected);
      if (isSelected) {
        this.tabChange.emit(index);
      }
    });
  }

  containerClasses = computed(() => {
    const orientationClass =
      this.orientation() === 'horizontal' ? 'flex-col' : 'flex-row';

    return ['flex', 'w-full', orientationClass].join(' ');
  });

  tabListClasses = computed(() => {
    const baseClasses = ['flex', 'gap-2'];

    if (this.orientation() === 'horizontal') {
      baseClasses.push(
        'border-b',
        'border-slate-200',
        'dark:border-slate-700',
        'mb-4'
      );

      if (this.fullWidth()) {
        baseClasses.push('w-full');
      }
    } else {
      baseClasses.push(
        'flex-col',
        'border-r',
        'border-slate-200',
        'dark:border-slate-700',
        'pr-4',
        'mr-4'
      );
    }

    return baseClasses.join(' ');
  });

  tabButtonClasses(tab: TabComponent) {
    const baseClasses = [
      'flex',
      'items-center',
      'gap-2',
      'px-4',
      'py-2',
      'text-sm',
      'font-medium',
      'transition-all',
      'duration-200',
      'border-b-2',
      'whitespace-nowrap',
    ];

    if (tab.disabled()) {
      baseClasses.push(
        'opacity-50',
        'cursor-not-allowed',
        'pointer-events-none'
      );
    } else if (tab.active()) {
      baseClasses.push(
        'border-violet-600',
        'text-violet-600',
        'dark:border-violet-400',
        'dark:text-violet-400'
      );
    } else {
      baseClasses.push(
        'border-transparent',
        'text-slate-600',
        'dark:text-slate-400',
        'hover:text-slate-900',
        'dark:hover:text-slate-100',
        'hover:border-slate-300',
        'dark:hover:border-slate-600'
      );
    }

    if (this.fullWidth()) {
      baseClasses.push('flex-1', 'justify-center');
    }

    return baseClasses.join(' ');
  }

  badgeClasses = computed(() => {
    return [
      'px-2',
      'py-0.5',
      'text-xs',
      'font-semibold',
      'rounded-full',
      'bg-violet-100',
      'text-violet-700',
      'dark:bg-violet-900',
      'dark:text-violet-300',
    ].join(' ');
  });

  panelContainerClasses = computed(() => {
    return 'w-full';
  });
}

/**
 * Tab Component
 */
@Component({
  selector: 'g-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (active()) {
      <div
        role="tabpanel"
        [class]="panelClasses()"
        [@fadeIn]
      >
        <ng-content></ng-content>
      </div>
    }
  `,
  animations: [],
})
export class TabComponent {
  label = signal('');
  icon = signal<keyof typeof icons | null>(null);
  badge = signal<string | number | null>(null);
  active = signal(false);
  disabled = signal(false);
  lazy = signal(false);
  loaded = signal(false);

  @Input() set tabLabel(v: string) { this.label.set(v); }
  @Input() set tabIcon(v: keyof typeof icons) { this.icon.set(v); }
  @Input() set tabBadge(v: string | number) { this.badge.set(v); }
  @Input() set tabActive(v: boolean) { this.active.set(v); }
  @Input() set tabDisabled(v: boolean) { this.disabled.set(v); }
  @Input() set tabLazy(v: boolean) { this.lazy.set(v); }

  panelClasses = computed(() => {
    return [
      'animate-in',
      'fade-in-50',
      'duration-200',
    ].join(' ');
  });
}

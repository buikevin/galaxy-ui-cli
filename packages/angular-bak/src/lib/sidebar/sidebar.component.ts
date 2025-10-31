import {
  Component,
  Input,
  signal,
  computed,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, icons } from 'lucide-angular';

type SidebarPosition = 'left' | 'right';
type SidebarMode = 'fixed' | 'overlay';
type SidebarStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';

// Sidebar header component
@Component({
  selector: 'g-sidebar-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 border-b border-slate-200 dark:border-slate-700">
      <ng-content></ng-content>
    </div>
  `,
})
export class SidebarHeaderComponent {}

// Sidebar content component
@Component({
  selector: 'g-sidebar-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex-1 overflow-y-auto p-4">
      <ng-content></ng-content>
    </div>
  `,
})
export class SidebarContentComponent {}

// Sidebar footer component
@Component({
  selector: 'g-sidebar-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 border-t border-slate-200 dark:border-slate-700">
      <ng-content></ng-content>
    </div>
  `,
})
export class SidebarFooterComponent {}

// Main sidebar component
@Component({
  selector: 'g-sidebar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
  template: `
    <!-- Backdrop for overlay mode -->
    @if (sidebarMode() === 'overlay' && !sidebarCollapsed() && sidebarBackdrop()) {
      <div
        class="fixed inset-0 bg-black/50 z-40 transition-opacity"
        [class.animate-in]="!sidebarCollapsed()"
        [class.fade-in]="!sidebarCollapsed()"
        (click)="collapse()">
      </div>
    }

    <!-- Sidebar -->
    <aside [class]="sidebarClasses()">
      <!-- Collapse toggle button -->
      @if (sidebarCollapsible()) {
        <button
          type="button"
          [class]="toggleButtonClasses()"
          (click)="toggleCollapse()"
          [attr.aria-label]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'">
          <lucide-angular
            [img]="sidebarCollapsed() ? 'chevron-right' : 'chevron-left'"
            class="w-4 h-4">
          </lucide-angular>
        </button>
      }

      <!-- Content -->
      <div class="flex flex-col h-full">
        <ng-content></ng-content>
      </div>
    </aside>
  `,
})
export class SidebarComponent {
  @Input() set sidebarPosition(value: SidebarPosition) {
    this._sidebarPosition.set(value);
  }
  @Input() set sidebarMode(value: SidebarMode) {
    this._sidebarMode.set(value);
  }
  @Input() set sidebarStatus(value: SidebarStatus) {
    this._sidebarStatus.set(value);
  }
  @Input() set sidebarCollapsed(value: boolean) {
    this._sidebarCollapsed.set(value);
  }
  @Input() set sidebarCollapsible(value: boolean) {
    this._sidebarCollapsible.set(value);
  }
  @Input() set sidebarWidth(value: string) {
    this._sidebarWidth.set(value);
  }
  @Input() set sidebarCollapsedWidth(value: string) {
    this._sidebarCollapsedWidth.set(value);
  }
  @Input() set sidebarBackdrop(value: boolean) {
    this._sidebarBackdrop.set(value);
  }
  @Input() set sidebarResponsive(value: boolean) {
    this._sidebarResponsive.set(value);
  }

  @Output() sidebarCollapsedChange = new EventEmitter<boolean>();

  private _sidebarPosition = signal<SidebarPosition>('left');
  private _sidebarMode = signal<SidebarMode>('fixed');
  private _sidebarStatus = signal<SidebarStatus>('basic');
  private _sidebarCollapsed = signal(false);
  private _sidebarCollapsible = signal(true);
  private _sidebarWidth = signal('16rem');
  private _sidebarCollapsedWidth = signal('4rem');
  private _sidebarBackdrop = signal(true);
  private _sidebarResponsive = signal(true);

  sidebarPosition = this._sidebarPosition.asReadonly();
  sidebarMode = this._sidebarMode.asReadonly();
  sidebarStatus = this._sidebarStatus.asReadonly();
  sidebarCollapsed = this._sidebarCollapsed.asReadonly();
  sidebarCollapsible = this._sidebarCollapsible.asReadonly();
  sidebarWidth = this._sidebarWidth.asReadonly();
  sidebarCollapsedWidth = this._sidebarCollapsedWidth.asReadonly();
  sidebarBackdrop = this._sidebarBackdrop.asReadonly();
  sidebarResponsive = this._sidebarResponsive.asReadonly();

  sidebarClasses = computed(() => {
    const position = this.sidebarPosition();
    const mode = this.sidebarMode();
    const status = this.sidebarStatus();
    const collapsed = this.sidebarCollapsed();
    const responsive = this.sidebarResponsive();
    const width = collapsed ? this.sidebarCollapsedWidth() : this.sidebarWidth();

    const baseClasses = [
      'flex flex-col h-full transition-all duration-300 ease-in-out',
      'border-slate-200 dark:border-slate-700',
    ];

    // Status colors
    const statusClasses: Record<SidebarStatus, string> = {
      basic: 'bg-white dark:bg-slate-900',
      primary: 'bg-violet-50 dark:bg-violet-950',
      success: 'bg-emerald-50 dark:bg-emerald-950',
      info: 'bg-sky-50 dark:bg-sky-950',
      warning: 'bg-amber-50 dark:bg-amber-950',
      danger: 'bg-red-50 dark:bg-red-950',
    };

    // Position
    const positionClasses =
      position === 'left' ? 'border-r' : 'border-l';

    // Mode
    const modeClasses =
      mode === 'overlay'
        ? `fixed top-0 ${position === 'left' ? 'left-0' : 'right-0'} z-50 h-screen ${
            collapsed ? '-translate-x-full' : 'translate-x-0'
          }`
        : 'relative';

    // Width
    const widthStyle = `width: ${width}`;

    // Responsive - hide on mobile, show on md+
    const responsiveClasses = responsive
      ? collapsed && mode === 'overlay'
        ? 'hidden'
        : 'block'
      : 'block';

    return [
      ...baseClasses,
      statusClasses[status],
      positionClasses,
      modeClasses,
      responsiveClasses,
    ].join(' ');
  });

  toggleButtonClasses = computed(() => {
    const position = this.sidebarPosition();

    return [
      'absolute top-4',
      position === 'left' ? '-right-3' : '-left-3',
      'w-6 h-6 rounded-full',
      'bg-white dark:bg-slate-900',
      'border border-slate-200 dark:border-slate-700',
      'flex items-center justify-center',
      'hover:bg-slate-50 dark:hover:bg-slate-800',
      'transition-colors z-10',
      'shadow-sm',
    ].join(' ');
  });

  toggleCollapse() {
    this._sidebarCollapsed.update((v) => !v);
    this.sidebarCollapsedChange.emit(this.sidebarCollapsed());
  }

  collapse() {
    this._sidebarCollapsed.set(true);
    this.sidebarCollapsedChange.emit(true);
  }

  expand() {
    this._sidebarCollapsed.set(false);
    this.sidebarCollapsedChange.emit(false);
  }

  onEscape() {
    if (this.sidebarMode() === 'overlay' && !this.sidebarCollapsed()) {
      this.collapse();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.sidebarResponsive() && this.sidebarMode() === 'overlay') {
      const width = window.innerWidth;
      // Auto-collapse on mobile
      if (width < 768 && !this.sidebarCollapsed()) {
        this.collapse();
      }
    }
  }
}

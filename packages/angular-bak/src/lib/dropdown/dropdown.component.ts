import {
  Component,
  Input,
  signal,
  computed,
  HostListener,
  ElementRef,
  ViewChild,
  ContentChild,
  Directive,
  AfterContentInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, icons } from 'lucide-angular';

// Trigger directive to identify the dropdown trigger element
@Directive({
  selector: '[gDropdownTrigger]',
  standalone: true,
})
export class DropdownTriggerDirective {}

// Dropdown item component
@Component({
  selector: 'g-dropdown-item',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      type="button"
      [class]="itemClasses()"
      [disabled]="itemDisabled()"
      (click)="handleClick()">
      @if (itemIcon()) {
        <lucide-angular [img]="itemIcon()!" class="w-4 h-4 shrink-0"></lucide-angular>
      }
      <span class="flex-1 text-left">
        <ng-content></ng-content>
      </span>
      @if (itemShortcut()) {
        <span class="text-xs opacity-60 ml-auto pl-4">{{ itemShortcut() }}</span>
      }
    </button>
  `,
})
export class DropdownItemComponent {
  @Input() set itemIcon(value: keyof typeof icons | null) {
    this._itemIcon.set(value);
  }
  @Input() set itemDisabled(value: boolean) {
    this._itemDisabled.set(value);
  }
  @Input() set itemDanger(value: boolean) {
    this._itemDanger.set(value);
  }
  @Input() set itemShortcut(value: string | null) {
    this._itemShortcut.set(value);
  }

  private _itemIcon = signal<keyof typeof icons | null>(null);
  private _itemDisabled = signal(false);
  private _itemDanger = signal(false);
  private _itemShortcut = signal<string | null>(null);

  itemIcon = this._itemIcon.asReadonly();
  itemDisabled = this._itemDisabled.asReadonly();
  itemDanger = this._itemDanger.asReadonly();
  itemShortcut = this._itemShortcut.asReadonly();

  // Inject parent dropdown to close on click
  private dropdown = inject(DropdownComponent, { optional: true });

  itemClasses = computed(() => {
    const base =
      'w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors rounded-md';
    const disabled = 'opacity-50 cursor-not-allowed';
    const enabled = this.itemDanger()
      ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 focus:bg-red-50 dark:focus:bg-red-950'
      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800';

    return `${base} ${this.itemDisabled() ? disabled : enabled}`;
  });

  handleClick() {
    if (!this.itemDisabled() && this.dropdown) {
      this.dropdown.close();
    }
  }
}

// Dropdown divider
@Component({
  selector: 'g-dropdown-divider',
  standalone: true,
  template: `<div class="h-px bg-slate-200 dark:bg-slate-700 my-1"></div>`,
})
export class DropdownDividerComponent {}

// Dropdown menu container
@Component({
  selector: 'g-dropdown-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="menuClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class DropdownMenuComponent {
  menuClasses = computed(() => {
    return [
      'min-w-[12rem] bg-white dark:bg-slate-900',
      'border border-slate-200 dark:border-slate-700',
      'rounded-lg shadow-lg p-1',
      'animate-in fade-in-0 zoom-in-95',
      'z-50',
    ].join(' ');
  });
}

// Main dropdown component
@Component({
  selector: 'g-dropdown',
  standalone: true,
  imports: [CommonModule],
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'close()',
  },
  template: `
    <div class="relative inline-block">
      <!-- Trigger -->
      <div
        #trigger
        (click)="toggle()"
        (mouseenter)="onTriggerHover()"
        (mouseleave)="onTriggerLeave()">
        <ng-content select="[gDropdownTrigger]"></ng-content>
      </div>

      <!-- Dropdown menu -->
      @if (isOpen()) {
        <div
          #menu
          [class]="dropdownClasses()"
          (mouseenter)="onMenuHover()"
          (mouseleave)="onMenuLeave()">
          <ng-content select="g-dropdown-menu"></ng-content>
        </div>
      }
    </div>
  `,
})
export class DropdownComponent implements AfterContentInit {
  @Input() set dropdownPosition(value: 'top' | 'bottom' | 'left' | 'right') {
    this._dropdownPosition.set(value);
  }
  @Input() set dropdownAlign(value: 'start' | 'center' | 'end') {
    this._dropdownAlign.set(value);
  }
  @Input() set dropdownTrigger(value: 'click' | 'hover') {
    this._dropdownTrigger.set(value);
  }
  @Input() set dropdownOffset(value: number) {
    this._dropdownOffset.set(value);
  }

  @ViewChild('trigger', { read: ElementRef }) triggerRef!: ElementRef;
  @ViewChild('menu', { read: ElementRef }) menuRef?: ElementRef;
  @ContentChild(DropdownTriggerDirective, { read: ElementRef })
  triggerContent?: ElementRef;

  private _dropdownPosition = signal<'top' | 'bottom' | 'left' | 'right'>(
    'bottom'
  );
  private _dropdownAlign = signal<'start' | 'center' | 'end'>('start');
  private _dropdownTrigger = signal<'click' | 'hover'>('click');
  private _dropdownOffset = signal(8);
  private _isOpen = signal(false);
  private _isHoveringTrigger = signal(false);
  private _isHoveringMenu = signal(false);
  private hoverTimeout?: number;

  dropdownPosition = this._dropdownPosition.asReadonly();
  dropdownAlign = this._dropdownAlign.asReadonly();
  dropdownTrigger = this._dropdownTrigger.asReadonly();
  dropdownOffset = this._dropdownOffset.asReadonly();
  isOpen = this._isOpen.asReadonly();

  ngAfterContentInit() {}

  dropdownClasses = computed(() => {
    const position = this.dropdownPosition();
    const align = this.dropdownAlign();
    const offset = this.dropdownOffset();

    let positionClasses = '';

    if (position === 'bottom') {
      positionClasses = `top-full mt-${offset > 4 ? '2' : '1'}`;
      if (align === 'start') positionClasses += ' left-0';
      else if (align === 'center') positionClasses += ' left-1/2 -translate-x-1/2';
      else positionClasses += ' right-0';
    } else if (position === 'top') {
      positionClasses = `bottom-full mb-${offset > 4 ? '2' : '1'}`;
      if (align === 'start') positionClasses += ' left-0';
      else if (align === 'center') positionClasses += ' left-1/2 -translate-x-1/2';
      else positionClasses += ' right-0';
    } else if (position === 'left') {
      positionClasses = `right-full mr-${offset > 4 ? '2' : '1'} top-0`;
    } else {
      // right
      positionClasses = `left-full ml-${offset > 4 ? '2' : '1'} top-0`;
    }

    return `absolute ${positionClasses}`;
  });

  toggle() {
    if (this.dropdownTrigger() === 'click') {
      this._isOpen.update((v) => !v);
    }
  }

  open() {
    this._isOpen.set(true);
  }

  close() {
    this._isOpen.set(false);
    this._isHoveringTrigger.set(false);
    this._isHoveringMenu.set(false);
  }

  onTriggerHover() {
    if (this.dropdownTrigger() === 'hover') {
      this._isHoveringTrigger.set(true);
      this.clearHoverTimeout();
      this.open();
    }
  }

  onTriggerLeave() {
    if (this.dropdownTrigger() === 'hover') {
      this._isHoveringTrigger.set(false);
      this.scheduleClose();
    }
  }

  onMenuHover() {
    if (this.dropdownTrigger() === 'hover') {
      this._isHoveringMenu.set(true);
      this.clearHoverTimeout();
    }
  }

  onMenuLeave() {
    if (this.dropdownTrigger() === 'hover') {
      this._isHoveringMenu.set(false);
      this.scheduleClose();
    }
  }

  private scheduleClose() {
    this.clearHoverTimeout();
    this.hoverTimeout = window.setTimeout(() => {
      if (!this._isHoveringTrigger() && !this._isHoveringMenu()) {
        this.close();
      }
    }, 150);
  }

  private clearHoverTimeout() {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = undefined;
    }
  }

  onDocumentClick(event: MouseEvent) {
    if (this.dropdownTrigger() === 'click' && this.isOpen()) {
      const trigger = this.triggerRef?.nativeElement;
      const menu = this.menuRef?.nativeElement;
      const target = event.target as Node;

      if (
        trigger &&
        !trigger.contains(target) &&
        menu &&
        !menu.contains(target)
      ) {
        this.close();
      }
    }
  }
}

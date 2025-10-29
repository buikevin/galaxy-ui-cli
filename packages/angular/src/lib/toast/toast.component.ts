import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, CheckCircle, XCircle, AlertCircle, Info } from 'lucide-angular';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPlacement = 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  closable?: boolean;
}

@Component({
  selector: 'g-toast-item',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      [class]="toastClasses()"
      role="alert"
      [class.animate-in]="true"
      [class.slide-in-from-top-2]="true"
    >
      <!-- Icon -->
      <div class="flex-shrink-0">
        <lucide-icon
          [img]="getIcon()"
          [size]="20"
          [class]="iconClasses()"
        ></lucide-icon>
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0">
        @if (toast().title) {
          <div class="font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
            {{ toast().title }}
          </div>
        }
        <div class="text-sm text-gray-700 dark:text-gray-300">
          {{ toast().message }}
        </div>
      </div>

      <!-- Close Button -->
      @if (toast().closable !== false) {
        <button
          (click)="handleClose()"
          class="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
          [attr.aria-label]="'Close'"
        >
          <lucide-icon [img]="XIcon" [size]="16"></lucide-icon>
        </button>
      }
    </div>
  `,
})
export class ToastItemComponent {
  readonly XIcon = X;
  readonly CheckCircle = CheckCircle;
  readonly XCircle = XCircle;
  readonly AlertCircle = AlertCircle;
  readonly InfoIcon = Info;

  toast = input.required<ToastMessage>();
  close = output<string>();

  toastClasses = computed(() => {
    const classes = [
      'g-toast-item',
      'flex items-start gap-3',
      'px-4 py-3',
      'rounded-lg',
      'shadow-lg',
      'border',
      'mb-3',
      'min-w-[320px] max-w-md',
    ];

    const type = this.toast().type;

    const typeClasses = {
      success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
      error: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
      warning: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
      info: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
    };

    classes.push(typeClasses[type]);

    return classes.join(' ');
  });

  iconClasses = computed(() => {
    const type = this.toast().type;

    const typeClasses = {
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
      warning: 'text-amber-600 dark:text-amber-400',
      info: 'text-blue-600 dark:text-blue-400',
    };

    return typeClasses[type];
  });

  getIcon() {
    const icons = {
      success: this.CheckCircle,
      error: this.XCircle,
      warning: this.AlertCircle,
      info: this.InfoIcon,
    };
    return icons[this.toast().type];
  }

  handleClose(): void {
    this.close.emit(this.toast().id);
  }
}

@Component({
  selector: 'g-toast-container',
  standalone: true,
  imports: [CommonModule, ToastItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="containerClasses()">
      @for (toast of toasts(); track toast.id) {
        <g-toast-item
          [toast]="toast"
          (close)="removeToast($event)"
        ></g-toast-item>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class ToastContainerComponent {
  placement = input<ToastPlacement>('top-right');
  toasts = signal<ToastMessage[]>([]);

  containerClasses = computed(() => {
    const classes = ['g-toast-container', 'fixed z-[100] flex flex-col'];

    const placement = this.placement();

    const placementClasses = {
      'top': 'top-4 left-1/2 -translate-x-1/2',
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'bottom': 'bottom-4 left-1/2 -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
    };

    classes.push(placementClasses[placement]);

    return classes.join(' ');
  });

  addToast(toast: Omit<ToastMessage, 'id'>): string {
    const id = Math.random().toString(36).substring(7);
    const newToast: ToastMessage = {
      id,
      ...toast,
    };

    this.toasts.update(toasts => [...toasts, newToast]);

    // Auto remove after duration
    if (toast.duration !== 0) {
      const duration = toast.duration || 3000;
      setTimeout(() => {
        this.removeToast(id);
      }, duration);
    }

    return id;
  }

  removeToast(id: string): void {
    this.toasts.update(toasts => toasts.filter(t => t.id !== id));
  }

  clearAll(): void {
    this.toasts.set([]);
  }
}

// Service for managing toasts globally
import { Injectable, signal as createSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts = createSignal<ToastMessage[]>([]);
  private placement = createSignal<ToastPlacement>('top-right');

  getToasts() {
    return this.toasts;
  }

  getPlacement() {
    return this.placement;
  }

  setPlacement(placement: ToastPlacement): void {
    this.placement.set(placement);
  }

  success(message: string, title?: string, duration?: number): string {
    return this.addToast({ type: 'success', message, title, duration });
  }

  error(message: string, title?: string, duration?: number): string {
    return this.addToast({ type: 'error', message, title, duration });
  }

  warning(message: string, title?: string, duration?: number): string {
    return this.addToast({ type: 'warning', message, title, duration });
  }

  info(message: string, title?: string, duration?: number): string {
    return this.addToast({ type: 'info', message, title, duration });
  }

  private addToast(toast: Omit<ToastMessage, 'id'>): string {
    const id = Math.random().toString(36).substring(7);
    const newToast: ToastMessage = {
      id,
      closable: true,
      ...toast,
    };

    this.toasts.update(toasts => [...toasts, newToast]);

    // Auto remove after duration
    if (toast.duration !== 0) {
      const duration = toast.duration || 3000;
      setTimeout(() => {
        this.removeToast(id);
      }, duration);
    }

    return id;
  }

  removeToast(id: string): void {
    this.toasts.update(toasts => toasts.filter(t => t.id !== id));
  }

  clearAll(): void {
    this.toasts.set([]);
  }
}

// Root component for use in app template
@Component({
  selector: 'g-toast',
  standalone: true,
  imports: [CommonModule, ToastContainerComponent, ToastItemComponent],
  template: `
    <div [class]="containerClasses()">
      @for (toast of toastService.getToasts()(); track toast.id) {
        <g-toast-item
          [toast]="toast"
          (close)="toastService.removeToast($event)"
        ></g-toast-item>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  containerClasses = computed(() => {
    const classes = ['g-toast-container', 'fixed z-[100] flex flex-col'];

    const placement = this.toastService.getPlacement()();

    const placementClasses = {
      'top': 'top-4 left-1/2 -translate-x-1/2',
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'bottom': 'bottom-4 left-1/2 -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
    };

    classes.push(placementClasses[placement]);

    return classes.join(' ');
  });
}

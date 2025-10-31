import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
  contentChildren,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

export type CarouselDotPosition = 'top' | 'bottom' | 'left' | 'right';
export type CarouselEffect = 'scroll' | 'fade';

@Component({
  selector: 'g-carousel-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="g-carousel-item w-full h-full flex-shrink-0">
      <ng-content></ng-content>
    </div>
  `,
})
export class CarouselItemComponent {}

@Component({
  selector: 'g-carousel',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, CarouselItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="wrapperClasses()">
      <!-- Carousel container -->
      <div class="g-carousel-container relative overflow-hidden" #containerRef>
        <!-- Slides wrapper -->
        <div
          [class]="slidesWrapperClasses()"
          [style.transform]="slideTransform()"
        >
          <ng-content></ng-content>
        </div>

        <!-- Navigation arrows -->
        @if (arrows()) {
          <button
            (click)="prev()"
            [class]="arrowClasses('left')"
            [disabled]="currentIndex() === 0 && !infinite()"
            [attr.aria-label]="'Previous slide'"
          >
            <lucide-icon [img]="ChevronLeft" [size]="24" class="text-current"></lucide-icon>
          </button>

          <button
            (click)="next()"
            [class]="arrowClasses('right')"
            [disabled]="currentIndex() === itemCount() - 1 && !infinite()"
            [attr.aria-label]="'Next slide'"
          >
            <lucide-icon [img]="ChevronRight" [size]="24" class="text-current"></lucide-icon>
          </button>
        }
      </div>

      <!-- Dots indicator -->
      @if (dots()) {
        <div [class]="dotsClasses()">
          @for (item of getItems(); track $index) {
            <button
              (click)="goTo($index)"
              [class]="dotClasses($index)"
              [attr.aria-label]="'Go to slide ' + ($index + 1)"
            ></button>
          }
        </div>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      @keyframes carousel-fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `,
  ],
})
export class CarouselComponent {
  // Icons
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  // Content children
  items = contentChildren(CarouselItemComponent);

  // Inputs
  autoplay = input(false);
  autoplaySpeed = input(3000);
  dots = input(true);
  dotPosition = input<CarouselDotPosition>('bottom');
  arrows = input(true);
  infinite = input(true);
  effect = input<CarouselEffect>('scroll');
  initialSlide = input(0);

  // Outputs
  beforeChange = output<{ from: number; to: number }>();
  afterChange = output<number>();

  // State
  currentIndex = signal(0);
  private autoplayInterval: any = null;

  constructor() {
    // Set initial slide
    effect(() => {
      this.currentIndex.set(this.initialSlide());
    });

    // Setup autoplay
    effect(() => {
      if (this.autoplay()) {
        this.startAutoplay();
      } else {
        this.stopAutoplay();
      }
    });
  }

  itemCount = computed(() => this.items().length);

  wrapperClasses = computed(() => {
    return 'g-carousel w-full';
  });

  slidesWrapperClasses = computed(() => {
    const classes = ['g-carousel-slides', 'flex'];

    if (this.effect() === 'scroll') {
      classes.push('transition-transform duration-500 ease-in-out');
    }

    return classes.join(' ');
  });

  slideTransform = computed(() => {
    if (this.effect() === 'fade') {
      return 'translateX(0)';
    }

    const index = this.currentIndex();
    return `translateX(-${index * 100}%)`;
  });

  arrowClasses = computed(() => {
    return (position: 'left' | 'right') => {
      const classes = [
        'absolute top-1/2 -translate-y-1/2 z-10',
        'w-10 h-10',
        'flex items-center justify-center',
        'bg-white/80 dark:bg-gray-800/80',
        'text-gray-700 dark:text-gray-300',
        'rounded-full',
        'hover:bg-white dark:hover:bg-gray-800',
        'transition-all',
        'disabled:opacity-30 disabled:cursor-not-allowed',
        'shadow-lg',
      ];

      if (position === 'left') {
        classes.push('left-4');
      } else {
        classes.push('right-4');
      }

      return classes.join(' ');
    };
  });

  dotsClasses = computed(() => {
    const classes = ['g-carousel-dots', 'flex items-center justify-center gap-2'];

    const position = this.dotPosition();

    const positionClasses = {
      top: 'mt-4',
      bottom: 'mt-4',
      left: 'flex-col ml-4',
      right: 'flex-col mr-4',
    };

    classes.push(positionClasses[position]);

    return classes.join(' ');
  });

  dotClasses = computed(() => {
    return (index: number) => {
      const classes = [
        'g-carousel-dot',
        'transition-all',
        'rounded-full',
        'cursor-pointer',
      ];

      if (index === this.currentIndex()) {
        classes.push('w-6 h-2 bg-blue-600');
      } else {
        classes.push('w-2 h-2 bg-gray-400 hover:bg-gray-500');
      }

      return classes.join(' ');
    };
  });

  getItems(): number[] {
    return Array.from({ length: this.itemCount() }, (_, i) => i);
  }

  next(): void {
    const current = this.currentIndex();
    const total = this.itemCount();

    let nextIndex: number;

    if (current === total - 1) {
      nextIndex = this.infinite() ? 0 : current;
    } else {
      nextIndex = current + 1;
    }

    this.goTo(nextIndex);
  }

  prev(): void {
    const current = this.currentIndex();
    const total = this.itemCount();

    let prevIndex: number;

    if (current === 0) {
      prevIndex = this.infinite() ? total - 1 : current;
    } else {
      prevIndex = current - 1;
    }

    this.goTo(prevIndex);
  }

  goTo(index: number): void {
    if (index === this.currentIndex()) return;

    this.beforeChange.emit({
      from: this.currentIndex(),
      to: index,
    });

    this.currentIndex.set(index);
    this.afterChange.emit(index);

    // Reset autoplay timer
    if (this.autoplay()) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.autoplaySpeed());
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }
}

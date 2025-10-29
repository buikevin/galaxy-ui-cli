import {
  Component,
  input,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronRight, ChevronDown, Folder, FolderOpen, File } from 'lucide-angular';

export interface TreeNode {
  key: string;
  title: string;
  icon?: string;
  children?: TreeNode[];
  disabled?: boolean;
  isLeaf?: boolean;
  [key: string]: any;
}

export type TreeSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'g-tree',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="wrapperClasses()">
      @if (loading()) {
        <div class="flex items-center justify-center py-8 text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            <span>Loading...</span>
          </div>
        </div>
      } @else if (treeData().length === 0) {
        <div class="text-center py-8 text-gray-500 dark:text-gray-400">
          {{ emptyText() }}
        </div>
      } @else {
        <div class="g-tree-content">
          @for (node of treeData(); track node.key) {
            <ng-container [ngTemplateOutlet]="treeNodeTemplate" [ngTemplateOutletContext]="{ node: node, level: 0 }"></ng-container>
          }
        </div>
      }
    </div>

    <!-- Tree Node Template -->
    <ng-template #treeNodeTemplate let-node="node" let-level="level">
      <div [class]="nodeWrapperClasses()">
        <!-- Node Content -->
        <div
          [class]="nodeClasses(node)"
          [style.paddingLeft.px]="level * indentSize()"
          (click)="handleNodeClick(node)"
        >
          <!-- Expand/Collapse Icon -->
          <div class="g-tree-node-switcher flex-shrink-0" [style.width.px]="iconSize() + 8">
            @if (!node.isLeaf && node.children && node.children.length > 0) {
              <button
                (click)="toggleExpand(node); $event.stopPropagation()"
                class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <lucide-icon
                  [img]="isExpanded(node) ? ChevronDown : ChevronRight"
                  [size]="iconSize()"
                  class="text-gray-600 dark:text-gray-400"
                ></lucide-icon>
              </button>
            }
          </div>

          <!-- Checkbox -->
          @if (checkable()) {
            <div class="g-tree-node-checkbox flex-shrink-0 mr-2">
              <input
                type="checkbox"
                [checked]="isChecked(node)"
                [indeterminate]="isIndeterminate(node)"
                [disabled]="node.disabled"
                (change)="toggleCheck(node)"
                (click)="$event.stopPropagation()"
                class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          }

          <!-- Node Icon -->
          <div class="g-tree-node-icon flex-shrink-0 mr-2">
            @if (showIcon()) {
              @if (node.icon) {
                <span class="text-gray-600 dark:text-gray-400">{{ node.icon }}</span>
              } @else if (!node.isLeaf && node.children) {
                <lucide-icon
                  [img]="isExpanded(node) ? FolderOpen : Folder"
                  [size]="iconSize()"
                  class="text-amber-500 dark:text-amber-400"
                ></lucide-icon>
              } @else {
                <lucide-icon
                  [img]="FileIcon"
                  [size]="iconSize()"
                  class="text-gray-500 dark:text-gray-400"
                ></lucide-icon>
              }
            }
          </div>

          <!-- Node Title -->
          <div class="g-tree-node-title flex-1 min-w-0">
            <span [class]="titleClasses(node)">
              {{ node.title }}
            </span>
          </div>

          <!-- Selection Indicator -->
          @if (isSelected(node)) {
            <div class="g-tree-node-selected-indicator flex-shrink-0 ml-2">
              <div class="w-1 h-4 bg-blue-600 rounded"></div>
            </div>
          }
        </div>

        <!-- Children -->
        @if (!node.isLeaf && node.children && node.children.length > 0 && isExpanded(node)) {
          <div class="g-tree-node-children">
            @for (child of node.children; track child.key) {
              <ng-container [ngTemplateOutlet]="treeNodeTemplate" [ngTemplateOutletContext]="{ node: child, level: level + 1 }"></ng-container>
            }
          </div>
        }
      </div>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class TreeComponent {
  // Icons
  readonly ChevronRight = ChevronRight;
  readonly ChevronDown = ChevronDown;
  readonly Folder = Folder;
  readonly FolderOpen = FolderOpen;
  readonly FileIcon = File;

  // Inputs
  treeData = input<TreeNode[]>([]);
  size = input<TreeSize>('medium');
  checkable = input(false);
  selectable = input(true);
  showIcon = input(true);
  defaultExpandAll = input(false);
  defaultExpandedKeys = input<string[]>([]);
  defaultCheckedKeys = input<string[]>([]);
  defaultSelectedKeys = input<string[]>([]);
  loading = input(false);
  emptyText = input('No data');
  indentSize = input(24);

  // Outputs
  nodeClick = output<TreeNode>();
  nodeExpand = output<{ node: TreeNode; expanded: boolean }>();
  check = output<{ checked: string[]; node: TreeNode }>();
  select = output<{ selected: string[]; node: TreeNode }>();

  // State
  expandedKeys = signal<Set<string>>(new Set());
  checkedKeys = signal<Set<string>>(new Set());
  selectedKeys = signal<Set<string>>(new Set());

  constructor() {
    // Initialize expanded keys
    if (this.defaultExpandAll()) {
      const allKeys = this.getAllKeys(this.treeData());
      this.expandedKeys.set(new Set(allKeys));
    } else if (this.defaultExpandedKeys().length > 0) {
      this.expandedKeys.set(new Set(this.defaultExpandedKeys()));
    }

    // Initialize checked keys
    if (this.defaultCheckedKeys().length > 0) {
      this.checkedKeys.set(new Set(this.defaultCheckedKeys()));
    }

    // Initialize selected keys
    if (this.defaultSelectedKeys().length > 0) {
      this.selectedKeys.set(new Set(this.defaultSelectedKeys()));
    }
  }

  wrapperClasses = computed(() => {
    return 'g-tree bg-white dark:bg-gray-900';
  });

  nodeWrapperClasses = computed(() => {
    return 'g-tree-node-wrapper';
  });

  nodeClasses = computed(() => {
    return (node: TreeNode) => {
      const classes = [
        'g-tree-node',
        'flex items-center',
        'transition-colors',
      ];

      const sizeClasses = {
        small: 'py-1 text-sm',
        medium: 'py-2 text-base',
        large: 'py-3 text-lg',
      };

      classes.push(sizeClasses[this.size()]);

      if (this.selectable() && !node.disabled) {
        classes.push('cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800');
      }

      if (this.isSelected(node)) {
        classes.push('bg-blue-50 dark:bg-blue-900/20');
      }

      if (node.disabled) {
        classes.push('opacity-50 cursor-not-allowed');
      }

      return classes.join(' ');
    };
  });

  titleClasses = computed(() => {
    return (node: TreeNode) => {
      const classes = ['truncate'];

      if (this.isSelected(node)) {
        classes.push('font-medium text-blue-600 dark:text-blue-400');
      } else {
        classes.push('text-gray-900 dark:text-gray-100');
      }

      return classes.join(' ');
    };
  });

  iconSize = computed(() => {
    const sizes = {
      small: 14,
      medium: 16,
      large: 18,
    };
    return sizes[this.size()];
  });

  isExpanded(node: TreeNode): boolean {
    return this.expandedKeys().has(node.key);
  }

  isChecked(node: TreeNode): boolean {
    return this.checkedKeys().has(node.key);
  }

  isSelected(node: TreeNode): boolean {
    return this.selectedKeys().has(node.key);
  }

  isIndeterminate(node: TreeNode): boolean {
    if (!node.children || node.children.length === 0) return false;

    const childKeys = this.getAllChildKeys(node);
    const checkedCount = childKeys.filter(key => this.checkedKeys().has(key)).length;

    return checkedCount > 0 && checkedCount < childKeys.length;
  }

  toggleExpand(node: TreeNode): void {
    const expanded = new Set(this.expandedKeys());

    if (expanded.has(node.key)) {
      expanded.delete(node.key);
    } else {
      expanded.add(node.key);
    }

    this.expandedKeys.set(expanded);
    this.nodeExpand.emit({ node, expanded: expanded.has(node.key) });
  }

  toggleCheck(node: TreeNode): void {
    const checked = new Set(this.checkedKeys());

    if (checked.has(node.key)) {
      // Uncheck node and all children
      checked.delete(node.key);
      const childKeys = this.getAllChildKeys(node);
      childKeys.forEach(key => checked.delete(key));
    } else {
      // Check node and all children
      checked.add(node.key);
      const childKeys = this.getAllChildKeys(node);
      childKeys.forEach(key => checked.add(key));
    }

    this.checkedKeys.set(checked);
    this.check.emit({ checked: Array.from(checked), node });
  }

  handleNodeClick(node: TreeNode): void {
    if (node.disabled) return;

    if (this.selectable()) {
      const selected = new Set(this.selectedKeys());
      selected.clear();
      selected.add(node.key);
      this.selectedKeys.set(selected);
      this.select.emit({ selected: Array.from(selected), node });
    }

    this.nodeClick.emit(node);
  }

  getAllKeys(nodes: TreeNode[]): string[] {
    const keys: string[] = [];

    const traverse = (nodes: TreeNode[]) => {
      nodes.forEach(node => {
        keys.push(node.key);
        if (node.children) {
          traverse(node.children);
        }
      });
    };

    traverse(nodes);
    return keys;
  }

  getAllChildKeys(node: TreeNode): string[] {
    const keys: string[] = [];

    const traverse = (nodes: TreeNode[]) => {
      nodes.forEach(child => {
        keys.push(child.key);
        if (child.children) {
          traverse(child.children);
        }
      });
    };

    if (node.children) {
      traverse(node.children);
    }

    return keys;
  }
}

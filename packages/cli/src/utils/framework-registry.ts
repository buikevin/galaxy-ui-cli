import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Framework } from './config-schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface FrameworkComponent {
  name: string;
  type: 'form' | 'layout' | 'navigation' | 'feedback' | 'data-display' | 'modal-overlay' | 'other';
  description: string;
  files: string[];
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
  category: string;
}

export interface FrameworkComponentGroup {
  name: string;
  components: string[];
}

export interface FrameworkRegistry {
  name: string;
  components: Record<string, FrameworkComponent>;
  groups: Record<string, FrameworkComponentGroup>;
}

// Cache registries by framework
const registryCache: Map<Framework, FrameworkRegistry> = new Map();

/**
 * Load framework-specific registry
 */
export function loadFrameworkRegistry(framework: Framework): FrameworkRegistry {
  // Check cache first
  if (registryCache.has(framework)) {
    return registryCache.get(framework)!;
  }

  const registryPath = resolve(__dirname, `../registries/registry-${framework}.json`);

  if (!existsSync(registryPath)) {
    throw new Error(
      `Registry not found for framework: ${framework}. Expected at ${registryPath}`
    );
  }

  try {
    const registryContent = readFileSync(registryPath, 'utf-8');
    const registry: FrameworkRegistry = JSON.parse(registryContent);

    // Cache the registry
    registryCache.set(framework, registry);

    return registry;
  } catch (error) {
    throw new Error(`Failed to load registry for ${framework}: ${error}`);
  }
}

/**
 * Get a component by name from framework registry
 */
export function getFrameworkComponent(
  framework: Framework,
  name: string
): FrameworkComponent | undefined {
  const registry = loadFrameworkRegistry(framework);
  return registry.components[name];
}

/**
 * Get all components from framework registry
 */
export function getAllFrameworkComponents(
  framework: Framework
): Record<string, FrameworkComponent> {
  const registry = loadFrameworkRegistry(framework);
  return registry.components;
}

/**
 * Get components by type from framework registry
 */
export function getFrameworkComponentsByType(
  framework: Framework,
  type: FrameworkComponent['type']
): FrameworkComponent[] {
  const registry = loadFrameworkRegistry(framework);
  return Object.values(registry.components).filter((c) => c.type === type);
}

/**
 * Get components by group name from framework registry
 */
export function getFrameworkComponentsByGroup(
  framework: Framework,
  groupName: string
): FrameworkComponent[] {
  const registry = loadFrameworkRegistry(framework);
  const group = registry.groups[groupName];

  if (!group) {
    return [];
  }

  return group.components
    .map((name) => registry.components[name])
    .filter(Boolean);
}

/**
 * Get all component groups from framework registry
 */
export function getAllFrameworkGroups(
  framework: Framework
): Record<string, FrameworkComponentGroup> {
  const registry = loadFrameworkRegistry(framework);
  return registry.groups;
}

/**
 * Check if a component exists in framework registry
 */
export function frameworkComponentExists(
  framework: Framework,
  name: string
): boolean {
  const registry = loadFrameworkRegistry(framework);
  return !!registry.components[name];
}

/**
 * Get component dependencies (including registry dependencies)
 */
export function getFrameworkComponentDependencies(
  framework: Framework,
  name: string
): {
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
} {
  const component = getFrameworkComponent(framework, name);

  if (!component) {
    return {
      dependencies: [],
      devDependencies: [],
      registryDependencies: [],
    };
  }

  return {
    dependencies: component.dependencies || [],
    devDependencies: component.devDependencies || [],
    registryDependencies: component.registryDependencies || [],
  };
}

/**
 * Resolve component name with aliases (case-insensitive match)
 */
export function resolveFrameworkComponentName(
  framework: Framework,
  input: string
): string | null {
  const registry = loadFrameworkRegistry(framework);

  // Check exact match
  if (registry.components[input]) {
    return input;
  }

  // Check group match
  if (registry.groups[input]) {
    return input;
  }

  // Check case-insensitive match
  const lowerInput = input.toLowerCase();
  for (const name of Object.keys(registry.components)) {
    if (name.toLowerCase() === lowerInput) {
      return name;
    }
  }

  return null;
}

/**
 * Clear registry cache (useful for testing)
 */
export function clearRegistryCache(): void {
  registryCache.clear();
}

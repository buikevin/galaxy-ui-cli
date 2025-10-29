import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

export type Framework = 'angular' | 'react' | 'vue' | 'unknown';
export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

/**
 * Detect the framework being used in the project
 */
export function detectFramework(cwd: string): Framework {
  const packageJsonPath = resolve(cwd, 'package.json');

  if (!existsSync(packageJsonPath)) {
    return 'unknown';
  }

  try {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const deps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    if (deps['@angular/core']) {
      return 'angular';
    }
    if (deps['react']) {
      return 'react';
    }
    if (deps['vue']) {
      return 'vue';
    }

    return 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Detect the package manager being used
 */
export function detectPackageManager(cwd: string): PackageManager {
  if (existsSync(resolve(cwd, 'bun.lockb'))) {
    return 'bun';
  }
  if (existsSync(resolve(cwd, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }
  if (existsSync(resolve(cwd, 'yarn.lock'))) {
    return 'yarn';
  }
  return 'npm';
}

/**
 * Check if project is already initialized with Galaxy UI
 */
export function isGalaxyInitialized(cwd: string): boolean {
  const packageJsonPath = resolve(cwd, 'package.json');

  if (!existsSync(packageJsonPath)) {
    return false;
  }

  try {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const deps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    return !!(deps['lucide-angular'] && deps['clsx'] && deps['tailwind-merge']);
  } catch {
    return false;
  }
}

/**
 * Check if Tailwind CSS is installed
 */
export function isTailwindInstalled(cwd: string): boolean {
  const packageJsonPath = resolve(cwd, 'package.json');

  if (!existsSync(packageJsonPath)) {
    return false;
  }

  try {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const deps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    return !!deps['tailwindcss'];
  } catch {
    return false;
  }
}

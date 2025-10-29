import prompts from 'prompts';
import chalk from 'chalk';
import ora from 'ora';
import { resolve, join } from 'path';
import { existsSync } from 'fs';
import { loadConfig, configExists } from '../utils/config.js';
import {
  getAllComponents,
  getComponent,
  getAllGroups,
  getComponentsByGroup,
  resolveComponentName,
  componentExists as registryComponentExists,
} from '../utils/registry.js';
import { writeFile, fileExists, readFile, ensureDir } from '../utils/files.js';

interface AddOptions {
  all?: boolean;
  cwd: string;
}

export async function addCommand(components: string[], options: AddOptions) {
  const cwd = options.cwd;

  // Check if Galaxy UI is initialized
  if (!(await configExists(cwd))) {
    console.log(chalk.red('❌ Galaxy UI is not initialized in this project.'));
    console.log(chalk.gray('Run') + chalk.cyan(' galaxy init ') + chalk.gray('first.'));
    return;
  }

  // Load configuration
  const config = await loadConfig(cwd);
  if (!config) {
    console.log(chalk.red('❌ Failed to load Galaxy UI configuration.'));
    return;
  }

  // Determine which components to add
  let componentsToAdd: string[] = [];

  if (options.all) {
    // Add all components
    const allComponents = getAllComponents();
    componentsToAdd = Object.keys(allComponents);
  } else if (components.length === 0) {
    // Interactive mode
    const groups = getAllGroups();
    const choices = [];

    // Create choices organized by groups
    for (const [groupKey, group] of Object.entries(groups)) {
      choices.push({
        title: chalk.bold.cyan(group.name),
        value: `group:${groupKey}`,
        disabled: true,
      });

      const groupComponents = getComponentsByGroup(groupKey);
      for (const component of groupComponents) {
        choices.push({
          title: `  ${component.name}`,
          description: component.description,
          value: component.selector,
        });
      }
    }

    const response = await prompts({
      type: 'multiselect',
      name: 'components',
      message: 'Which components would you like to add?',
      choices,
      hint: '- Space to select. Return to submit',
    });

    if (!response.components || response.components.length === 0) {
      console.log(chalk.gray('No components selected.'));
      return;
    }

    componentsToAdd = response.components;
  } else {
    // Add specified components
    for (const input of components) {
      const resolved = resolveComponentName(input);

      if (!resolved) {
        console.log(chalk.yellow(`⚠ Component "${input}" not found. Skipping.`));
        continue;
      }

      // Check if it's a group
      const groups = getAllGroups();
      if (groups[resolved]) {
        const groupComponents = getComponentsByGroup(resolved);
        componentsToAdd.push(...groupComponents.map(c => Object.keys(getAllComponents()).find(key => getAllComponents()[key].selector === c.selector)!));
      } else {
        componentsToAdd.push(resolved);
      }
    }
  }

  if (componentsToAdd.length === 0) {
    console.log(chalk.yellow('No valid components to add.'));
    return;
  }

  // Remove duplicates
  componentsToAdd = [...new Set(componentsToAdd)];

  console.log(chalk.bold.cyan(`\n📦 Adding ${componentsToAdd.length} component(s)...\n`));

  // Get the path to the source components
  const sourceComponentsPath = resolve(
    cwd,
    'packages/angular/src/lib'
  );

  // Alternative: use node_modules if published
  // const sourceComponentsPath = resolve(cwd, 'node_modules/@galaxy-ui-cli/angular/src/lib');

  // Check if source path exists
  if (!existsSync(sourceComponentsPath)) {
    console.log(
      chalk.red(
        '❌ Could not find Galaxy UI source components. Make sure the package is installed.'
      )
    );
    return;
  }

  // Add each component
  const results: { name: string; success: boolean; path?: string; error?: string }[] = [];

  for (const componentKey of componentsToAdd) {
    const component = getComponent(componentKey);

    if (!component) {
      results.push({
        name: componentKey,
        success: false,
        error: 'Component not found in registry',
      });
      continue;
    }

    const spinner = ora(`Adding ${chalk.cyan(component.name)}...`).start();

    try {
      // Determine destination path
      const destPath = resolve(cwd, config.componentsPath);
      ensureDir(destPath);

      // Copy component files
      for (const file of component.files) {
        const sourcePath = join(sourceComponentsPath, file);
        const fileName = file.split('/').pop()!;
        const destFilePath = join(destPath, fileName);

        if (!existsSync(sourcePath)) {
          throw new Error(`Source file not found: ${sourcePath}`);
        }

        // Check if file already exists
        if (fileExists(destFilePath)) {
          spinner.warn(
            `${chalk.cyan(component.name)} - File already exists: ${fileName}`
          );
          results.push({
            name: component.name,
            success: true,
            path: destFilePath,
          });
          continue;
        }

        // Read source file
        const content = readFile(sourcePath);

        // Write to destination
        writeFile(destFilePath, content);

        spinner.succeed(
          `${chalk.green('✓')} Added ${chalk.cyan(component.name)} to ${chalk.gray(
            config.componentsPath + '/' + fileName
          )}`
        );

        results.push({
          name: component.name,
          success: true,
          path: destFilePath,
        });
      }
    } catch (error) {
      spinner.fail(`Failed to add ${chalk.cyan(component.name)}`);
      results.push({
        name: component.name,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log('\n');

  if (successful > 0) {
    console.log(
      chalk.green.bold(`✓ Successfully added ${successful} component(s)`)
    );
  }

  if (failed > 0) {
    console.log(chalk.red.bold(`✗ Failed to add ${failed} component(s)`));
    for (const result of results.filter(r => !r.success)) {
      console.log(chalk.red(`  - ${result.name}: ${result.error}`));
    }
  }

  // Next steps
  if (successful > 0) {
    console.log('\n' + chalk.gray('Next steps:'));
    console.log(chalk.gray('  1. Import the components in your Angular module or component'));
    console.log(chalk.gray('  2. Use them in your templates'));
    console.log(chalk.gray('  3. Enjoy building with Galaxy UI! 🚀\n'));
  }
}

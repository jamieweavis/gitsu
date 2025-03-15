#!/usr/bin/env node

import chalk from 'chalk';
import { program } from 'commander';

import { version } from '../package.json';
import edit from './commands/edit';
import init from './commands/init';
import list from './commands/list';

const bootstrap = () => {
  program.description(
    `Util for quickly & easily switching git users from a config stored at ${chalk.cyan(
      '~/.gitsurc',
    )}`,
  );
  program.version(version);
  program.option(
    '-e, --edit',
    'edit the configured list of git users with your preferred EDITOR',
  );
  program.option(
    '-l, --list',
    'list the current user and configured gitsu users',
  );
  program.parse();

  const options = program.opts();
  if (options.list) return list();
  if (options.edit) return edit();

  return init();
};

bootstrap();

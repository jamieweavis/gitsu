#!/usr/bin/env node

import { program } from 'commander';

import { description, version } from '../package.json';
import edit from './commands/edit';
import init from './commands/init';
import list from './commands/list';

const bootstrap = () => {
  program.description(description);
  program.version(version);
  program.option('-e, --edit', 'edit ~/.gitsurc with your EDITOR');
  program.option('-l, --list', 'list users stored in ~/.gitsurc');
  program.parse();

  const options = program.opts();
  if (options.list) return list();
  if (options.edit) return edit();

  return init();
};

bootstrap();

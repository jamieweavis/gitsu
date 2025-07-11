import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

import { parseChoice } from '../utils/choice';
import getConfig from '../utils/get-config';
import getCurrentChoice from './get-current-choice';

export default async (): Promise<boolean> => {
  try {
    await getConfig();

    return true;
  } catch (_e) {
    try {
      const currentChoice = await getCurrentChoice();
      const user = parseChoice(currentChoice);
      const configPath = path.join(os.homedir(), '/', '.gitsurc');

      fs.writeFileSync(
        configPath,
        JSON.stringify([
          {
            name: user.name,
            email: user.email,
          },
        ]),
      );

      console.info(
        `${logSymbols.info} Created initial ${chalk.cyan(
          '~/.gitsurc',
        )} with user ${chalk.cyan(currentChoice)}`,
      );

      return true;
    } catch (error) {
      console.error(
        `${logSymbols.error} ${chalk.red(
          'Failed to create ~/.gitsurc config file',
        )}`,
        error,
      );
      return false;
    }
  }
};

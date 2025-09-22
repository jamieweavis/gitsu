import chalk from 'chalk';
import logSymbols from 'log-symbols';

import getCurrentChoice from '../functions/get-current-choice';
import type { IUser } from '../types';
import { formatChoice } from '../utils/choice';
import getConfig from '../utils/get-config';

export default async () => {
  try {
    const configResult = await getConfig();
    const users = configResult.config;
    const currentChoice = await getCurrentChoice();

    users.forEach((user: IUser) => {
      if (currentChoice === formatChoice(user)) {
        console.log(`${logSymbols.success} ${formatChoice(user)}`);
      } else {
        console.log(`  ${chalk.grey(formatChoice(user))}`);
      }
    });
  } catch (error) {
    console.log(
      `${logSymbols.error} ${chalk.red(
        'Failed to list configured gitsu users',
      )}`,
      error,
    );
  }
};

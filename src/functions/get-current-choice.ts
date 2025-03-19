import child_process from 'node:child_process';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

import { formatChoice } from '../utils/choice';

export default async (): Promise<string> => {
  try {
    const gitUserEmail = await child_process.execSync('git config user.email');
    const email = gitUserEmail.toString().trim();

    const gitUserName = await child_process.execSync('git config user.name');
    const name = gitUserName.toString().trim();

    return formatChoice({ name, email });
  } catch (error) {
    console.error(
      `${logSymbols.error} ${chalk.red('Failed to fetch current git identity')}`,
      error,
    );
    return '';
  }
};

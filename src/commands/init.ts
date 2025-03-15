import chalk from 'chalk';
import inquirer from 'inquirer';
import logSymbols from 'log-symbols';

import bootstrapConfig from '../functions/bootstrap-config';
import getCurrentChoice from '../functions/get-current-choice';
import saveGitConfig from '../functions/save-git-config';
import type { IUser } from '../types';
import { defaultChoice, formatChoice, parseChoice } from '../utils/choice';
import getConfig from '../utils/get-config';

export default async () => {
  // Ensure ~/.gitsurc config exists
  await bootstrapConfig();

  // Fetch configured gitsu users from config
  const configResult = await getConfig();
  const users = configResult.config;

  // Prompt for new user defaulting to the next choice in the list (maybe in the future we can sort by most recently used)
  let answers: { user: string } | undefined;
  try {
    const currentChoice = await getCurrentChoice();
    answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'user',
        message: 'Which user would you like to use?',
        choices: () => users.map((user: IUser) => formatChoice(user)),
        default: defaultChoice(users, currentChoice || users[0]),
      },
    ]);
  } catch (error) {
    console.log(`\n${logSymbols.error} ${chalk.red('Switch aborted by user')}`);
  }

  // Save new user to git config
  try {
    if (!answers) {
      return;
    }
    const user = parseChoice(answers.user);
    const saved = await saveGitConfig(user);
    if (!saved) {
      throw new Error('Failed to save git config');
    }

    console.log(
      `${logSymbols.success} Switched to user ${chalk.cyan(
        formatChoice(user),
      )}`,
    );
  } catch (error) {
    console.log(
      `${logSymbols.error} ${chalk.red('Failed to switch user')}`,
      error,
    );
  }
};

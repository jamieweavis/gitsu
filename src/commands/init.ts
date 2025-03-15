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

  // Prompt for new user, defaulting to the next choice in the list
  const currentChoice = await getCurrentChoice();
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'user',
      message: 'Which user would you like to use?',
      choices: () => users.map((user: IUser) => formatChoice(user)),
      default: defaultChoice(users, currentChoice || users[0]),
    },
  ]);

  // Save new user to git config
  try {
    const user = parseChoice(answers.user);
    const saved = await saveGitConfig(user);
    if (!saved) {
      throw new Error('Failed to save git config');
    }

    console.log(
      `${logSymbols.success} Switched to git user ${chalk.cyan(
        formatChoice(user),
      )} successfully!`,
    );
  } catch (error) {
    console.log(
      `${logSymbols.error} ${chalk.red('Failed to switch git user')}`,
      error,
    );
  }
};

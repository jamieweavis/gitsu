import chalk from 'chalk';
import child_process from 'child_process';
import os from 'os';
import path from 'path';
import logSymbols from 'log-symbols';

export default () => {
  try {
    const editor = process.env.EDITOR || 'vi';

    console.log(
      `${logSymbols.info} Opening ${chalk.cyan('~/.gitsurc')} with ${chalk.cyan(
        editor,
      )}`,
    );

    child_process.spawn(editor, [path.join(os.homedir(), '.gitsurc')], {
      stdio: 'inherit',
    });
  } catch (error) {
    console.log(
      `${logSymbols.error} ${chalk.red('Failed to open ~/.gitsurc')}`,
      error,
    );
  }
};

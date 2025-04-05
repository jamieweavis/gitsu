import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import logSymbols from 'log-symbols';

const execPromise = promisify(exec);

import type { IUser } from '../types';

export default async (user: IUser): Promise<boolean> => {
  try {
    await execPromise(
      `git config --global user.name "${user.name}" && git config --global user.email "${user.email}"`,
    );
    return true;
  } catch (error) {
    console.error(`${logSymbols.error} Failed to save git config`, error);
    return false;
  }
};

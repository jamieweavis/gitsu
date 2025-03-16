import { exec } from 'node:child_process';
import logSymbols from 'log-symbols';

import type { IUser } from '../types';

export default async (user: IUser): Promise<boolean> => {
  try {
    // If user is in a git repo, save user to local git config
    await exec(
      `cd ${process.cwd()} && git config user.name "${user.name}" && git config user.email "${user.email}"`,
    );
    // Save user to global git config
    await exec(
      `git config --global user.name "${user.name}" && git config --global user.email "${user.email}"`,
    );
    return true;
  } catch (error) {
    console.error(`${logSymbols.error} Failed to save git config`, error);
    return false;
  }
};

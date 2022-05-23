import child_process from 'child_process';
import logSymbols from 'log-symbols';

import { IUser } from '../types';

export default async (user: IUser): Promise<boolean> => {
  try {
    await child_process.exec(
      `git config user.name "${user.name}" && git config user.email "${user.email}"`,
    );

    return true;
  } catch (error) {
    console.error(`${logSymbols.error} Failed to save git config`, error);
    return false;
  }
};

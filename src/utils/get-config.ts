import { cosmiconfig } from 'cosmiconfig';
import { name } from '../../package.json';

export default async () => {
  const explorer = cosmiconfig('gitsu');
  const result = await explorer.search();
  if (!result) throw new Error('Failed to find ~/.gitsu configuration file');
  return result;
};

import { cosmiconfig } from 'cosmiconfig';

export default async () => {
  const explorer = cosmiconfig('gitsu', { searchStrategy: 'global' });
  const result = await explorer.search();
  if (!result) throw new Error('Failed to find ~/.gitsurc configuration file');
  return result;
};

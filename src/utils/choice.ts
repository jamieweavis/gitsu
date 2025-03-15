import type { IUser } from '../types';

export const formatChoice = (user: IUser): string =>
  `${user.name} <${user.email}>`;

export const parseChoice = (choice: string): IUser => {
  const [name, email] = choice.split('<');
  return { name: name.trim(), email: email.slice(0, -1).trim() };
};

export const defaultChoice = (users: IUser[], currentChoice: string) => {
  const firstNotCurrentUser = users.find(
    (user: IUser) => formatChoice(user) !== currentChoice,
  );
  if (!firstNotCurrentUser) return currentChoice;
  return `${firstNotCurrentUser.name} <${firstNotCurrentUser.email}>`;
};

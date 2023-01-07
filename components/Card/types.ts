import type { Entry } from '~/sources';

export type CardProps = {
  title: string;
  resources: Entry[];
  path: number;
  difficulty: number;
};

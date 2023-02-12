import type { Page } from '~/sources';

export type CardProps = {
  title: string;
  pages: Page[];
  path: number;
  difficulty: number;
};

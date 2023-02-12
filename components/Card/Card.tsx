import Link from 'next/link';

import type { CardProps } from './types';
import { AdvancedIcon } from '@/Icon/AdvancedIcon';
import { BeginnerIcon } from '@/Icon/BeginnerIcon';
import { IntermediateIcon } from '@/Icon/IntermediateIcon';

const DIFFICULTY: Record<number, string> = {
  0: 'Beginner',
  1: 'Intermediate',
  2: 'Advanced',
};

function DifficultyIcon({ difficulty }: { difficulty: number }) {
  switch (difficulty) {
    case 2: {
      return <AdvancedIcon />;
    }
    case 1: {
      return <IntermediateIcon />;
    }

    default: {
      return <BeginnerIcon />;
    }
  }
}

export function Card({
  title,
  path,
  difficulty,
  pages,
}: CardProps): JSX.Element {
  return (
    <div className="rounded-md text-black-900 overflow-hidden">
      <div className="p-5 bg-black-800 text-black-100 w-full">
        <div className="w-full flex justify-between font-mono text-sm">
          <span>Path {path}</span>
          <span className="flex items-center gap-2">
            {DIFFICULTY[difficulty]} <DifficultyIcon difficulty={difficulty} />
          </span>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ul className="list-disc p-6 rounded-b-md marker:text-pink-500 gap-2 flex flex-col bg-black-100">
        {pages.map((item) => {
          return (
            <li key={item.title} className="ml-4">
              <Link
                href={item.url}
                className="hover:underline underline-offset-4 "
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import Link from 'next/link';

import type { CardProps } from './types';

// https://www.1001fonts.com/pt-serif-font.html

export function Card({
  title,
  resources,
  path,
  difficulty,
}: CardProps): JSX.Element {
  console.log(resources);
  return (
    <div className="rounded-md bg-black-100 text-black-900 overflow-hidden">
      <div className="p-5 bg-black-800 text-black-100 w-full">
        <div className="w-full flex justify-between font-mono text-sm">
          <span>Path 0</span>
          <span>Beginner</span>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ul className="list-disc p-6 ml-6 marker:text-pink-500 gap-2 flex flex-col">
        {resources.map((item) => {
          return (
            <li key={item.name}>
              <Link
                href={item.url}
                className="hover:underline underline-offset-4 "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

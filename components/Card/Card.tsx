import Link from 'next/link';

import styles from './Card.module.css';
import type { CardProps } from './types';

export function Card({ title, description, url }: CardProps): JSX.Element {
  return (
    <div className={`${styles.cardBelow} rounded-md h-36 p-[1px] group`}>
      <Link
        href={url}
        className={`${styles.card} bg-white w-full h-full flex flex-col gap-2 py-2 px-3 rounded-md`}
      >
        <span className="text-base font-bold flex-1 group-hover:underline underline-offset-4">
          {title}
        </span>
        <p
          className={`${styles.description} text-sm h-fit overflow-hidden text-ellipsis flex-1`}
        >
          {description}
        </p>
      </Link>
    </div>
  );
}

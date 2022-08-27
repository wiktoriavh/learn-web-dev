import Link from 'next/link';

import styles from './Card.module.css';
import type { CardProps } from './types';

export function Card({ title, description, url }: CardProps): JSX.Element {
  return (
    <div className={`${styles.card} rounded-md border h-32 `}>
      <Link href={url}>
        <a className="w-full h-full flex flex-col gap-2 py-2 px-3 overflow-hidden">
          <span className="text-base font-bold">{title}</span>
          <p
            className={`${styles.description} text-sm h-fit overflow-hidden text-ellipsis`}
          >
            {description}
          </p>
        </a>
      </Link>
    </div>
  );
}

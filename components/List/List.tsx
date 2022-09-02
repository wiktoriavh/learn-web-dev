import { Card } from '@/Card';
import { formatSlug } from '~/format';
import type { Entry } from '~/sources';

import styles from './List.module.css';

export function List({
  entries,
  type,
  description,
}: {
  entries: Entry[];
  type: string;
  description?: string;
}): JSX.Element {
  return (
    <section id={formatSlug(type)} className="mb-20">
      <h3
        className={`${styles.sectionHeading} my-4 text-2xl font-bold text-pink-400 w-fit`}
      >
        {type}
      </h3>
      {description && <p className="pb-2 text-lg">{description}</p>}
      <ul className="grid grid-cols-4 gap-4 ">
        {entries?.map((entry) => (
          <li key={entry.name} className="my-2 text-lg">
            <Card
              title={entry.name}
              url={entry.url}
              description={entry.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

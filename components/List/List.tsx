import Link from 'next/link';

import type { Entry } from '../../utils/sources';
import { ListItem } from '../ListItem/ListItem';

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
    <section className="container mb-20">
      <h3 className="my-4 text-2xl font-bold text-center text-pink-400">
        {type}
      </h3>
      {description && <p className="pb-2 text-lg">{description}</p>}
      <ul>
        {entries?.map((entry) => (
          <li key={entry.name} className="my-2 text-lg">
            {/* <Link href={entry.url}>
              <a className="text-pink-200 hover:underline hover:underline-offset-2">
                {entry.name}
              </a>
            </Link>
            {entry.description && (
              <p className="pl-4 my-2 mb-4">{entry.description}</p>
            )} */}
            <ListItem
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

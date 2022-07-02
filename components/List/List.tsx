import { ListItem } from '@/ListItem';
import { formatSlug } from '~/format';
import type { Entry } from '~/sources';

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
      <h3 className="my-4 text-2xl font-bold text-center text-pink-400">
        {type}
      </h3>
      {description && <p className="pb-2 text-lg">{description}</p>}
      <ul>
        {entries?.map((entry) => (
          <li key={entry.name} className="my-2 text-lg">
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

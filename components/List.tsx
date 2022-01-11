import Link from 'next/link';
import type { Entry } from '../utils/sources';

export function List({
  entries,
  type,
}: {
  entries: Entry[];
  type: string;
}): JSX.Element {
  console.log('hello?');
  return (
    <section className="w-[500px] mx-auto mb-20">
      <h3 className="text-2xl my-4 text-pink-400 font-bold">{type}</h3>
      <ul>
        {entries?.map((entry) => (
          <li key={entry.name} className="my-2 text-lg">
            <Link href={entry.url}>
              <a className="text-pink-200 hover:underline hover:underline-offset-2">
                {entry.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

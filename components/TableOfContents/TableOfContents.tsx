import Link from 'next/link';

import type { TableOfContentsProps } from './types';

export function TableOfContents({
  sources,
}: TableOfContentsProps): JSX.Element {
  return (
    <nav className="sticky xl:ml-auto top-20 max-w-max">
      <menu>
        {sources.map((source) => (
          <li key={source.type}>
            <details>
              <summary>{source.type}</summary>
              <menu>
                {source.entries.map((entry) => (
                  <li key={entry.name}>
                    <Link href={entry.url}>
                      <a>{entry.name}</a>
                    </Link>
                  </li>
                ))}
              </menu>
            </details>
          </li>
        ))}
      </menu>
    </nav>
  );
}

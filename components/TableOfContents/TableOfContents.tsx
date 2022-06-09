import Link from 'next/link';
import { useEffect, useState } from 'react';
import { formatSlug } from '~/format';

import type { TableOfContentsProps } from './types';

export function TableOfContents({
  sources,
}: TableOfContentsProps): JSX.Element {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const activeSource = sources.findIndex((s) =>
      s.entries.some((e) => `#${formatSlug(e.name)}` === window.location.hash)
    );

    if (activeSource !== -1) {
      setActive(activeSource);
    }
  }, [sources]);

  return (
    <nav className="sticky mb-16 xl:mt-4 xl:ml-auto top-20 xl:max-w-max">
      <h2 className="mb-4 ml-2 text-2xl font-bold text-center text-pink-400 md:text-left">
        Table of contents
      </h2>
      <menu className="space-y-1">
        {sources.map((source, i) => (
          <li key={source.type}>
            <details
              open={i === active}
              onToggle={({ target }) => {
                if ((target as HTMLDetailsElement).open) {
                  setActive(i);
                }
              }}
              className="group text-pink-200 open:text-pink-400 open:p-2 transition-[padding] open:border border-white rounded"
            >
              <summary className="flex items-center justify-between gap-2 p-2 rounded cursor-pointer hover:bg-black-800 group-open:bg-black-800 open">
                {source.type}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 opacity-0 group-open:rotate-180 group-open:opacity-100 group-hover:opacity-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <menu className="p-2 space-y-2 text-pink-200 list-inside opacity-0 group-open:opacity-100">
                {source.entries.map((entry) => (
                  <li key={entry.name}>
                    <Link href={`#${formatSlug(entry.name)}`}>
                      {/* As clean as this is, we might want to use a JS-based approach for the scrolling so that we can add a slight offset*/}
                      <a className="transition-[margin] block hover:ml-2">
                        {entry.name}
                      </a>
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

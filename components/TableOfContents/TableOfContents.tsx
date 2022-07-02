import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { formatSlug } from '~/format';

import type { TableOfContentsProps } from './types';

export function TableOfContents({
  sources,
}: TableOfContentsProps): JSX.Element {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const activeSource = sources.findIndex((source) =>
      source.entries.some(
        (entry) => `#${formatSlug(entry.name)}` === window.location.hash
      )
    );

    if (activeSource !== -1) {
      setActive(activeSource);
    }
  }, [sources]);

  return (
    <nav className="sticky mb-16 xl:mt-4 xl:ml-auto top-20 xl:max-w-max">
      <h3 className="mb-4 ml-2 text-2xl font-bold text-center text-pink-400 md:text-left">
        Table of contents
      </h3>
      <menu className="space-y-1">
        {sources.map((source, index) => (
          <li key={source.type}>
            <div
              className={clsx(
                'transition-[padding,margin,border] border rounded',
                index === active
                  ? 'p-2 text-pink-400 border-white'
                  : 'mx-2 text-pink-200 border-transparent'
              )}
            >
              <button
                type="button"
                onClick={() => {
                  setActive(index === active ? -1 : index);
                }}
                className={clsx(
                  'flex w-full items-center justify-between gap-2 p-2 rounded cursor-pointer hover:bg-black-800',
                  index === active && 'bg-black-800'
                )}
              >
                {source.type}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={clsx(
                    'w-5 h-5 group-open:rotate-180 group-hover:opacity-100',
                    index === active ? 'opacity-100' : 'opacity-0'
                  )}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <menu
                className={clsx(
                  'p-2 text-pink-200 list-inside duration-300',
                  index === active
                    ? 'opacity-100 py-2 transition-[padding,opacity]'
                    : 'opacity-0 py-0 transition-[padding] pointer-events-none'
                )}
              >
                {source.entries.map((entry) => (
                  <li
                    className={clsx(
                      'transition-[line-height,margin] duration-300',
                      index === active
                        ? 'leading-normal mt-2 first:mt-0'
                        : 'leading-[0] mt-0'
                    )}
                    key={entry.name}
                  >
                    <Link href={`#${formatSlug(entry.name)}`}>
                      {/* As clean as this is, we might want to use a JS-based approach for the scrolling so that we can add a slight offset*/}
                      <a
                        className="transition-[margin] block hover:ml-2"
                        tabIndex={index === active ? 0 : -1}
                      >
                        {entry.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </menu>
            </div>
          </li>
        ))}
      </menu>
    </nav>
  );
}

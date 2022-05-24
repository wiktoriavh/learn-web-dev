import Link from 'next/link';

import type { ListItemProps } from './types';

export function ListItem({
  title,
  description,
  url,
}: ListItemProps): JSX.Element {
  return (
    <div className="border-[1px] border-pink-50 rounded">
      <Link href={url}>
        <a className="w-100 h-100 p-2.5 flex flex-col gap-2.5">
          <span className="text-pink-200 text-lg">{title}</span>
          <p className="text-sm ">{description}</p>
        </a>
      </Link>
    </div>
  );
}

import Link from 'next/link';

import { Logo } from './Logo';

export function Footer(): JSX.Element {
  return (
    <footer>
      <div className="flex flex-row justify-center items-center gap-8">
        <Link href="/impressum">
          <a className="text-light-red hover:underline-offset-4 hover:underline">
            Impressum
          </a>
        </Link>
        <Link href="https://github.com/braweria">
          <a>
            <Logo />
          </a>
        </Link>
        <Link href="/datenschutz">
          <a className="text-light-red hover:underline-offset-4 hover:underline">
            Datenschutz
          </a>
        </Link>
      </div>
    </footer>
  );
}

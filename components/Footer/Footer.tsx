import Image from 'next/image';
import Link from 'next/link';
import type { LegacyRef } from 'react';
import { forwardRef } from 'react';

import KoFiLogo from '../../public/Ko-fi_Icon_RGBforDarkBg.png';
import { Logo } from '../Logo';

export function Footer(): JSX.Element {
  return (
    <footer className="py-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end ">
        <div className="px-6 flex-1">
          <ul>
            <Item>
              <RedLink href="https://github.com/Braweria/learn-web-dev">
                GitHub Repository
              </RedLink>
            </Item>
            <Item>
              <RedLink href="https://www.linkedin.com/in/wiktoria-mielcarek/">
                LinkedIn
              </RedLink>
            </Item>
            <Item>
              <RedLink href="https://twitter.com/braweria">Twitter</RedLink>
            </Item>
            <Item>
              <div className="rounded-md bg-light-red w-fit pr-3 pl-1 hover:opacity-80">
                <Link
                  href="https://ko-fi.com/braweria"
                  className="flex flex-row items-center gap-4 font-bold "
                >
                  <Image
                    src={KoFiLogo}
                    alt="Ko-fi"
                    placeholder="blur"
                    height={40}
                    width={40}
                  />{' '}
                  Support Me on Ko-fi
                </Link>
              </div>
            </Item>
          </ul>
        </div>
        <div className="self-center flex-1 flex flex-row justify-center items-center order-first md:order-none">
          <Link href="https://github.com/braweria">
            <Logo />
          </Link>
        </div>
        <div className="px-6 flex-1 md:text-right">
          <p className="text-sm text-light-grey">
            Created by{' '}
            <RedLink href="https://github.com/braweria">
              Wiktoria &quot;Braweria&quot; Mielcarek
            </RedLink>
          </p>
          <p className="text-sm text-light-grey">
            &copy; {new Date().getFullYear()}
          </p>
          <Link
            href="/privacy"
            className="text-light-red hover:underline-offset-4 hover:underline text-sm"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function Item({ children }: { children: JSX.Element }): JSX.Element {
  return <li className="my-2">{children}</li>;
}

function RedLink({
  children,
  href,
  ...rest
}: {
  children: JSX.Element | string;
  href: string;
}): JSX.Element {
  return (
    <Link
      href={href}
      {...rest}
      className="text-light-red hover:underline-offset-4 hover:underline"
    >
      {children}
    </Link>
  );
}

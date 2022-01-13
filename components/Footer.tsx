import Image from 'next/image';
import Link from 'next/link';
import type { LegacyRef } from 'react';
import { forwardRef } from 'react';

import KoFiLogo from '../public/Ko-fi_Icon_RGBforDarkBg.png';
import { Logo } from './Logo';

export function Footer(): JSX.Element {
  return (
    <footer className="py-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end ">
        <div className="px-6 flex-1">
          <ul>
            <Item>
              <Link href="https://github.com/Braweria/learn-web-dev" passHref>
                <RedLink>GitHub Repository</RedLink>
              </Link>
            </Item>
            <Item>
              <Link
                href="https://www.linkedin.com/in/wiktoria-mielcarek/"
                passHref
              >
                <RedLink>LinkedIn</RedLink>
              </Link>
            </Item>
            <Item>
              <Link href="https://twitter.com/braweria" passHref>
                <RedLink>Twitter</RedLink>
              </Link>
            </Item>
            <Item>
              <div className="rounded-md bg-light-red w-fit pr-3 pl-1 hover:opacity-80">
                <Link href="https://ko-fi.com/braweria">
                  <a className="flex flex-row items-center gap-4 font-bold ">
                    <Image
                      src={KoFiLogo}
                      alt="Ko-fi"
                      placeholder="blur"
                      height={40}
                      width={40}
                    />{' '}
                    Support Me on Ko-fi
                  </a>
                </Link>
              </div>
            </Item>
          </ul>
        </div>
        <div className="self-center flex-1 flex flex-row justify-center items-center order-first md:order-none">
          <Link href="https://github.com/braweria">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="px-6 flex-1 md:text-right">
          <p className="text-sm text-light-grey">
            Created by{' '}
            <Link href="https://github.com/braweria" passHref>
              <RedLink>Wiktoria &quot;Braweria&quot; Mielcarek</RedLink>
            </Link>
          </p>
          <p className="text-sm text-light-grey">&copy; {new Date().getFullYear()}</p>
          <Link href="/privacy">
            <a className="text-light-red hover:underline-offset-4 hover:underline text-sm">
              Privacy
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

function Item({ children }: { children: JSX.Element }): JSX.Element {
  return <li className="my-2">{children}</li>;
}

function CustomLink(
  {
    children,
    ...rest
  }: {
    children: JSX.Element | string;
  },
  ref: LegacyRef<HTMLAnchorElement> | undefined
): JSX.Element {
  return (
    <a
      ref={ref}
      {...rest}
      className="text-light-red hover:underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}
const RedLink = forwardRef(CustomLink);

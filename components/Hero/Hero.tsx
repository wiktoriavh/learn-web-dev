import clsx from 'clsx';
import { useRef } from 'react';

import styles from './Hero.module.css';

export function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}): JSX.Element {
  return (
    <div className={clsx('min-h-96 max-h-screen py-28 px-6 mb-6 relative', styles.gradientBackground)}>
      <div className="md:container mx-auto">
        <h1 className="text-5xl text-pink-50 text-center font-light ">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-2xl md:text-center text-pink-50 my-20 md:w-3/5 mx-auto">
            {subtitle}
          </h2>
        )}
      </div>
    </div>
  );
}

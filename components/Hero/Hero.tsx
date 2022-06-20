import clsx from 'clsx';

import styles from './Hero.module.css';

export function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}): JSX.Element {
  return (
    <section
      className={clsx(
        'max-h-screen py-10 px-6 md:px-auto',
        styles.gradientBackground
      )}
    >
      <div className="md:w-[700px] md:container mx-auto flex flex-col gap-10">
        <h1 className="text-4xl md:text-7xl text-pink-50 text-center font-bold ">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-md md:text-2xl text-center text-pink-50 mx-auto">
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
}

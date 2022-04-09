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
  const canvas = useRef<HTMLCanvasElement>(null);
  const context = canvas.current?.getContext('2d');

  if (context) {
    const grd4 = context.createLinearGradient(200, 256, 300, 0);
    grd4.addColorStop(0, 'rgba(131, 24, 67, 0)');
    grd4.addColorStop(0.5, 'rgba(131, 24, 67, 0.3)');
    grd4.addColorStop(1, 'rgba(239, 93, 168, 0)');
    context.fillStyle = grd4;
    context.fillRect(0, 0, 500, 256);

    const grd = context.createRadialGradient(120, 0, 0, 120, 0, 180);
    grd.addColorStop(0, 'rgba(239, 93, 168, 0.5)');
    grd.addColorStop(1, 'rgba(239, 93, 168, 0)');
    context.fillStyle = grd;
    context.fillRect(0, 0, 500, 256);

    const grd2 = context.createRadialGradient(230, 125, 0, 230, 125, 220);
    grd2.addColorStop(0, 'rgba(93, 95, 239, 0.4)');
    grd2.addColorStop(1, 'rgba(93, 95, 239, 0)');
    context.fillStyle = grd2;
    context.fillRect(0, 0, 500, 256);

    const grd3 = context.createRadialGradient(400, 270, 0, 400, 270, 100);
    grd3.addColorStop(0, 'rgba(239, 93, 168, 0.3)');
    grd3.addColorStop(1, 'rgba(239, 93, 168, 0)');
    context.fillStyle = grd3;
    context.fillRect(0, 0, 500, 256);
  }

  return (
    <div className={clsx('min-h-96 max-h-screen py-28 px-6 mb-6 relative')}>
      <div className={styles.canvasWrapper}>
        <canvas
          className={styles.canvas}
          ref={canvas}
          width="500"
          height="256"
        />
      </div>
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

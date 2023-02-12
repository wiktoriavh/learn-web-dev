import styles from './List.module.css';
import { Card } from '@/Card';
import { formatSlug } from '~/format';
import type { Path } from '~/sources';

export function List({ path }: { path: Path }): JSX.Element {
  return (
    <section id={formatSlug(path.title)} className="mb-20">
      <h3
        className={`${styles.sectionHeading} my-4 text-3xl font-bold text-pink-400 w-fit`}
      >
        {path.title}
      </h3>
      {path.description && <p className="pb-2 text-lg">{path.description}</p>}
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-4 ">
        {path.chapters?.map((chapter) => (
          <li key={chapter.title} className="my-2 text-lg">
            <Card
              title={chapter.title}
              key={chapter.title}
              pages={chapter.pages}
              difficulty={chapter.difficulty}
              path={path.number}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

import { Footer } from '@/Footer';
import { Hero } from '@/Hero';
import { List } from '@/List';
import { TableOfContents } from '@/TableOfContents';
import type { NextPage } from 'next';
import Head from 'next/head';
import { sources } from '~/sources';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learn Web Development</title>
      </Head>
      <div className="min-h-screen mx-auto text-light-grey">
        <Hero
          title="Learn Web Development from Scratch"
          subtitle="A compilation of resources from entry level coding to advanced development
          techniques, curated by one of the largest web development communities on Discord."
        />
        <div className="grid xl:grid-cols-[1fr_max-content_1fr]">
          <aside className="container xl:max-w-full">
            <TableOfContents sources={sources} />
          </aside>
          <main className="container">
            {sources.map((source) => {
              return <List key={source.type} {...source} />;
            })}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

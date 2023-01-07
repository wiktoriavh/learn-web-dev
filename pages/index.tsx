import type { NextPage } from 'next';
import Head from 'next/head';

import { Card } from '@/Card';
import { Footer } from '@/Footer';
import { Hero } from '@/Hero';
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
        <main className="container my-auto">
          <div className="grid md:grid-cols-3 gap-4 ">
            {sources.map((source) => {
              return (
                <Card
                  title={source.type}
                  key={source.type}
                  resources={source.entries}
                  difficulty={source.difficulty}
                  path={source.path}
                />
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

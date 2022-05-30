import { Footer } from '@/Footer';
import { Hero } from '@/Hero';
import { List } from '@/List';
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
      <div className="mx-auto text-light-grey min-h-screen">
        <Hero
          title="Learn Web Development from Scratch"
          subtitle="A compilation of resources from entry level coding to advanced development
          techniques, curated by one of the largest web development communities on Discord."
        />
        {sources.map((source) => {
          return <List key={source.type} {...source} />;
        })}
        <Footer />
      </div>
    </>
  );
};

export default Home;

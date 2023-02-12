import type { NextPage } from 'next';
import Head from 'next/head';
import { PATH_GettingStarted } from 'paths/0-getting-started';
import { PATH_Internet } from 'paths/1-internet';
import { PATH_HTML } from 'paths/2-html';
import { PATH_CSS } from 'paths/3-css';

import { Footer } from '@/Footer';
import { Hero } from '@/Hero';
import { List } from '@/List';

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
          <List path={PATH_GettingStarted} />
          <List path={PATH_Internet} />
          <List path={PATH_HTML} />
          <List path={PATH_CSS} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

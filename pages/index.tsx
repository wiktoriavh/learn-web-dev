import type { NextPage } from 'next';

import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { List } from '../components/List';
import { sources } from '../utils/sources';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  return (
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
  );
};

export default Home;

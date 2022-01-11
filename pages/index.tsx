import type { NextPage } from 'next';

import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { List } from '../components/List';
import { sources } from '../utils/sources';

const Home: NextPage = () => {
  return (
    <div className="bg-dark mx-auto text-light-grey min-h-screen">
      <Hero />
      {sources.map((source) => {
        return <List {...source} />;
      })}
      <Footer />
    </div>
  );
};

export default Home;

import type { NextPage } from 'next';

import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { List } from '../components/List';
import { sources } from '../utils/sources';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  return (
    <div className="bg-dark mx-auto text-light-grey min-h-screen">
      <Hero />
      {sources.map((source) => {
        return <List key={source.type} {...source} />;
      })}
      <Footer />
    </div>
  );
};

export default Home;

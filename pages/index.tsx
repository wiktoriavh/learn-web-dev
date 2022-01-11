import type { NextPage } from 'next';
import { Hero } from '../components/Hero';
import { Logo } from '../components/Logo';

const Home: NextPage = () => {
  return (
    <div className="bg-dark mx-auto text-light-grey min-h-screen">
      <Hero />
      <Logo />
    </div>
  );
};

export default Home;

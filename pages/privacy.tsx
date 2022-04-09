import Head from 'next/head';
import Link from 'next/link';

import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero/Hero';

export default function Privacy(): JSX.Element {
  return (
    <>
      <Head>
        <title>Privacy - Learn Web Development</title>
      </Head>
      <GoBack />
      <Hero title="Privacy" />
      <main className="md:w-[500px] mx-auto mb-20 w-auto px-6 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-2xl my-4">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
          <h2 className="text-2xl my-4 mt-8">Handling Your Data</h2>
          <ul className="list-disc pl-6">
            <li>We doesn&apos;t use cookies</li>
            <li>This website doesn&apos;t run any kinds of ads</li>
            <li>No tracking pixel exists on this website</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

function GoBack() {
  return (
    <Link href="/">
      <a className="rounded-md flex flex-row justify-center items-center gap-4  w-fit p-4 absolute text-pink-300 hover:bg-pink-400/50 hover:text-pink-100 m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <span>Go Back</span>
      </a>
    </Link>
  );
}

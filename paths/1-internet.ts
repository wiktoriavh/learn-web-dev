import type { Chapter, Path } from '~/sources';

const CHAPTER_WorldWideWeb: Chapter = {
  title: 'World Wide Web',
  difficulty: 0,
  pages: [
    {
      title: 'What is the World Wide Web?',
      url: 'https://www.britannica.com/topic/World-Wide-Web',
    },
    {
      title: 'Web Standards: the what, the why, and the how?',
      url: 'https://www.smashingmagazine.com/2019/01/web-standards-guide/',
    },
  ],
};

const CHAPTER_Browser: Chapter = {
  title: 'Browser',
  difficulty: 1,
  pages: [
    {
      title: 'Internal Operations of Browser Engines',
      url: 'https://web.dev/howbrowserswork/',
    },
    {
      title: 'How Browsers Work',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work',
    },
  ],
};

const CHAPTER_Protocols: Chapter = {
  title: 'Different type of Protocols',
  difficulty: 0,
  pages: [
    {
      title: 'Introduction to the Intenet Protocol (IP)',
      url: 'https://www.cloudflare.com/en-gb/learning/network-layer/internet-protocol/',
    },
    {
      title: 'Definitions of different type of Protocols',
      url: 'https://www.geeksforgeeks.org/types-of-internet-protocols/',
    },
  ],
};

const CHAPTER_DNS: Chapter = {
  title: 'Domain Name System and More',
  difficulty: 1,
  pages: [
    {
      title: 'Introduction to Domain Name System (DNS)',
      url: 'https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/',
    },
    {
      title: 'Indepth explanation of the DNS',
      url: 'https://www.techtarget.com/searchnetworking/definition/domain-name-system',
    },
  ],
};

export const PATH_Internet: Path = {
  title: 'Internet',
  number: 1,
  description: 'Learn the basics of the internet and how it works.',
  chapters: [
    CHAPTER_WorldWideWeb,
    CHAPTER_Protocols,
    CHAPTER_Browser,
    CHAPTER_DNS,
  ],
};

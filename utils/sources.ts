export type Entry = {
  name: string;
  url: string;
  description?: string;
  by: string;
};

export type Source = {
  type: string;
  description?: string;
  entries: Entry[];
};

const beginner: Source = {
  type: 'Beginner: Start Here',
  entries: [
    {
      name: 'Getting Started with the Web',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
      by: 'MDN',
      description:
        "Getting started with the web is a concise series introducing you to the practicalities of web development.",
    },
    {
      name: 'Front End Developer Learning Path',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer',
      by: 'MDN',
      description:
        'Structured course that will teach you all you need to know to become a front-end web developer.',
    },
    {
      name: 'Code Editor: VS Code',
      url: 'https://code.visualstudio.com',
      by: 'Microsoft',
      description: 'Free. Built on open source. Runs everywhere.',
    },
    {
      name: 'Guide to Chromium DevTools',
      url: 'https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/',
      by: 'Microsoft',
      description: 'Microsoft Edge DevTools documentation',
    },
    {
      name: 'Introduction to HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
      by: 'MDN',
      description:
        'Hyper Text Markup Language (HTML) is the standard markup language for creating web pages and web applications.',
    },
    {
      name: 'Introduction to CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
      by: 'MDN',
      description:
        'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
    },
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      by: 'MDN',
      description:
        'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
    },
    {
      name: 'Frontend Roadmap',
      url: 'https://roadmap.sh/frontend',
      by: 'Roadmap',
      description: 'Step by step guide to becoming a modern frontend developer',
    },
  ],
};

const intermediateDeepen: Source = {
  type: 'Intermediate: Deepen Your Knowledge',
  entries: [
    {
      name: 'Learn everything about JavaScript',
      url: 'https://javascript.info',
      by: 'javascript.info',
    },
    {
      name: 'Accessibility',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility',
      by: 'MDN',
    },
    {
      name: 'TypeScript for JS Programmers',
      url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
      by: 'TypeScript',
    },
    {
      name: 'Additional TypeScript Doc',
      url: 'https://devdocs.io/typescript/',
      by: 'DevDocs',
    },
    {
      name: 'How to use Git (NOT GitHub)',
      url: 'https://docs.github.com/en/get-started/using-git/about-git',
      by: 'GitHub',
    },
    {
      name: 'Introduction to GitHub',
      url: 'https://docs.github.com/en/get-started',
      by: 'GitHub',
    },
    {
      name: 'Tutorial: Node.js for Beginners',
      url: 'https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-beginners-tutorial',
      by: 'Microsoft',
    },
    {
      name: 'Getting started with Node.js',
      url: 'https://nodejs.org/en/docs/guides/getting-started-guide/',
      by: 'nodejs',
    },
    {
      name: 'Alternative to NPM: Yarn',
      url: 'https://classic.yarnpkg.com/en/docs/install/#windows-stable',
      by: 'Yarn',
    },
  ],
};

const intermediateStatic: Source = {
  type: 'Intermediate: Deployment to Static Hosting',
  entries: [
    {
      name: 'What is Static Hosting',
      url: 'https://www.digitalocean.com/community/tutorials/what-is-static-hosting',
      by: 'DigitalOcean',
    },
    {
      name: 'Azure',
      url: 'https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website',
      by: 'Microsoft',
    },
    {
      name: 'AWS',
      url: 'https://aws.amazon.com/getting-started/hands-on/host-static-website/?nc1=h_ls',
      by: 'Amazon',
    },
    {
      name: 'GitHub Pages',
      url: 'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages',
      by: 'GitHub',
    },
    {
      name: 'Firebase',
      url: 'https://firebase.google.com/docs/hosting/',
      by: 'Google',
    },
    {
      name: 'Netlify',
      url: 'https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/',
      by: 'Netlify',
    },
  ],
};

const intermediateManaged: Source = {
  type: 'Intermediate: Deployment to Managed Hosting',
  entries: [
    {
      name: 'What is Managed Hosting',
      url: 'https://www.digitalocean.com/blog/what-is-managed-hosting/',
      by: 'DigitalOcean',
    },
    {
      name: 'Vercel',
      url: 'https://nextjs.org/docs/deployment',
      by: 'Vercel',
    },
    {
      name: 'Heroku',
      url: 'https://devcenter.heroku.com/articles/getting-started-with-nodejs',
      by: 'Heroku',
    },
    {
      name: 'DigitalOcean',
      url: 'https://www.digitalocean.com/solutions/managed-cloud-hosting/',
      by: 'DigitalOcean',
    },
    {
      name: 'Azure',
      url: 'https://docs.microsoft.com/en-us/azure/developer/javascript/',
      by: 'Microsoft',
    },
    {
      name: 'AWS',
      url: 'https://aws.amazon.com/amplify/hosting/',
      by: 'Amazon',
    },
    {
      name: 'Firebase',
      url: 'https://firebase.google.com/docs/hosting/',
      by: 'Google',
    },
  ],
};

const advancedFrameworks: Source = {
  type: 'Advanced: Frameworks',
  description:
    'Frameworks are ordered in job availability, but this is largely dependent on where you live.',
  entries: [
    {
      name: 'React',
      url: 'https://reactjs.org/docs/getting-started.html',
      by: 'Meta',
    },
    {
      name: 'Additional React Doc',
      url: 'https://devdocs.io/react/',
      by: 'DevDocs',
    },
    {
      name: 'FreeCodeCamp React Video 2021',
      url: 'https://www.youtube.com/watch?v=nTeuhbP7wdE&t=8s',
      by: 'FreeCodeCamp',
    },
    {
      name: 'Next.js',
      url: 'https://nextjs.org/learn/basics/create-nextjs-app',
      by: 'Vercel',
    },
    {
      name: 'Angular (NOT Angularjs)',
      url: 'https://angular.io/start',
      by: 'Google',
    },
    {
      name: 'Vue Version 3',
      url: 'https://v3.vuejs.org/guide/introduction.html',
      by: 'Evan You',
    },
    {
      name: 'Vue Version 2',
      url: 'https://vuejs.org/v2/guide/',
      by: 'Evan You',
    },
    {
      name: 'Svelte',
      url: 'https://svelte.dev/tutorial/basics',
      by: 'Svelte',
    },
    {
      name: 'Svelte Video Courses',
      url: 'https://svelte.dev/faq#are-there-any-video-courses',
      by: 'Svelte',
    },
  ],
};

// list for redux and ci/cd
const advancedStates: Source = {
  type: 'Advanced: State Management',
  entries: [
    {
      name: 'Redux Toolkit',
      url: 'https://redux.js.org/tutorials/fundamentals/part-1-overview',
      by: 'Redux',
    },
    {
      name: 'Zustand',
      url: 'https://zustand.js.org/',
      by: 'Zustand',
    },
  ],
};

const advancedCiCd: Source = {
  type: 'Advanced: CI/CD',
  entries: [
    {
      name: 'What is CI/CD',
      url: 'https://about.gitlab.com/topics/ci-cd/',
      by: 'GitLab',
    },
    {
      name: 'GitHub Actions',
      url: 'https://docs.github.com/en/actions/getting-started-with-github-actions',
      by: 'GitHub',
    },
    {
      name: 'GitLab CI',
      url: 'https://docs.gitlab.com/ee/ci/quick_start/',
      by: 'GitLab',
    },
    {
      name: 'CircleCI',
      url: 'https://circleci.com/docs/2.0/about-circleci/?section=getting-started',
      by: 'CircleCI',
    },
    {
      name: 'Travis CI',
      url: 'https://docs.travis-ci.com/user/getting-started/',
      by: 'Travis CI',
    },
  ],
};

const usefullTools: Source = {
  type: 'Useful Tools',
  entries: [
    {
      name: 'React Developer Tools for Chromium',
      url: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
      by: 'React',
    },
    {
      name: 'React Developer Tools for Firefox',
      url: 'https://addons.mozilla.org/en-US/firefox/addon/react-devtools/',
      by: 'React',
    },
    {
      name: 'Redux DevTools for Chromium',
      url: 'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd',
      by: 'Redux',
    },
    {
      name: 'Redux DevTools for Firefox',
      url: 'https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/',
      by: 'Redux',
    },
    {
      name: 'TypeScript Playground',
      url: 'https://www.typescriptlang.org/play/',
      by: 'TypeScript',
    },
    {
      name: 'Codesandbox',
      url: 'https://codesandbox.io/',
      by: 'Codesandbox',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/',
      by: 'Stackoverflow',
    },
  ],
};

const additional: Source = {
  type: 'Additional',
  entries: [
    {
      name: 'How to ask good questions',
      url: 'https://stackoverflow.com/help/how-to-ask',
      by: 'Stackoverflow',
    },
    {
      name: "Don't ask to ask, just ask",
      url: 'https://dontasktoask.com',
      by: 'DontAskToAsk',
    },
  ],
};

const basicsOfInternet: Source = {
  type: 'Basics of the Internet',
  entries: [
    {
      name: 'Introduction to Domain Name System (DNS)',
      url: 'https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/',
      by: 'CloudFlare',
    },
    {
      name: 'Indepth explanation of the DNS',
      url: 'https://www.techtarget.com/searchnetworking/definition/domain-name-system',
      by: 'Tech Target',
    },
    {
      name: 'Introduction to the Intenet Protocol (IP)',
      url: 'https://www.cloudflare.com/en-gb/learning/network-layer/internet-protocol/',
      by: 'CloudFlare',
    },
    {
      name: 'Definitions of different type of Protocols',
      url: 'https://www.geeksforgeeks.org/types-of-internet-protocols/',
      by: 'Geeks For Geeks',
    },
    {
      name: 'Internal Operations of Browser Engines',
      url: 'https://web.dev/howbrowserswork/',
      by: 'web.dev',
    },
    {
      name: 'Web Standards: the what, the why, and the how?',
      url: 'https://www.smashingmagazine.com/2019/01/web-standards-guide/',
      by: 'Smashing',
    },
  ],
};

export const sources: Source[] = [
  basicsOfInternet,
  beginner,
  intermediateDeepen,
  intermediateStatic,
  intermediateManaged,
  advancedFrameworks,
  advancedStates,
  advancedCiCd,
  usefullTools,
  additional,
];

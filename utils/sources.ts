export type Entry = {
  name: string;
  url: string;
  description?: string;
  by: string;
};

type Source = {
  type: string;
  entries: Entry[];
};

const beginner: Source = {
  type: 'Beginner',
  entries: [
    {
      name: 'Getting Started',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
      by: 'MDN',
    },
    {
      name: 'Front End Developer Learning Path',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer',
      by: 'MDN',
    },
    {
      name: 'How to use DevTools (most browsers are the same)',
      url: 'https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/',
      by: 'Microsoft',
    },
    {
      name: 'Intro to HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
      by: 'MDN',
    },
    {
      name: 'Intro to CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
      by: 'MDN',
    },
    {
      name: 'HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
      by: 'MDN',
    },
    {
      name: 'CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS',
      by: 'MDN',
    },
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      by: 'MDN',
    },
    {
      name: 'Frontend Roadmap',
      url: 'https://roadmap.sh/frontend',
      by: 'Roadmap',
    },
  ],
};

export const sources: Source[] = [beginner];

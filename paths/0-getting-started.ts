import type { Chapter, Path } from '~/sources';

const CHAPTER_Editor: Chapter = {
  title: 'Code Editor',
  difficulty: 0,
  pages: [
    {
      title: 'Visual Studio Code',
      url: 'https://code.visualstudio.com',
    },
    {
      title: 'WebStorm',
      url: 'https://www.jetbrains.com/webstorm/',
    },
  ],
};

const CHAPTER_Docs: Chapter = {
  title: 'Documentation and Resources',
  difficulty: 0,
  pages: [
    {
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/',
    },
    {
      title: 'JavaScript.info',
      url: 'https://javascript.info/',
    },
    {
      title: 'HTML Reference',
      url: 'https://htmlreference.io/',
    },
    {
      title: 'CSS Reference',
      url: 'https://cssreference.io/',
    },
  ],
};

const CHAPTER_Questions: Chapter = {
  title: 'Knowing how and where to ask Questions',
  difficulty: 1,
  pages: [
    {
      title: 'How to Ask Technical Questions',
      url: 'https://www.theodinproject.com/how_to_ask',
    },
    {
      title: 'How to ask a good question',
      url: 'https://stackoverflow.com/help/how-to-ask',
    },
    {
      title: "Stack Overflow",
      url: "https://stackoverflow.com/",
    }
  ],
};

export const PATH_GettingStarted: Path = {
  title: 'Getting Started',
  number: 0,

  description:
    'To get started with web development, you will need to have a good text editor or IDE to work with. You will also regularly stumble upon issues to solve, so knowing where to find the answers or how to ask question is crucial for your learning journey.',
  chapters: [CHAPTER_Editor, CHAPTER_Docs, CHAPTER_Questions],
};

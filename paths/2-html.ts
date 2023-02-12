import type { Chapter, Path } from '~/sources';

const CHAPTER_Basics: Chapter = {
  title: 'Basics',
  difficulty: 0,
  pages: [
    {
      title: 'FreeCodeCamp Web Dev Tutorial',
      url: 'https://www.freecodecamp.org',
    },
    {
      title: 'HTML Full Course',
      url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
    },
    {
      title: 'HTML History and Syntax',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML',
    },
    {
      title: 'Introduction to HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
    },
    {
      title: 'Learn HTML',
      url: 'https://web.dev/learn/html/',
    },
    {
      title: 'Best Practices',
      url: 'https://github.com/hail2u/html-best-practices',
    },
  ],
};

const CHAPTER_Semantics: Chapter = {
  title: 'Semantics and Accessibility',
  difficulty: 1,
  pages: [
    {
      title: 'What are Semantics',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
    },
    {
      title: 'How Semantic HTML improves your site',
      url: 'https://blog.hubspot.com/website/semantic-html',
    },
    {
      title: 'Learn Accessibility (MDN)',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility',
    },
    {
      title: 'Learn Accessibility (Web.dev)',
      url: 'https://web.dev/learn/accessibility/',
    },
    {
      title: 'Making a Strong Case for Accessibility',
      url: 'https://www.smashingmagazine.com/2021/07/strong-case-for-accessibility/',
    },
    {
      title: 'Complete Guide to Accessibility Tooling',
      url: 'https://www.smashingmagazine.com/2021/06/complete-guide-accessibility-tooling/',
    },
  ],
};

const CHAPTER_FormsTables: Chapter = {
  title: 'Forms and Tables',
  difficulty: 2,
  pages: [
    {
      title: 'Forms',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms',
    },
    {
      title: 'Tables',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics',
    },
    {
      title: 'Learn Forms',
      url: 'https://web.dev/learn/forms/',
    },
  ],
};

export const PATH_HTML: Path = {
  title: 'HTML',
  number: 1,
  description:
    'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages and web applications. With Cascading Style Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  chapters: [CHAPTER_Basics, CHAPTER_Semantics, CHAPTER_FormsTables],
};

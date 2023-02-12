import type { Chapter, Path } from '~/sources';

const CHAPTER_Basics: Chapter = {
  title: 'Basics',
  difficulty: 0,
  pages: [
    {
      title: 'What is CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS',
    },
    {
      title: 'Applying CSS to HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured',
    },
    {
      title: 'Learn CSS',
      url: 'https://web.dev/learn/css/',
    },
  ],
};

const CHAPTER_Display: Chapter = {
  title: 'Display Type and Blocks of Styling',
  difficulty: 1,
  pages: [
    {
      title: 'The Box Model',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model',
    },
    {
      title: 'Selectors',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors',
    },
    {
      title: 'CSS Specificity',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
    },
    {
      title: 'Overflowing Content',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content',
    },
    {
      title: 'More on the Topic',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks',
    },
  ],
};

const CHAPTER_Layouting: Chapter = {
  title: 'Layouting',
  difficulty: 1,
  pages: [
    {
      title: 'Normal Flow',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow',
    },
    {
      title: 'Learn Flexbox with Flexbox Froggy',
      url: 'https://flexboxfroggy.com',
    },
    {
      title: 'Complete Guide to Flexbox',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    },
    {
      title: 'Learn CSS Grid',
      url: 'https://learncssgrid.com',
    },
    {
      title: 'Complete Guide to Grid',
      url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
    },
  ],
};

const CHAPTER_Responsive: Chapter = {
  title: 'Responsive Websites',
  difficulty: 2,
  pages: [
    {
      title: 'Responsive Web Design',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
    },
    {
      title: 'Using Media Queries',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries',
    },
    {
      title: 'Learn Responsive Design',
      url: 'https://web.dev/learn/design/',
    },
    {
      title: 'Responsive Images',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images',
    },
    {
      title: 'Responsive Web Design Basics',
      url: 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/',
    },
    {
      title: 'Responsive Web Design',
      url: 'https://webflow.com/blog/responsive-web-design',
    },
  ],
};

export const PATH_CSS: Path = {
  title: 'CSS',
  number: 3,
  description: 'Learn the basics of CSS.',
  chapters: [
    CHAPTER_Basics,
    CHAPTER_Display,
    CHAPTER_Layouting,
    CHAPTER_Responsive,
  ],
};

import { Topic } from '.'; 

export const NextJS: Topic = {
  topic: 'Next.js',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 300,
  questions: [
    {
      question: 'What is the main advantage of using Next.js over plain React?',
      choices: ['Server-side rendering', 'Built-in routing', 'API routes', 'All of the above'],
      type: 'MCQs',
      correctAnswers: ['All of the above'],
      score: 1,
    },
    {
      question: 'Next.js is built on top of React.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
    {
      question: 'Which of these are valid Next.js features?',
      choices: [
        'Static Site Generation (SSG)',
        'Server Side Rendering (SSR)',
        'Incremental Static Regeneration (ISR)',
        'All of the above'
      ],
      type: 'MCQs',
      correctAnswers: ['All of the above'],
      score: 1,
    },
    {
      question: 'Where should you put global CSS files in a Next.js project?',
      choices: ['_app.js', '_document.js', 'pages/styles/', 'public/css/'],
      type: 'MCQs',
      correctAnswers: ['_app.js'],
      score: 1,
    },
    {
      question: 'What is the correct way to create a dynamic route in Next.js?',
      choices: ['pages/[id].js', 'pages/id.js', 'pages/dynamic/id.js', 'pages/_dynamic.js'],
      type: 'MCQs',
      correctAnswers: ['pages/[id].js'],
      score: 1,
    },
    {
      question: 'Next.js API routes are Node.js serverless functions.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
    {
      question: 'Which command creates a new Next.js project?',
      choices: ['npx create-next-app', 'npm init next-app', 'yarn create next', 'npm install next'],
      type: 'MCQs',
      correctAnswers: ['npx create-next-app'],
      score: 1,
    },
    {
      question: 'What does ISR stand for in Next.js?',
      choices: [
        'Incremental Static Regeneration',
        'Internal State Reducer',
        'Integrated Style Rules',
        'Instant Server Response'
      ],
      type: 'MCQs',
      correctAnswers: ['Incremental Static Regeneration'],
      score: 1,
    },
    {
      question: 'Which of these are valid Next.js data fetching methods?',
      choices: [
        'getStaticProps',
        'getServerSideProps',
        'getStaticPaths',
        'All of the above'
      ],
      type: 'MAQs',
      correctAnswers: ['getStaticProps', 'getServerSideProps', 'getStaticPaths'],
      score: 1,
    },
    {
      question: 'Next.js supports TypeScript out of the box.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
  ],
};

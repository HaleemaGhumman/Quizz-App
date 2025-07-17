import { Topic } from '.';

export const GraphQL: Topic = {
  topic: 'GraphQL',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 300,
  questions: [
    {
      question: 'What is GraphQL primarily used for?',
      choices: [
        'Database management',
        'API query language',
        'State management',
        'CSS preprocessing'
      ],
      type: 'MCQs',
      correctAnswers: ['API query language'],
      score: 1,
    },
    {
      question: 'Who developed GraphQL?',
      choices: [
        'Google',
        'Microsoft',
        'Facebook',
        'Netflix'
      ],
      type: 'MCQs',
      correctAnswers: ['Facebook'],
      score: 1,
    },
    {
      question: 'Which of the following is true about GraphQL queries?',
      choices: [
        'They return all fields by default',
        'They are written in XML',
        'They return only the data requested',
        'They are compiled into SQL'
      ],
      type: 'MCQs',
      correctAnswers: ['They return only the data requested'],
      score: 1,
    },
    {
      question: 'What does a GraphQL mutation do?',
      choices: [
        'Fetches data',
        'Changes data on the server',
        'Deletes a GraphQL schema',
        'Refreshes the client cache'
      ],
      type: 'MCQs',
      correctAnswers: ['Changes data on the server'],
      score: 1,
    },
    {
      question: 'What type of response does a GraphQL server return?',
      choices: [
        'Plain text',
        'HTML',
        'JSON',
        'XML'
      ],
      type: 'MCQs',
      correctAnswers: ['JSON'],
      score: 1,
    },
    {
      question: 'Which keyword is used to define input parameters in a GraphQL query?',
      choices: [
        'input',
        'params',
        'variables',
        'args'
      ],
      type: 'MCQs',
      correctAnswers: ['variables'],
      score: 1,
    },
    {
      question: 'What is a resolver in GraphQL?',
      choices: [
        'A query validator',
        'A tool to compile queries',
        'A function that returns data for a field',
        'A schema formatter'
      ],
      type: 'MCQs',
      correctAnswers: ['A function that returns data for a field'],
      score: 1,
    },
    {
      question: 'How is a GraphQL schema defined?',
      choices: [
        'Using JSON',
        'Using Schema Definition Language (SDL)',
        'Using SQL commands',
        'Using RESTful conventions'
      ],
      type: 'MCQs',
      correctAnswers: ['Using Schema Definition Language (SDL)'],
      score: 1,
    },
    {
      question: 'Which operation is NOT part of GraphQL?',
      choices: [
        'Query',
        'Mutation',
        'Subscription',
        'Indexing'
      ],
      type: 'MCQs',
      correctAnswers: ['Indexing'],
      score: 1,
    },
    {
      question: 'What is the benefit of GraphQL over REST?',
      choices: [
        'Strict URL structure',
        'Single endpoint and flexible data fetching',
        'Better CSS integration',
        'Built-in authentication'
      ],
      type: 'MCQs',
      correctAnswers: ['Single endpoint and flexible data fetching'],
      score: 1,
    },
  ],
};

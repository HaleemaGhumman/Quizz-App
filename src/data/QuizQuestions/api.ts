import { Topic } from '.';

export const Restapi: Topic = {
  topic: 'REST API',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 300,
  questions: [
    {
      question: 'What does REST stand for?',
      choices: [
        'Representational State Transfer',
        'Remote Execution of State Transfer',
        'Representational Syntax Tree',
        'Remote State Transmission'
      ],
      type: 'MCQs',
      correctAnswers: ['Representational State Transfer'],
      score: 1,
    },
    {
      question: 'Which HTTP method is used to retrieve data from a server?',
      choices: [
        'POST',
        'PUT',
        'GET',
        'DELETE'
      ],
      type: 'MCQs',
      correctAnswers: ['GET'],
      score: 1,
    },
    {
      question: 'Which HTTP method is idempotent and used to update resources?',
      choices: [
        'POST',
        'PATCH',
        'PUT',
        'CONNECT'
      ],
      type: 'MCQs',
      correctAnswers: ['PUT'],
      score: 1,
    },
    {
      question: 'What is the typical format of data exchanged in REST APIs?',
      choices: [
        'HTML',
        'JSON',
        'XML',
        'CSV'
      ],
      type: 'MCQs',
      correctAnswers: ['JSON'],
      score: 1,
    },
    {
      question: 'What status code indicates a successful GET request?',
      choices: [
        '201',
        '404',
        '200',
        '500'
      ],
      type: 'MCQs',
      correctAnswers: ['200'],
      score: 1,
    },
    {
      question: 'What status code represents "Not Found" in REST APIs?',
      choices: [
        '301',
        '404',
        '400',
        '409'
      ],
      type: 'MCQs',
      correctAnswers: ['404'],
      score: 1,
    },
    {
      question: 'Which REST principle dictates that the server should not store client state?',
      choices: [
        'Statelessness',
        'Layered System',
        'Uniform Interface',
        'Cacheability'
      ],
      type: 'MCQs',
      correctAnswers: ['Statelessness'],
      score: 1,
    },
    {
      question: 'What is the purpose of the OPTIONS HTTP method?',
      choices: [
        'To update an existing resource',
        'To request allowed communication options',
        'To delete a resource',
        'To upload a file'
      ],
      type: 'MCQs',
      correctAnswers: ['To request allowed communication options'],
      score: 1,
    },
    {
      question: 'What is a RESTful route for accessing a user with ID 7?',
      choices: [
        '/get-user?id=7',
        '/user/7',
        '/user?id=7',
        '/users?id=7'
      ],
      type: 'MCQs',
      correctAnswers: ['/user/7'],
      score: 1,
    },
    {
      question: 'Which HTTP header is commonly used to indicate the data format in REST requests?',
      choices: [
        'Authorization',
        'Accept',
        'Content-Type',
        'X-Requested-With'
      ],
      type: 'MCQs',
      correctAnswers: ['Content-Type'],
      score: 1,
    },
  ],
};

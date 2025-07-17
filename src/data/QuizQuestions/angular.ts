import { Topic } from '.';

export const Angular: Topic = {
  topic: 'Angular',
  level: 'Advanced',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 300,
  questions: [
    {
      question: 'What language is Angular primarily written in?',
      choices: [
        'JavaScript',
        'Dart',
        'TypeScript',
        'CoffeeScript'
      ],
      type: 'MCQs',
      correctAnswers: ['TypeScript'],
      score: 1,
    },
    {
      question: 'What is the purpose of Angular decorators?',
      choices: [
        'To apply styles',
        'To define metadata for classes',
        'To validate forms',
        'To create animations'
      ],
      type: 'MCQs',
      correctAnswers: ['To define metadata for classes'],
      score: 1,
    },
    {
      question: 'What is the main purpose of Angular’s `NgModule`?',
      choices: [
        'To add JavaScript to HTML',
        'To group components, directives, and pipes',
        'To manage database connections',
        'To define services'
      ],
      type: 'MCQs',
      correctAnswers: ['To group components, directives, and pipes'],
      score: 1,
    },
    {
      question: 'Which RxJS operator is commonly used to handle HTTP response streams?',
      choices: [
        'mergeMap',
        'switchMap',
        'map',
        'filter'
      ],
      type: 'MCQs',
      correctAnswers: ['map'],
      score: 1,
    },
    {
      question: 'What does the Angular CLI command `ng build --prod` do?',
      choices: [
        'Builds the app in development mode',
        'Builds the app and starts a dev server',
        'Builds the app in production mode with optimizations',
        'Only compiles TypeScript files'
      ],
      type: 'MCQs',
      correctAnswers: ['Builds the app in production mode with optimizations'],
      score: 1,
    },
    {
      question: 'What is the purpose of Angular’s `Zone.js`?',
      choices: [
        'To handle routing',
        'To track async operations and trigger change detection',
        'To define module zones',
        'To manage state globally'
      ],
      type: 'MCQs',
      correctAnswers: ['To track async operations and trigger change detection'],
      score: 1,
    },
    {
      question: 'How does Angular implement dependency injection?',
      choices: [
        'Using service constructors only',
        'Through decorators and providers',
        'With Redux-like global stores',
        'Using HTML attributes'
      ],
      type: 'MCQs',
      correctAnswers: ['Through decorators and providers'],
      score: 1,
    },
    {
      question: 'Which lifecycle hook is called when the component is about to be destroyed?',
      choices: [
        'ngOnInit',
        'ngAfterViewInit',
        'ngOnChanges',
        'ngOnDestroy'
      ],
      type: 'MCQs',
      correctAnswers: ['ngOnDestroy'],
      score: 1,
    },
    {
      question: 'What does the `async` pipe do in Angular templates?',
      choices: [
        'It makes a function asynchronous',
        'It manually subscribes to Observables',
        'It automatically subscribes and unsubscribes to Observables/Promises',
        'It pauses template rendering'
      ],
      type: 'MCQs',
      correctAnswers: ['It automatically subscribes and unsubscribes to Observables/Promises'],
      score: 1,
    },
    {
      question: 'What is the Angular Ivy compiler?',
      choices: [
        'A third-party plugin',
        'A testing library',
        'The default Angular rendering engine introduced in Angular 9',
        'An old AngularJS compiler'
      ],
      type: 'MCQs',
      correctAnswers: ['The default Angular rendering engine introduced in Angular 9'],
      score: 1,
    },
  ],
};

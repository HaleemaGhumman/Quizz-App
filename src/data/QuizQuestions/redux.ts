import { Topic } from '.';

export const Redux: Topic = {
  topic: 'Redux',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 300,
  questions: [
    {
      question: 'What is the main purpose of Redux?',
      choices: [
        'To manage application state',
        'To handle component styling',
        'To replace React components',
        'To manage API requests'
      ],
      type: 'MCQs',
      correctAnswers: ['To manage application state'],
      score: 1,
    },
    {
      question: 'Which of the following is NOT a principle of Redux?',
      choices: [
        'Single source of truth',
        'State is read-only',
        'Changes are made with pure functions',
        'Direct DOM manipulation'
      ],
      type: 'MCQs',
      correctAnswers: ['Direct DOM manipulation'],
      score: 1,
    },
    {
      question: 'Which function in Redux is used to send actions to the store?',
      choices: [
        'getState()',
        'subscribe()',
        'dispatch()',
        'combineReducers()'
      ],
      type: 'MCQs',
      correctAnswers: ['dispatch()'],
      score: 1,
    },
    {
      question: 'What does a reducer function do in Redux?',
      choices: [
        'Directly modifies the state',
        'Returns a new state based on the action',
        'Sends an API request',
        'Renders a React component'
      ],
      type: 'MCQs',
      correctAnswers: ['Returns a new state based on the action'],
      score: 1,
    },
    {
      question: 'Which of the following best describes Redux middleware?',
      choices: [
        'It allows Redux to work with local storage',
        'It allows writing async logic that interacts with the store',
        'It renders UI components',
        'It replaces the reducer logic'
      ],
      type: 'MCQs',
      correctAnswers: ['It allows writing async logic that interacts with the store'],
      score: 1,
    },
    {
      question: 'Which package is commonly used as middleware for handling asynchronous actions in Redux?',
      choices: [
        'redux-promise',
        'redux-thunk',
        'redux-async',
        'redux-middleware'
      ],
      type: 'MCQs',
      correctAnswers: ['redux-thunk'],
      score: 1,
    },
    {
      question: 'How many reducers can a Redux store have?',
      choices: [
        'Only one',
        'Unlimited, but they must be combined',
        'Depends on the version of Redux',
        'Two maximum'
      ],
      type: 'MCQs',
      correctAnswers: ['Unlimited, but they must be combined'],
      score: 1,
    },
    {
      question: 'What is the role of the `combineReducers` function in Redux?',
      choices: [
        'To merge multiple stores',
        'To create asynchronous actions',
        'To combine multiple reducer functions into one',
        'To apply middleware'
      ],
      type: 'MCQs',
      correctAnswers: ['To combine multiple reducer functions into one'],
      score: 1,
    },
    {
      question: 'What does the Redux store’s `getState()` method do?',
      choices: [
        'Updates the state',
        'Resets the state',
        'Retrieves the current state tree',
        'Dispatches an action'
      ],
      type: 'MCQs',
      correctAnswers: ['Retrieves the current state tree'],
      score: 1,
    },
    {
      question: 'Which lifecycle or hook is commonly used in React to dispatch an action when a component loads?',
      choices: [
        'componentDidMount or useEffect',
        'componentWillUnmount or useRef',
        'useState or componentDidUpdate',
        'render or useMemo'
      ],
      type: 'MCQs',
      correctAnswers: ['componentDidMount or useEffect'],
      score: 1,
    },
  ],
};

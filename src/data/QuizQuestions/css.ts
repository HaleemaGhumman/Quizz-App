import { Topic } from '.'

export const CSS: Topic = {
  topic: 'CSS',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 300,
  questions: [
    {
      question: 'What does CSS stand for?',
      choices: [
        'Cascading Style Sheets',
        'Creative Style System',
        'Computer Style Sheets',
        'Colorful Style Syntax'
      ],
      type: 'MCQs',
      correctAnswers: ['Cascading Style Sheets'],
      score: 1,
    },
    {
      question: 'Which property is used to change the background color?',
      choices: ['color', 'bgcolor', 'background-color', 'background'],
      type: 'MCQs',
      correctAnswers: ['background-color'],
      score: 1,
    },
    {
      question: 'CSS can be written in inline, internal, and external ways.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
    {
      question: 'Which of these are valid position values in CSS?',
      choices: ['static', 'relative', 'absolute', 'sticky'],
      type: 'MAQs',
      correctAnswers: ['static', 'relative', 'absolute', 'sticky'],
      score: 1,
    },
    {
      question: 'How do you make a list not display bullet points?',
      choices: [
        'list-style-type: none;',
        'text-decoration: none;',
        'display: inline;',
        'list-style: hide;'
      ],
      type: 'MCQs',
      correctAnswers: ['list-style-type: none;'],
      score: 1,
    },
    {
      question: 'Which unit is relative to the font-size of the element?',
      choices: ['px', 'em', '%', 'vh'],
      type: 'MCQs',
      correctAnswers: ['em'],
      score: 1,
    },
    {
      question: 'ID selectors in CSS start with a # symbol.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
    {
      question: 'Which CSS properties control the size of an element?',
      choices: ['width', 'height', 'font-size', 'border'],
      type: 'MAQs',
      correctAnswers: ['width', 'height'],
      score: 1,
    },
    {
      question: 'What is the default value of the position property?',
      choices: ['static', 'absolute', 'relative', 'fixed'],
      type: 'MCQs',
      correctAnswers: ['static'],
      score: 1,
    },
    {
      question: 'You can use multiple classes on an HTML element.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
  ],
};

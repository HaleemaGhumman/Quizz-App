export const PHP = {
    topic: 'PHP',
    level: 'Beginner',
    totalQuestions: 10,
    totalScore: 10,
    totalTime: 300,
    questions: [
        {
            question: 'What does PHP stand for?',
            choices: [
                'Personal Home Page',
                'Private Hypertext Processor',
                'PHP: Hypertext Preprocessor',
                'Preprocessor Home Page'
            ],
            type: 'MCQs',
            correctAnswers: ['PHP: Hypertext Preprocessor'],
            score: 1,
        },
        {
            question: 'PHP is a server-side scripting language.',
            choices: ['True', 'False'],
            type: 'boolean',
            correctAnswers: ['True'],
            score: 1,
        },
        {
            question: 'Which of these are valid PHP variables?',
            choices: ['$name', '$_value', 'value$', '$123name'],
            type: 'MAQs',
            correctAnswers: ['$name', '$_value'],
            score: 1,
        },
        {
            question: 'How do you start a PHP block?',
            choices: ['<php>', '<?php', '<script php>', '<?php script'],
            type: 'MCQs',
            correctAnswers: ['<?php'],
            score: 1,
        },
        {
            question: 'Which function is used to output text in PHP?',
            choices: ['echo()', 'print()', 'console.log()', 'write()'],
            type: 'MAQs',
            correctAnswers: ['echo()', 'print()'],
            score: 1,
        },
        {
            question: 'Which symbol is used for comments in PHP?',
            choices: ['//', '#', '/* */', '<!-- -->'],
            type: 'MAQs',
            correctAnswers: ['//', '#', '/* */'],
            score: 1,
        },
        {
            question: 'PHP is a loosely typed language.',
            choices: ['True', 'False'],
            type: 'boolean',
            correctAnswers: ['True'],
            score: 1,
        },
        {
            question: 'How do you declare an array in PHP?',
            choices: [
                'array()',
                '[]',
                'array[]',
                'new Array()'
            ],
            type: 'MAQs',
            correctAnswers: ['array()', '[]'],
            score: 1,
        },
        {
            question: 'Which superglobal is used to collect form data sent with GET method?',
            choices: ['$_GET', '$_POST', '$_REQUEST', '$_FORM'],
            type: 'MCQs',
            correctAnswers: ['$_GET'],
            score: 1,
        },
        {
            question: 'What does the `isset()` function do?',
            choices: [
                'Checks if a variable is set and is not NULL',
                'Initializes a variable',
                'Returns type of variable',
                'Deletes a variable'
            ],
            type: 'MCQs',
            correctAnswers: ['Checks if a variable is set and is not NULL'],
            score: 1,
        },
    ],
};

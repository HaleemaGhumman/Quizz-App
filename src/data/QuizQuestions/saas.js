export const Sass = {
    topic: 'SASS/SCSS',
    level: 'Beginner',
    totalQuestions: 10,
    totalScore: 10,
    totalTime: 300,
    questions: [
        {
            question: 'What does SASS stand for?',
            choices: [
                'Syntactically Awesome Style Sheets',
                'Simple Access Style System',
                'Styled Application Syntax Sheets',
                'Systematic Approach to Styling'
            ],
            type: 'MCQs',
            correctAnswers: ['Syntactically Awesome Style Sheets'],
            score: 1,
        },
        {
            question: 'What is the file extension for SASS (indented syntax)?',
            choices: ['.scss', '.css', '.sass', '.style'],
            type: 'MCQs',
            correctAnswers: ['.sass'],
            score: 1,
        },
        {
            question: 'What is the file extension for SCSS?',
            choices: ['.scss', '.sass', '.csss', '.sss'],
            type: 'MCQs',
            correctAnswers: ['.scss'],
            score: 1,
        },
        {
            question: 'Which of the following is a feature of SASS?',
            choices: [
                'Media queries only',
                'JavaScript support',
                'Variables, nesting, mixins, inheritance',
                'HTML templating'
            ],
            type: 'MCQs',
            correctAnswers: ['Variables, nesting, mixins, inheritance'],
            score: 1,
        },
        {
            question: 'How do you define a variable in SCSS?',
            choices: [
                '$primaryColor = red;',
                '@primaryColor: red;',
                '--primaryColor: red;',
                '$primaryColor: red;'
            ],
            type: 'MCQs',
            correctAnswers: ['$primaryColor: red;'],
            score: 1,
        },
        {
            question: 'Which command is used to compile SCSS into CSS?',
            choices: [
                'sass --compile style.scss style.css',
                'scss style.scss style.css',
                'sass style.scss style.css',
                'compile-scss style.scss style.css'
            ],
            type: 'MCQs',
            correctAnswers: ['sass style.scss style.css'],
            score: 1,
        },
        {
            question: 'What is nesting in SASS?',
            choices: [
                'Applying multiple background images',
                'Placing one selector inside another',
                'Creating HTML inside CSS',
                'Mixing JS with CSS'
            ],
            type: 'MCQs',
            correctAnswers: ['Placing one selector inside another'],
            score: 1,
        },
        {
            question: 'Which symbol is used for a mixin in SASS?',
            choices: ['@', '&', '#', '%'],
            type: 'MCQs',
            correctAnswers: ['@'],
            score: 1,
        },
        {
            question: 'How do you include a mixin named "button" in SCSS?',
            choices: [
                '@include button;',
                '@import button;',
                '@use button;',
                '@button include;'
            ],
            type: 'MCQs',
            correctAnswers: ['@include button;'],
            score: 1,
        },
        {
            question: 'Which feature allows reusing styles without repeating code in SASS?',
            choices: [
                'Inheritance',
                'Keyframes',
                'Float',
                'Selector chaining'
            ],
            type: 'MCQs',
            correctAnswers: ['Inheritance'],
            score: 1,
        },
    ],
};

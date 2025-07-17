export const JSON = {
    topic: 'JSON',
    level: 'Beginner',
    totalQuestions: 10,
    totalScore: 10,
    totalTime: 300,
    questions: [
        {
            question: 'What does JSON stand for?',
            choices: [
                'JavaScript Object Notation',
                'Java Syntax Object Notation',
                'JavaScript Oriented Notation',
                'Java Source Open Notation'
            ],
            type: 'MCQs',
            correctAnswers: ['JavaScript Object Notation'],
            score: 1,
        },
        {
            question: 'JSON is a lightweight data-interchange format.',
            choices: ['True', 'False'],
            type: 'boolean',
            correctAnswers: ['True'],
            score: 1,
        },
        {
            question: 'Which of the following are valid JSON data types?',
            choices: ['String', 'Number', 'Boolean', 'Function'],
            type: 'MAQs',
            correctAnswers: ['String', 'Number', 'Boolean'],
            score: 1,
        },
        {
            question: 'In JSON, keys must be enclosed in ___?',
            choices: ['double quotes', 'single quotes', 'no quotes', 'angle brackets'],
            type: 'MCQs',
            correctAnswers: ['double quotes'],
            score: 1,
        },
        {
            question: 'JSON arrays are written inside:',
            choices: ['[]', '{}', '()', '<>'],
            type: 'MCQs',
            correctAnswers: ['[]'],
            score: 1,
        },
        {
            question: 'JSON objects are enclosed within curly braces {}.',
            choices: ['True', 'False'],
            type: 'boolean',
            correctAnswers: ['True'],
            score: 1,
        },
        {
            question: 'Which of the following is a correct JSON format?',
            choices: [
                '{"name": "John"}',
                "{'name': 'John'}",
                '{name: "John"}',
                '[name: John]'
            ],
            type: 'MCQs',
            correctAnswers: ['{"name": "John"}'],
            score: 1,
        },
        {
            question: 'Can JSON data be nested?',
            choices: ['Yes', 'No'],
            type: 'boolean',
            correctAnswers: ['Yes'],
            score: 1,
        },
        {
            question: 'Which method is used to convert a JSON string to a JavaScript object?',
            choices: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.decode()'],
            type: 'MCQs',
            correctAnswers: ['JSON.parse()'],
            score: 1,
        },
        {
            question: 'Which method converts a JavaScript object into a JSON string?',
            choices: ['JSON.stringify()', 'JSON.parse()', 'JSON.encode()', 'JSON.convert()'],
            type: 'MCQs',
            correctAnswers: ['JSON.stringify()'],
            score: 1,
        },
    ],
};

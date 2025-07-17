export const NodeJS = {
    topic: 'Node.js',
    level: 'Intermediate',
    totalQuestions: 10,
    totalScore: 10,
    totalTime: 300,
    questions: [
        {
            question: 'What runtime is Node.js built on?',
            choices: ['Chrome V8', 'SpiderMonkey', 'JavaScriptCore', 'Rhino'],
            type: 'MCQs',
            correctAnswers: ['Chrome V8'],
            score: 1,
        },
        {
            question: 'Which module is used to create a web server in Node.js?',
            choices: ['url', 'http', 'fs', 'net'],
            type: 'MCQs',
            correctAnswers: ['http'],
            score: 1,
        },
        {
            question: 'Which of the following is true about Node.js?',
            choices: [
                'It is synchronous by default',
                'It runs in the browser',
                'It uses a non-blocking I/O model',
                'It is built with Python'
            ],
            type: 'MCQs',
            correctAnswers: ['It uses a non-blocking I/O model'],
            score: 1,
        },
        {
            question: 'How do you import a module in Node.js (CommonJS)?',
            choices: [
                'import module from "module"',
                '#include module',
                'require("module")',
                'use module'
            ],
            type: 'MCQs',
            correctAnswers: ['require("module")'],
            score: 1,
        },
        {
            question: 'What does the `fs` module in Node.js deal with?',
            choices: [
                'File system operations',
                'HTTP routing',
                'Form submissions',
                'File styling'
            ],
            type: 'MCQs',
            correctAnswers: ['File system operations'],
            score: 1,
        },
        {
            question: 'What is the use of `package.json` in a Node.js project?',
            choices: [
                'To run SQL queries',
                'To list project dependencies and metadata',
                'To define server routes',
                'To store HTML templates'
            ],
            type: 'MCQs',
            correctAnswers: ['To list project dependencies and metadata'],
            score: 1,
        },
        {
            question: 'Which of these will install a Node.js package globally?',
            choices: [
                'npm install package',
                'npm install --dev package',
                'npm install -g package',
                'npm get package'
            ],
            type: 'MCQs',
            correctAnswers: ['npm install -g package'],
            score: 1,
        },
        {
            question: 'Which method is used to read files asynchronously in Node.js?',
            choices: [
                'fs.readFileSync()',
                'fs.read()',
                'fs.readFile()',
                'fs.openFile()'
            ],
            type: 'MCQs',
            correctAnswers: ['fs.readFile()'],
            score: 1,
        },
        {
            question: 'What is the purpose of `eventEmitter` in Node.js?',
            choices: [
                'To emit HTTP headers',
                'To create custom events and listeners',
                'To parse event logs',
                'To synchronize threads'
            ],
            type: 'MCQs',
            correctAnswers: ['To create custom events and listeners'],
            score: 1,
        },
        {
            question: 'Which environment variable sets the running mode of a Node.js application?',
            choices: [
                'NODE_VERSION',
                'NODE_CONFIG',
                'NODE_ENV',
                'ENV_NODE'
            ],
            type: 'MCQs',
            correctAnswers: ['NODE_ENV'],
            score: 1,
        },
    ],
};

export const Express = {
    topic: 'Express.js',
    level: 'Intermediate',
    totalQuestions: 10,
    totalScore: 10,
    totalTime: 300,
    questions: [
        {
            question: 'Express.js is a framework for which runtime?',
            choices: [
                'Node.js',
                'Deno',
                'Browser',
                'Java'
            ],
            type: 'MCQs',
            correctAnswers: ['Node.js'],
            score: 1,
        },
        {
            question: 'Which method is used to define a GET route in Express?',
            choices: [
                'app.route()',
                'app.get()',
                'app.fetch()',
                'app.listen()'
            ],
            type: 'MCQs',
            correctAnswers: ['app.get()'],
            score: 1,
        },
        {
            question: 'What does `app.listen()` do in an Express app?',
            choices: [
                'Connects to a database',
                'Listens for incoming requests on a specified port',
                'Renders HTML files',
                'Closes the server'
            ],
            type: 'MCQs',
            correctAnswers: ['Listens for incoming requests on a specified port'],
            score: 1,
        },
        {
            question: 'Which middleware is commonly used to parse JSON bodies in requests?',
            choices: [
                'express.static()',
                'body-parser',
                'express.router()',
                'cookie-parser'
            ],
            type: 'MCQs',
            correctAnswers: ['body-parser'],
            score: 1,
        },
        {
            question: 'What is middleware in Express?',
            choices: [
                'A type of database',
                'A function that handles requests and responses',
                'An HTML preprocessor',
                'A port listener'
            ],
            type: 'MCQs',
            correctAnswers: ['A function that handles requests and responses'],
            score: 1,
        },
        {
            question: 'How can you serve static files in Express?',
            choices: [
                'Using express.static() middleware',
                'Using app.route()',
                'Using fs.readFileSync()',
                'Using body-parser'
            ],
            type: 'MCQs',
            correctAnswers: ['Using express.static() middleware'],
            score: 1,
        },
        {
            question: 'What does `req.params` return in Express?',
            choices: [
                'Query string values',
                'Route parameter values',
                'Headers only',
                'Request body'
            ],
            type: 'MCQs',
            correctAnswers: ['Route parameter values'],
            score: 1,
        },
        {
            question: 'How do you define a dynamic route in Express for a user ID?',
            choices: [
                'app.get("/user/:id")',
                'app.route("/user/id")',
                'app.user("/get/:id")',
                'app.get("/user/id?")'
            ],
            type: 'MCQs',
            correctAnswers: ['app.get("/user/:id")'],
            score: 1,
        },
        {
            question: 'Which method is used to handle POST requests in Express?',
            choices: [
                'app.put()',
                'app.fetch()',
                'app.post()',
                'app.send()'
            ],
            type: 'MCQs',
            correctAnswers: ['app.post()'],
            score: 1,
        },
        {
            question: 'What is the correct way to send a JSON response in Express?',
            choices: [
                'res.write(json)',
                'res.json(data)',
                'res.sendFile(json)',
                'res.send(data, type="json")'
            ],
            type: 'MCQs',
            correctAnswers: ['res.json(data)'],
            score: 1,
        },
    ],
};

export const Git = {
    topic: 'Git',
    level: 'Intermediate',
    totalQuestions: 10,
    totalScore: 10,
    totalTime: 300,
    questions: [
        {
            question: 'What is the command to check the current Git status?',
            choices: ['git status', 'git log', 'git diff', 'git current'],
            type: 'MCQs',
            correctAnswers: ['git status'],
            score: 1,
        },
        {
            question: 'What does `git clone` do?',
            choices: [
                'Commits changes',
                'Creates a new repo',
                'Copies a remote repo locally',
                'Deletes a branch'
            ],
            type: 'MCQs',
            correctAnswers: ['Copies a remote repo locally'],
            score: 1,
        },
        {
            question: 'Which command stages files for commit?',
            choices: ['git commit', 'git add', 'git init', 'git push'],
            type: 'MCQs',
            correctAnswers: ['git add'],
            score: 1,
        },
        {
            question: 'Which Git command shows the commit history?',
            choices: ['git status', 'git show', 'git log', 'git init'],
            type: 'MCQs',
            correctAnswers: ['git log'],
            score: 1,
        },
        {
            question: 'What does `git branch` do?',
            choices: ['Deletes a repo', 'Lists branches', 'Pushes changes', 'Commits files'],
            type: 'MCQs',
            correctAnswers: ['Lists branches'],
            score: 1,
        },
        {
            question: 'What command creates a new branch?',
            choices: ['git new', 'git checkout', 'git branch <name>', 'git init'],
            type: 'MCQs',
            correctAnswers: ['git branch <name>'],
            score: 1,
        },
        {
            question: 'Which command switches to another branch?',
            choices: ['git clone', 'git branch', 'git checkout <branch>', 'git log'],
            type: 'MCQs',
            correctAnswers: ['git checkout <branch>'],
            score: 1,
        },
        {
            question: 'How do you merge a branch in Git?',
            choices: ['git connect', 'git update', 'git merge <branch>', 'git fork'],
            type: 'MCQs',
            correctAnswers: ['git merge <branch>'],
            score: 1,
        },
        {
            question: 'What is a Git conflict?',
            choices: [
                'Error on push',
                'When same file is changed in 2 branches',
                'Repo deletion',
                'Branch rename error'
            ],
            type: 'MCQs',
            correctAnswers: ['When same file is changed in 2 branches'],
            score: 1,
        },
        {
            question: 'How do you push changes to a remote repo?',
            choices: ['git fetch', 'git update', 'git push', 'git clone'],
            type: 'MCQs',
            correctAnswers: ['git push'],
            score: 1,
        },
    ],
};

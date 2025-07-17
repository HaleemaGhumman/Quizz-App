// src/questions.ts
import { HTML } from './HTML'
import { CSS } from './css'
import { javascript } from './javascript'
import { react } from './react'
import { PHP } from './php'
import { Bootstrap } from './bootstrap'
import { JSON } from './json'
import { TailwindCSS } from './tailwind'
import { NextJS } from './next'
import { TypeScript } from './typescript'
import { Redux } from './redux'
import { Sass } from './saas'
import { GraphQL } from './graphql'
import { Angular } from './angular'
import { Restapi } from './api'
import { Express } from './express'
import { Mongodb } from './mongo'
import { NodeJS } from './node'
import { Postgresql} from './postgresql'
import { Vue} from './vue'
import { Git} from './git'
import { Docker} from './docker'
// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple
type Choice = string;
type CorrectAnswers = string[];
export type Question = {
  question: string;
  choices: Choice[];
  type: 'MCQs' | 'MAQs' | 'boolean';
  correctAnswers: CorrectAnswers;
  score: number;
  code?: string;
  image?: string;
  explanation?: string;
};
export type Topic = {
  topic: string;
  level: string;
  totalQuestions: number;
  totalScore: number;
  totalTime: number; // in minutes
  questions: Question[];
};

export const quiz: Record<string, Topic> = {
  HTML,
  CSS,
  JavaScript: javascript,
  React: react,
  PHP,
  Bootstrap,
  'Next.js': NextJS,  // Changed to match the title in quizTopics
  JSON,
  Tailwind: TailwindCSS,
TypeScript: TypeScript,
Redux: Redux,
GraphQL:GraphQL,
Sass: Sass,
Angular: Angular,
'REST API': Restapi,
Express: Express,
Mongodb: Mongodb,
'Node.js': NodeJS,
'PostgreSQL': Postgresql,
'Vue.js': Vue,
Git: Git,
Docker:Docker
}


// src/questions.ts
import { HTML } from './HTML';
import { CSS } from './css';
import { javascript } from './javascript';
import { react } from './react';
import { PHP } from './php';
import { Bootstrap } from './bootstrap';
import { JSON } from './json';
import { TailwindCSS } from './tailwind';
import { NextJS } from './next';
import { TypeScript } from './typescript';
import { Redux } from './redux';
import { Sass } from './saas';
import { GraphQL } from './graphql';
import { Angular } from './angular';
import { Restapi } from './api';
import { Express } from './express';
import { Mongodb } from './mongo';
import { NodeJS } from './node';
import { Postgresql } from './postgresql';
import { Vue } from './vue';
import { Git } from './git';
import { Docker } from './docker';
export const quiz = {
    HTML,
    CSS,
    JavaScript: javascript,
    React: react,
    PHP,
    Bootstrap,
    'Next.js': NextJS, // Changed to match the title in quizTopics
    JSON,
    Tailwind: TailwindCSS,
    TypeScript: TypeScript,
    Redux: Redux,
    GraphQL: GraphQL,
    Sass: Sass,
    Angular: Angular,
    'REST API': Restapi,
    Express: Express,
    Mongodb: Mongodb,
    'Node.js': NodeJS,
    'PostgreSQL': Postgresql,
    'Vue.js': Vue,
    Git: Git,
    Docker: Docker
};

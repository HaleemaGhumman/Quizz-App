// src/data/quizTopics.tsx
import { ReactNode } from 'react'
import HTML from '../assets/icons/html5.svg?react'
import CSS from '../assets/icons/css-3.svg?react'
import JavaScript from '../assets/icons/javascript.svg?react'
import PHP from '../assets/icons/php.svg?react'
import ReactIcon from '../assets/icons/react.svg?react'
import Next from '../assets/icons/nextdotjs.svg?react'
import Bootstrap from '../assets/icons/bootstrap.svg?react'
import Tailwind from '../assets/icons/tailwindcss.svg?react'
import JSON from '../assets/icons/json.svg?react'
import Typescript from '../assets/icons/typescript.svg?react'
import Redux from '../assets/icons/redux.svg?react'
import GraphQL from '../assets/icons/graphql.svg?react'
import Sass from '../assets/icons/sass.svg?react'
import Angular from '../assets/icons/angular.svg?react'
import RestApi from '../assets/icons/fastapi.svg?react'
import Express from '../assets/icons/express.svg?react'
import Mongodb from '../assets/icons/mongodb.svg?react'
import Node from '../assets/icons/nodedotjs.svg?react'
import Postgresql from '../assets/icons/postgresql.svg?react'
import Vue from '../assets/icons/vuedotjs.svg?react'
import Git from '../assets/icons/git.svg?react'
import Docker from '../assets/icons/docker.svg?react'
type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'HTML',
    icon: <HTML />,
  },
  {
    title: 'CSS',
    icon: <CSS className="w-5 h-5" />,
  },
  {
    title: 'JavaScript',
    icon: <JavaScript className="w-5 h-5" />,
  },
  {
    title: 'Bootstrap',
    icon: <Bootstrap />,
  },
  {
    title: 'PHP',
    icon: <PHP />,
  },
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'Next.js',
    icon: <Next />,
  },
  {
    title: 'Tailwind',
    icon: <Tailwind />,
  },
  {
    title: 'JSON',
    icon: <JSON />,
  },
  {
    title: 'TypeScript',  
    icon: <Typescript />,  
  },
  {
    title: 'Redux',
    icon: <Redux />,
  },
  {
    title: 'GraphQL',
    icon: <GraphQL />,
  },
  {
    title: 'Sass',
    icon: <Sass />,
  },
  {
    title: 'Angular',
    icon: <Angular />,
  },
  {
    title: 'REST API',
    icon: <RestApi />,
  },
  {
    title: 'Express',
    icon: <Express />,
  },
  {
    title: 'Mongodb',
    icon: <Mongodb />,
  },
  {
    title: 'Node.js',
    icon: <Node />,
  },
  {
    title: 'PostgreSQL',
    icon: <Postgresql />,
  },
  {
    title: 'Vue.js',
    icon: <Vue />,
  },
  {
    title: 'Git',
    icon: <Git />,
  },
  {
    title: 'Docker',
    icon: <Docker />,
  },
]
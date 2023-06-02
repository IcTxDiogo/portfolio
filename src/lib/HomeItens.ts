import { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface MenuItens {
  id: string
  content: ReactNode
  href: string
}

export interface BaseTechnology {
  id: string
  name: string
  icon: string
  description: string
  externalUrl: string
}

export const homeMenuItens: MenuItens[] = [
  {
    id: uuidv4(),
    content: 'Home',
    href: '/',
  },
  {
    id: uuidv4(),
    content: 'About',
    href: '/about',
  },
]

export const baseTechnology: BaseTechnology[] = [
  {
    id: uuidv4(),
    name: 'Typescript',
    icon: 'https://i.imgur.com/1d8yRcQ.png',
    description:
      'Typescript is a superset of Javascript, adding types to the language, that helps us write more structured and error-free code by providing static type checking',
    externalUrl: 'https://www.typescriptlang.org/',
  },
  {
    id: uuidv4(),
    name: 'React',
    icon: 'https://i.imgur.com/XoQtJi7.png',
    description:
      'React is a JavaScript library used for building user interfaces. It allows us to create reusable UI components and helps with managing the state of an application.',
    externalUrl: 'https://react.dev/',
  },
  {
    id: uuidv4(),
    name: 'Next.js',
    icon: 'https://i.imgur.com/tYTlIPW.png',
    description:
      'Next.js is a framework for building react Server component. It provides a streamlined development experience and optimized performance with focus on less js on client.',
    externalUrl: 'https://nextjs.org/',
  },
]

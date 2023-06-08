import Link from 'next/link'

import { Plus, BookLock, Globe, ChevronLeft } from 'lucide-react'
import Profile from './Profile'
import SignIn from './SignIn'

interface NavProps {
  isAuthenticated: boolean
  page: 'homeLeft' | 'home' | 'private' | 'public' | 'new'
}

function getLinkByName(name: 'public' | 'private' | 'new' | 'voltar') {
  switch (name) {
    case 'public':
      return (
        <Link href="/project/space-time/memory/public" className="flex gap-2">
          <Globe />
          <p className="hidden xl:flex">Memorias publicas</p>
        </Link>
      )
    case 'private':
      return (
        <Link href="/project/space-time/memory/private" className="flex gap-2">
          <BookLock />
          <p className="hidden xl:flex">Suas Memorias</p>
        </Link>
      )
    case 'new':
      return (
        <Link href="/project/space-time/memory/new" className="flex gap-2">
          <Plus />
          <p className="hidden xl:flex">Nova memoria</p>
        </Link>
      )
    case 'voltar':
      return (
        <Link href="/project/space-time/" className="flex gap-2">
          <ChevronLeft />
          <p className="hidden xl:flex">Voltar</p>
        </Link>
      )
  }
}

export default function Nav({ isAuthenticated, page }: NavProps) {
  switch (page) {
    case 'homeLeft':
      return (
        <div className="flex items-center justify-center gap-4 xl:hidden">
          {getLinkByName('public')}
          {isAuthenticated && (
            <>
              {getLinkByName('private')}
              {getLinkByName('new')}
            </>
          )}
        </div>
      )
    case 'home':
      return (
        <div className="flex h-screen flex-col items-center justify-between py-64">
          {getLinkByName('public')}
          {isAuthenticated && (
            <>
              {getLinkByName('private')}
              {getLinkByName('new')}
            </>
          )}
        </div>
      )
    case 'private':
      return (
        <div className="flex items-center justify-between px-10 py-6 xl:justify-end">
          <div className="xl:hidden">
            <Profile />
          </div>
          <div className="flex gap-4">
            {getLinkByName('voltar')}
            {getLinkByName('public')}
            {getLinkByName('new')}
          </div>
        </div>
      )
    case 'public':
      return (
        <div className="flex items-center justify-between px-10 py-6 xl:justify-end">
          <div className="xl:hidden">
            {isAuthenticated ? <Profile /> : <SignIn />}
          </div>
          <div className="flex gap-4">
            {getLinkByName('voltar')}
            {isAuthenticated && (
              <>
                {getLinkByName('private')}
                {getLinkByName('new')}
              </>
            )}
          </div>
        </div>
      )
    case 'new':
      return (
        <div className="flex items-center justify-between px-10 py-6 xl:justify-end">
          <div className="xl:hidden">
            <Profile />
          </div>
          <div className="flex gap-4">
            {getLinkByName('voltar')}
            {getLinkByName('public')}
            {getLinkByName('private')}
          </div>
        </div>
      )
    default:
      return <></>
  }
}

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import Profile from './Profile'
import SignIn from './SignIn'

interface HeaderMobileProps {
  isAuthenticated: boolean
  url: string
}

function makeLoggedItems(url: string) {
  return (
    <>
      <Link href={url} className="flex">
        Memorias publicas
      </Link>
      <Link href="project/space-time/memory/new" className="flex">
        Nova memoria
      </Link>
    </>
  )
}

function makeNotLoggedItems(url: string) {
  return (
    <Link href={url} className="flex">
      <ChevronLeft /> Voltar
    </Link>
  )
}

export default function MemoryHeader({
  isAuthenticated,
  url,
}: HeaderMobileProps) {
  return (
    <>
      <div className="flex items-center justify-between p-4 xl:hidden">
        <div>{isAuthenticated ? <Profile /> : <SignIn />}</div>
        <div className="flex">
          {isAuthenticated ? (
            <div className="flex space-x-6">{makeLoggedItems(url)}</div>
          ) : (
            <>{makeNotLoggedItems(url)}</>
          )}
        </div>
      </div>
      <div className="hidden xl:block">
        {isAuthenticated ? (
          <div className="flex justify-between space-x-6 p-4">
            {makeLoggedItems(url)}
          </div>
        ) : (
          <>{makeNotLoggedItems(url)}</>
        )}
      </div>
    </>
  )
}

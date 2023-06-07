import { cookies } from 'next/headers'
import Image from 'next/image'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

import LeftSide from '@/components/SpaceTime/LeftSide'
import { api } from '@/lib/api'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import Profile from '@/components/SpaceTime/Profile'
import SignIn from '@/components/SpaceTime/SignIn'

dayjs.locale(ptBr)

interface MemoryAutor {
  coverUrl: string
  excerpt: string
  memoryDate: Date
  id: string
  autor: {
    name: string
    html_url: string
  }
}

const loggedItems = (
  <>
    <Link href="/project/space-time/" className="flex justify-start xl:hidden">
      <ChevronLeft /> Voltar
    </Link>
    <Link href="project/space-time/memory/private" className="flex">
      Memorias
    </Link>
    <Link href="project/space-time/memory/new" className="flex">
      Nova memoria
    </Link>
  </>
)

const notLoggedItems = (
  <div className="flex">
    <Link href="/project/space-time/" className="flex justify-start xl:p-4">
      <ChevronLeft /> Voltar
    </Link>
  </div>
)

export default async function PublicMemoryPage() {
  const isAuthenticated = cookies().has('token')
  const response = await api.get('/memories/public')

  function showMemories() {
    const memories: MemoryAutor[] | null = response.data
    if (!memories) return <h1>no memories</h1>
    if (!memories.length) return <h1>no memories</h1>
    return (
      <>
        <div className="flex items-center justify-between px-10 py-6 xl:hidden">
          <div>{isAuthenticated ? <Profile /> : <SignIn />}</div>
          <div className="flex">
            {isAuthenticated ? (
              <div className="flex space-x-6">{loggedItems}</div>
            ) : (
              <>{notLoggedItems}</>
            )}
          </div>
        </div>
        <div className="hidden xl:block">
          {isAuthenticated ? (
            <div className="flex justify-between space-x-6 p-4">
              {loggedItems}
            </div>
          ) : (
            <>{notLoggedItems}</>
          )}
        </div>
        <div className="flex flex-col gap-10 p-8 ">
          {memories.map((publicMemory) => {
            return (
              <div key={publicMemory.id} className="space-y-4">
                <div className="flex justify-between">
                  <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
                    {dayjs(publicMemory.memoryDate).format(
                      'D[ de ]MMMM[, ]YYYY',
                    )}
                  </time>
                  <Link
                    href={publicMemory.autor.html_url}
                    className="hover:text-primary/80"
                  >
                    Autor: {publicMemory.autor.name}
                  </Link>
                </div>
                {publicMemory.coverUrl && (
                  <Image
                    src={publicMemory.coverUrl}
                    width={400}
                    height={200}
                    alt=""
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                )}
                <p className="text-lg leading-relaxed text-gray-100">
                  {publicMemory.excerpt}
                </p>
                <Link
                  href={`/memories/${publicMemory.id}`}
                  className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
                >
                  Ler mais
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-2">
      <div className="flex max-h-screen flex-col overflow-y-scroll bg-stars xl:order-last">
        {showMemories()}
      </div>
      <LeftSide
        isAuthenticated={isAuthenticated}
        className="hidden overflow-hidden xl:flex"
      />
    </div>
  )
}

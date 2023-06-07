import { ArrowRight, ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

import EmptyMemories from '@/components/SpaceTime/EmptyMemories'
import { Memory } from '@/components/SpaceTime/MemoryForm'
import Profile from '@/components/SpaceTime/Profile'
import LeftSide from '@/components/SpaceTime/LeftSide'
import SignIn from '@/components/SpaceTime/SignIn'
import { api } from '@/lib/api'

const loggedItems = (
  <>
    <Link href="/project/space-time/" className="flex justify-start xl:hidden">
      <ChevronLeft /> Voltar
    </Link>
    <Link href="project/space-time/memory/public" className="flex">
      Memorias publicas
    </Link>
    <Link href="project/space-time/memory/new" className="flex">
      Nova memoria
    </Link>
  </>
)

const notLoggedItems = (
  <Link href="/memories" className="flex">
    <ChevronLeft /> Voltar
  </Link>
)

export default async function PrivateMemoryPage() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }
  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-2">
      <div className="flex max-h-screen flex-col overflow-y-scroll bg-stars xl:order-last">
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
        <div className="hidden xl:inline-block">
          {isAuthenticated ? (
            <div className="flex justify-between p-4">{loggedItems}</div>
          ) : (
            <>{notLoggedItems}</>
          )}
        </div>
        <div className="flex flex-col gap-10 p-8">
          {memories.length === 0 ? (
            <EmptyMemories />
          ) : (
            memories.map((memory) => {
              return (
                <div key={memory.id} className="space-y-4">
                  <div className="flex justify-between">
                    <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
                      {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
                    </time>
                  </div>
                  {memory.coverUrl && (
                    <Image
                      src={memory.coverUrl}
                      width={400}
                      height={200}
                      alt=""
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                  )}
                  <p className="text-lg leading-relaxed text-gray-100">
                    {memory.excerpt}
                  </p>
                  <Link
                    href={`/memories/${memory.id}`}
                    className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
                  >
                    Ler mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )
            })
          )}
        </div>
      </div>
      <LeftSide
        isAuthenticated={isAuthenticated}
        className="hidden overflow-hidden xl:flex"
      />
    </div>
  )
}

import { cookies } from 'next/headers'

import ShowMemory from '@/components/SpaceTime/ShowMemory'
import LeftSide from '@/components/SpaceTime/LeftSide'
import Nav from '@/components/SpaceTime/Nav'
import { api } from '@/lib/api'

interface PublicMemory {
  coverUrl: string
  excerpt: string
  memoryDate: Date
  id: string
  autor: {
    name: string
    html_url: string
  }
}

export default async function PublicMemoryPage() {
  const isAuthenticated = cookies().has('token')
  const response = await api.get('/memories/public')
  const memories: PublicMemory[] = response.data
  memories.sort((a, b) => {
    const aDate = new Date(a.memoryDate)
    const bDate = new Date(b.memoryDate)
    return bDate.getTime() + aDate.getTime()
  })

  return (
    <>
      <div className="flex max-h-screen flex-col overflow-y-scroll bg-stars xl:order-last">
        <Nav isAuthenticated={isAuthenticated} page="public" />
        <ShowMemory memories={memories} page="private" />
      </div>
      <LeftSide
        isAuthenticated={isAuthenticated}
        className="hidden overflow-hidden xl:flex"
      />
    </>
  )
}

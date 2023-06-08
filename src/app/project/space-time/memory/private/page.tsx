import { cookies } from 'next/headers'

import { Memory } from '@/components/SpaceTime/MemoryForm'
import LeftSide from '@/components/SpaceTime/LeftSide'
import { api } from '@/lib/api'
import Nav from '@/components/SpaceTime/Nav'
import ShowMemory from '@/components/SpaceTime/ShowMemory'

export default async function PrivateMemoryPage() {
  const isAuthenticated = cookies().has('token')
  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const memories: Memory[] = response.data

  return (
    <>
      <div className="flex max-h-screen flex-col overflow-y-scroll bg-stars xl:order-last">
        <Nav isAuthenticated={isAuthenticated} page="private" />
        <ShowMemory memories={memories} page="private" />
      </div>
      <LeftSide
        isAuthenticated={isAuthenticated}
        className="hidden overflow-hidden xl:flex"
      />
    </>
  )
}

import { cookies } from 'next/headers'

import LeftSide from '@/components/SpaceTime/LeftSide'
import MemoryForm from '@/components/SpaceTime/MemoryForm'
import Nav from '@/components/SpaceTime/Nav'

export default function newMemoryPage() {
  const isAuthenticated = cookies().has('token')
  return (
    <>
      <div className="bg-stars xl:order-last xl:px-4">
        <Nav isAuthenticated={isAuthenticated} page="new" />
        <MemoryForm />
      </div>
      <LeftSide isAuthenticated={isAuthenticated} className="hidden xl:flex" />
    </>
  )
}

import { cookies } from 'next/headers'

import LeftSide from '@/components/SpaceTime/LeftSide'
import Nav from '@/components/SpaceTime/Nav'

export default function SpaceTimePage() {
  const isAuthenticated = cookies().has('token')
  return (
    <>
      <div className="hidden max-h-screen flex-col overflow-y-scroll bg-stars bg-cover xl:order-last xl:flex">
        <Nav isAuthenticated={isAuthenticated} page="home" />
      </div>
      <LeftSide isAuthenticated={isAuthenticated} />
    </>
  )
}

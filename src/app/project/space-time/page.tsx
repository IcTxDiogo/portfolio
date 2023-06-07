import { cookies } from 'next/headers'

import LeftSide from '@/components/SpaceTime/LeftSide'
import ShowByAuth from '@/components/SpaceTime/showByAuth'

export default function SpaceTimePage() {
  const isAuthenticated = cookies().has('token')
  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-2">
      <LeftSide isAuthenticated={isAuthenticated} />
      <div className="hidden max-h-screen flex-col overflow-y-scroll bg-stars bg-cover xl:flex">
        <ShowByAuth auth={isAuthenticated} />
      </div>
    </div>
  )
}

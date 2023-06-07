import Link from 'next/link'
import { cookies } from 'next/headers'

import LeftSide from '@/components/SpaceTime/LeftSide'
import { ChevronLeft } from 'lucide-react'
import Profile from '@/components/SpaceTime/Profile'
import SignIn from '@/components/SpaceTime/SignIn'
import MemoryForm from '@/components/SpaceTime/MemoryForm'

export default function newMemoryPage() {
  const isAuthenticated = cookies().has('token')
  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-2">
      <div className="bg-stars xl:order-last xl:px-4">
        <div className="flex items-center justify-between px-10 py-6 xl:px-0 xl:py-4">
          <div className="xl:hidden">
            {isAuthenticated ? <Profile /> : <SignIn />}
          </div>
          <div className="gap-4">
            <Link
              href="/project/space-time/memory/private"
              className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
            >
              <ChevronLeft />
              Voltar à timeline
            </Link>
          </div>
        </div>
        <MemoryForm />
      </div>
      <LeftSide isAuthenticated={isAuthenticated} className="hidden xl:flex" />
    </div>
  )
}

import Hero from '@/components/SpaceTime/Hero'
import Profile from '@/components/SpaceTime/Profile'
import SignIn from '@/components/SpaceTime/SignIn'
import Copyright from '@/components/SpaceTime/Copyright'
import Nav from './Nav'

interface LeftSideProps {
  isAuthenticated: boolean
  className?: string
}

export default function LeftSide({
  isAuthenticated,
  className,
}: LeftSideProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-between overflow-hidden border-r border-white/10  bg-stars bg-cover px-10 py-6 xl:items-start xl:px-28 xl:py-16 ${className}`}
    >
      {/* blur */}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full " />
      {/* stripes */}
      <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
      <div className="flex w-full justify-between xl:justify-start">
        {isAuthenticated ? <Profile /> : <SignIn />}
        <Nav isAuthenticated={isAuthenticated} page="homeLeft" />
      </div>
      <Hero />
      <Copyright />
    </div>
  )
}

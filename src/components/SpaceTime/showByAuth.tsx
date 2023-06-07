'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import NoLoginMemories from './NoLoginMemories'

interface ShowByAuthProps {
  auth: boolean
}

export default function ShowByAuth({ auth }: ShowByAuthProps) {
  const Router = useRouter()
  useEffect(() => {
    const handleResize = () => {
      if (auth && window.innerWidth > 1270) {
        Router.push('/project/space-time/memory/private')
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [auth, Router])
  return (
    <>
      <NoLoginMemories />
    </>
  )
}

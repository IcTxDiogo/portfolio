import { ReactNode } from 'react'

import TopBar from '@/components/home/TopBar'
import { homeMenuItens } from '@/lib/HomeItens'

interface HomeLayoutProps {
  children: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <TopBar pageTitle="Portfolio" menuItens={homeMenuItens} />
      {children}
    </>
  )
}

import { ReactNode } from 'react'

interface spaceTimeLayoutProps {
  children: ReactNode
}

export default function spaceTimeLayout({ children }: spaceTimeLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-2">
      {children}
    </div>
  )
}

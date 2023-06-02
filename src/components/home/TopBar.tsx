import Link from 'next/link'
import { ReactNode } from 'react'

import { Button } from '@/ui/button'
import { MenuItens } from '@/lib/HomeItens'

interface TopBarProps {
  pageTitle: ReactNode
  menuItens: MenuItens[]
}

export default function TopBar({ pageTitle, menuItens }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 flex justify-between items-center p-4 bg-background h-[6vh]">
      <div>
        <h1 className="text-3xl font-bold tracking-wide">{pageTitle}</h1>
      </div>
      <nav>
        <ul className="flex">
          {menuItens.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                <Button variant="ghost">{item.content}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

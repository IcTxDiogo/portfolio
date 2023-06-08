import { ArrowRight } from 'lucide-react'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

import EmptyMemories from './EmptyMemories'

dayjs.locale(ptBr)

export interface Memory {
  coverUrl: string
  excerpt: string
  memoryDate: string
  id: string
}

interface PublicMemory {
  coverUrl: string
  excerpt: string
  memoryDate: Date
  id: string
  autor: {
    name: string
    html_url: string
  }
}

interface ShowMemoryProps {
  memories: Memory[] | PublicMemory[]
  page: 'public' | 'private'
}

export default function ShowMemory({ memories, page }: ShowMemoryProps) {
  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.length === 0 &&
        (page === 'public' ? (
          <EmptyMemories memoryType="public" />
        ) : (
          <EmptyMemories memoryType="private" />
        ))}
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <div className="flex justify-between">
              <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
                {dayjs(memory.memoryDate).format('D[ de ]MMMM[, ]YYYY')}
              </time>
              {'autor' in memory && (
                <Link
                  href={memory.autor.html_url}
                  className="text-sm hover:text-primary/80"
                >
                  Autor: {memory.autor.name}
                </Link>
              )}
            </div>
            {memory.coverUrl && (
              <Image
                src={memory.coverUrl}
                width={400}
                height={200}
                alt=""
                className="aspect-video w-full rounded-lg object-cover"
              />
            )}
            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>
            <Link
              href={`/memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

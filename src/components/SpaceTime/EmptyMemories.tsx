import Link from 'next/link'

interface EmptyMemoriesProps {
  memoryType: 'public' | 'private'
}

export default function EmptyMemories({ memoryType }: EmptyMemoriesProps) {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        Nenhuma memoria {memoryType === 'private' ? 'sua' : 'publica'}{' '}
        registrada,{' '}
        <Link
          href="/project/space-time/memory/new"
          className="underline hover:text-gray-50/70"
        >
          criar agora
        </Link>
        !
      </p>
    </div>
  )
}

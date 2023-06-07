import Link from 'next/link'

export default function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        Nenhuma memoria registrada,{' '}
        <Link
          href="/project/space-time/memory/public"
          className="underline hover:text-gray-50/70"
        >
          criar agora
        </Link>
        !
      </p>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/ui/button'

export default function Hero() {
  return (
    <div
      className="flex h-[94vh] flex-col justify-center "
      style={{
        backgroundImage: "url('https://i.imgur.com/1xVhFh3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="flex flex-col items-center justify-center sm:flex-row-reverse">
        <Image
          src="https://i.imgur.com/iF3vs2l.jpg"
          className="max-w-sm rounded-full shadow-2xl"
          width={300}
          height={300}
          alt=""
        />
        <div className="p-10">
          <h1 className="text-5xl font-bold">{"Hi I'm Diogo"}</h1>
          <p className="max-w-md py-6">
            {
              "A full-stack lover and a passionate about technology, I'm currently developing my skills with study and projects."
            }
          </p>
          <Link href="/projects">
            <Button className="text-lg font-semibold">
              Take a look at my projects
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

import { LinkedinIcon, GithubIcon } from 'lucide-react'
import Link from 'next/link'

const size = 44

export default function Footer() {
  return (
    <footer className="my-2 flex flex-col items-center border-t-2 border-border">
      <div className="flex justify-center gap-10 py-4">
        <Link href="https://github.com/IcTxDiogo/">
          <GithubIcon size={size} />
        </Link>
        <Link href="www.linkedin.com/in/diogofrancasantos/">
          <LinkedinIcon size={size} />
        </Link>
      </div>
      <p className="text-base-content text-center text-lg">
        © 2021 Diogo Santos. All rights reserved.
      </p>
    </footer>
  )
}

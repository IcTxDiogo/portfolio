import Hero from '@/components/home/Hero'
import Technologies from '@/components/home/Technologies'
import Motivations from '@/components/home/motivations'
import { baseTechnology } from '@/lib/HomeItens'

export default function Home() {
  return (
    <div>
      <Hero />
      <Technologies technology={baseTechnology} />
      <Motivations />
    </div>
  )
}

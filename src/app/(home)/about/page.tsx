import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

import { Card } from '@/ui/card'

export interface AboutCard {
  id: string
  text: string
  imageUrl: string
}

const cards: AboutCard[] = [
  {
    id: uuidv4(),
    text: `I'm a 24 years old guy from Brazil, I'm currently studying computer engineering at UFGD.`,
    imageUrl: 'https://i.imgur.com/dUbZ7iE.jpg',
  },
  {
    id: uuidv4(),
    text: `I always liked using the computer, starting with games, image and video editing, and now programming.`,
    imageUrl: 'https://i.imgur.com/fy4z6mo.jpg',
  },
  {
    id: uuidv4(),
    text: `My first contact with programming was in high school, since that time, I don't remember a day that programming wasn't in my thoughts`,
    imageUrl: 'https://i.imgur.com/t5rUtbY.jpg',
  },
  {
    id: uuidv4(),
    text: `My current focus is web programming, with react next typescript, now i feel secure with front-end but my goal is to move forward being full-stack`,
    imageUrl: 'https://i.imgur.com/VyPhjnu.jpg',
  },
]

export default function AboutPage() {
  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="m-8 text-2xl font-bold">
          {"Thanks to come here! I'm excited to share a little bit about me!"}
        </h1>
        <div className="m-4 flex flex-col space-y-4 ">
          {cards.map((card) => (
            <Card key={card.id} className="flex p-4 sm:max-w-3xl">
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-4 flex justify-center sm:col-span-5">
                  <Image
                    className="rounded-xl p-2"
                    src={card.imageUrl}
                    alt="Album"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="col-span-8 p-2 sm:col-span-7 sm:text-lg">
                  {card.text}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}

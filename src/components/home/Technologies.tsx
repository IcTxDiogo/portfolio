import Image from 'next/image'

import { BaseTechnology } from '@/lib/HomeItens'
import { Card, CardContent, CardTitle } from '@/ui/card'

interface TechnologyProps {
  technology: BaseTechnology[]
}

export default function Technologies({ technology }: TechnologyProps) {
  return (
    <>
      <div className="m-4 space-y-4 flex flex-col items-center">
        {technology.map((item) => (
          <a
            key={item.id}
            href={item.externalUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Card className="grid grid-cols-12 items-center sm:max-w-3xl h-72 sm:h-44">
              <div className="p-2 col-span-6 flex justify-center sm:col-span-2">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <CardTitle className="text-2xl col-span-6 flex justify-center sm:col-span-2">
                {item.name}
              </CardTitle>
              <CardContent className="col-span-12 sm:col-span-8">
                {item.description}
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </>
  )
}

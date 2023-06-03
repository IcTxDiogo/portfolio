import { projects } from '@/lib/HomeItens'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/ui/card'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className=" flex flex-col items-center">
      <div className="flex w-full max-w-3xl flex-col space-y-4 p-4">
        <h1 className="m-8 text-xl font-bold">
          {"Here's some of my projects, I hope you can see what i can do!"}
        </h1>
        {projects.map((project) => (
          <Link href={project.url} key={project.id}>
            <Card className="p-4 hover:bg-primary/10">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

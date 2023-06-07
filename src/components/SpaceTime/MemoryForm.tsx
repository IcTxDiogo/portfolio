'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import Cookie from 'js-cookie'
import Image from 'next/image'
import { api } from '@/lib/api'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form'
import { Textarea } from '@/ui/textarea'
import { CalendarIcon, Camera } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'
import { Calendar } from '@/ui/calendar'
import { Checkbox } from '@/ui/checkbox'

export interface Memory {
  coverUrl: string
  excerpt: string
  createdAt: string
  id: string
}

const MemoryFormSchema = z.object({
  isPublic: z.boolean().default(false),
  memoryDate: z.date({ errorMap: () => ({ message: 'Selecione uma data' }) }),
  content: z.string().min(10, 'Descreva sua lembrança'),
})

export default function MemoryForm() {
  const form = useForm<z.infer<typeof MemoryFormSchema>>({
    resolver: zodResolver(MemoryFormSchema),
  })
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const Router = useRouter()

  function handleCoverUrlChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
      setImage(file)
    }
  }

  async function onSubmit(values: z.infer<typeof MemoryFormSchema>) {
    let coverUrl = ''
    if (image) {
      const imageFormData = new FormData()
      const saveFileName = `${uuid()}.${image.name.split('.').pop()}`
      imageFormData.append('image', image, saveFileName)
      try {
        const response = await api.post(
          'https://api.imgbb.com/1/upload',
          imageFormData,
          {
            params: {
              key: '0a438fa35be056939c7400308dae6350',
            },
          },
        )

        coverUrl = response.data.data.url
      } catch (error) {
        console.error('Error creating memory:', error)
      }
    }
    const token = Cookie.get('token')
    await api.post(
      '/memories',
      {
        coverUrl,
        content: values.content,
        isPublic: values.isPublic,
        memoryDate: values.memoryDate,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    )
    Router.push('/project/space-time/')
  }

  return (
    <div className="p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="isPublic"
            render={({ field }) => (
              <FormItem className="flex cursor-pointer items-start gap-2 space-y-1 hover:text-primary/70">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="m-[2px] h-[20px] w-[20px]"
                  />
                </FormControl>
                <FormLabel className="cursor-pointer">
                  Tornar memória pública
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="memoryDate"
            render={({ field }) => (
              <FormItem className="flex rounded-md ">
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'ghost'}
                          className="mx-0 gap-2 px-0 hover:bg-background hover:text-primary/70"
                        >
                          <CalendarIcon className="ml-auto opacity-50" />
                          {field.value ? (
                            format(new Date(field.value), 'PPP')
                          ) : (
                            <span>Quando isso aconteceu ?</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={new Date(field.value)}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-6">
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="coverUrl"
                className="flex cursor-pointer items-center gap-2 self-start text-sm hover:text-primary/60"
              >
                <Camera className="ml-auto" />
                Anexar mídia
              </label>
              <input
                type="file"
                id="coverUrl"
                className="hidden"
                onChange={handleCoverUrlChange}
              />
            </div>
            {previewUrl && (
              <Image
                src={previewUrl}
                alt="image preview"
                width={200}
                height={200}
                className="col-span-4 rounded-md"
              />
            )}
          </div>
          <FormField
            defaultValue=""
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Fique livre para adicionar fotos e relatos sobre essa experiência que você quer lembrar para sempre."
                    rows={10}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

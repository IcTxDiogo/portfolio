'use client'

import { Camera } from 'lucide-react'
import { FormEvent } from 'react'
import Cookie from 'js-cookie'

import MediaPicker from './MediaPicker'
import axios from 'axios'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { v4 as uuid } from 'uuid'

export default function NewMemoryForm() {
  const Router = useRouter()

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const imageFile = formData.get('coverUrl') as File

    let coverUrl = ''

    if (imageFile) {
      const imageFormData = new FormData()
      const saveFileName = `${uuid()}.${imageFile.name.split('.').pop()}`
      imageFormData.append('image', imageFile, saveFileName)
      try {
        const response = await axios.post(
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
        content: formData.get('content'),
        isPublic: formData.get('isPublic') === 'true',
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    )
    Router.push('/project/nlw-space-time/')
  }
  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Anexar mídia
        </label>
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck="false"
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:outline-none  "
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />
      <button
        type="submit"
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        Salvar
      </button>
    </form>
  )
}

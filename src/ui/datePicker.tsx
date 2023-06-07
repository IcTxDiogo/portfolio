'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'
import { Calendar } from '@/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'

interface DatePickerProps {
  hoverMessage: string
  data: {
    value?: Date
    set: (date?: Date) => void
  }
}

export function DatePicker({ hoverMessage, data }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !data.value && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {data.value ? format(data.value, 'PPP') : <span>{hoverMessage}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={data.value}
          onSelect={(newData) => data.set(newData)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

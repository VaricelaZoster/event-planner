import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import type { RsvpStatus as PrismaRsvpStatus } from '@prisma/client'
import { notFound } from 'next/navigation'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { CheckCircle2Icon, ChevronDown } from 'lucide-react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { submitOrUpdateRsvpAction } from '@/lib/actions/events'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'

const InviteRsvpContent = async ({ token, submitted }: { token: string, submitted: boolean }) => {

  const row = await prisma.eventInvite.findFirst({
    where: { token },
    include: {
      event: {
        select: {
          id: true,
          title: true,
          description: true,
          location: true,
          eventDate: true
        }
      }
    }
  })

  if (!row) {
    notFound()
  }

  const e = row.event
  const event = {
    title: e.title,
    description: e.description,
    location: e.location,
    eventDate: e.eventDate ? e.eventDate.toISOString() : null,
  }

  const submitRsvpForToken = submitOrUpdateRsvpAction.bind(null, token)

  return (
    <div className='flex flex-1 flex-col gap-6'>
      <Card>
        <CardHeader className='space-y-3'>
          <Badge variant="secondary" className='w-fit'>
            RSVP
          </Badge>
          <CardTitle>{event.title}</CardTitle>
          <p className='text-sm text-muted-foreground capitalize'>
            {event.eventDate
              ? new Date(event.eventDate).toLocaleString()
              : "No date selected"}
            {event.location ? ` - ${event.location}` : ""}
          </p>
          {event.description ? (
            <p className='text-sm text-muted-foreground'>{event.description}</p>
          ) : null}
        </CardHeader>
        <CardContent className='space-y-3'>
          {submitted ? (
            <Alert>
              <CheckCircle2Icon/>
              <AlertTitle>RSVP added.</AlertTitle>
              <AlertDescription>Thanks. Your RSVP has succesfully been added.</AlertDescription>
            </Alert>
          ) : ""}
          <form action={submitRsvpForToken} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="status">Attendance</Label>

              <div className="relative">
                <select
                  id="status"
                  name="status"
                  defaultValue="going"
                  className="h-10 w-full appearance-none rounded-md border border-border bg-(--surface) px-3 pr-8"
                >
                  <option value="going">Going</option>
                  <option value="maybe">Maybe</option>
                  <option value="not_going">Not Going</option>
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
              </div>
            </div>

            <Button type="submit">
              Submit RSVP
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default InviteRsvpContent

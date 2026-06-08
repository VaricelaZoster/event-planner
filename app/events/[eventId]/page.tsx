import { getSession } from '@/lib/auth/server'
import React from 'react'
import EventDetailContent from '@/components/event-detail-content'

const page = async({
  params,
}: {
  params: Promise<{ eventId: string}>
}) => {
  const {eventId} = await params
  const session = await getSession()

  if(!session.data){
    return null
  }

  return<EventDetailContent userId={session.data.user.id} eventId = {eventId}/>
}

export default page


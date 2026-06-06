import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const DashboardContent = async({userId}: {userId: string}) => {
  return (
    <div className='flex flex-1 flex-col gap-6'>
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Your events</h1>
          <p className='text-sm text-muted-foreground'>Track attendee responses and manage invite links</p>
        </div>
        <Button asChild>
          <Link href={"/events/new"}>Create event</Link>
        </Button>
      </div>

      {/* List of events */}
    </div>
  )
}

export default DashboardContent

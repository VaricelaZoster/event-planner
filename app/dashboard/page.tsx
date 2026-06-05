import { getSession } from '@/lib/auth/server'
import React from 'react'
import DashboardContent from '@/components/dashboard-content'

const page = async() => {

  const session = await getSession()

  if(!session.data) {
    return <div>Unauthorized</div>
  }

  return (
    <DashboardContent userId={session.data.user.id}/>
  )
}

export default page

import { AccountView, accountViewPaths } from '@neondatabase/auth/react'
import React from 'react'


export function generateStaticParams(){
    return Object.values(accountViewPaths).map((path) => ({path}))
}

const page = async({params} : {params: Promise<{path: string}>}) => {
  
    const {path} = await params
  
    return (
    <main className='container p-4 md:p-6'>
        <AccountView path = {path}/>
    </main>
  )
}

export default page

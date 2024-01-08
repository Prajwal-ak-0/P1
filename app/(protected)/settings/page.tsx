import { auth } from '@/auth'
import React from 'react'
import { json } from 'stream/consumers';

const page =async () => {
    const session = await auth();
  return (
    <div>
        {JSON.stringify(session)}
    </div>
  )
}

export default page
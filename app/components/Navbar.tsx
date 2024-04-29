"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'


const Navbar = () => {

  const {data:session,status} =  useSession();



  return (
    <div className='flex bg-slate-200 p-3 space-x-3'>
        {status === 'loading' && <div>loading...</div> }
        {status === 'authenticated' && <div>{session.user?.name}<Link href='/api/auth/signout' className='ms-4'>Signout</Link></div> }
        {status === 'unauthenticated' &&
        <Link href='/api/auth/signin'>login</Link>
        }
    </div>
  )
}

export default Navbar
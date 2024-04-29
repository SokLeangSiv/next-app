import React from 'react'

import Image from 'next/image'

// const session = await getServerSession(authSession)
// console.log(session)
// return (
//   <div>
//     <Navbar />
//     <h1>Hello {session && <span>{session?.user?.name}</span> }</h1>
//   </div>
// )
const Homepage = async () => {


  return (
    <main>
      <Image src="https://bit.ly/react-cover" fill alt="vattanak" className='object-cover'/>
    </main>
  )

}

export default Homepage
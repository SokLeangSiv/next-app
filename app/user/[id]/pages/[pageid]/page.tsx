import React from 'react'

type Props={
    params:{id:number, pageid:number}
}

const page = ({params:{id, pageid}}: Props) => {
  return (
    <div>page {id} ... {pageid}</div>
  )
}

export default page
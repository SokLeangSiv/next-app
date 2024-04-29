import { notFound } from "next/navigation"

type Props= {
    params:{id:number}
}

const UserPage = ({params}: Props) => {

  if(params.id > 10) notFound();
  return (
    <div>UserPage {params.id}</div>
  )
}

export default UserPage
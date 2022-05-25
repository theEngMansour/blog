import { Authenticated } from 'layouts'
import Link from 'next/link'
export default function Home() {
  return (
    <Authenticated>
     <h1 className="text-center text-blue-900">Authenticated</h1>

     <Link href={'/profile'} passHref>profile</Link>
    </Authenticated>
  )

}
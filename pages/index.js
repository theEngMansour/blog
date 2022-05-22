import { Authenticated } from 'components'
import Link from 'next/link'
export default function Home() {
  return (
    <Authenticated>
     <h1>Auth</h1>
     <Link href={'/'}>
       ssssssssssss
     </Link>
    </Authenticated>
  )

}
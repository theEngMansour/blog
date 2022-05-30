import { Authenticated } from 'layouts';
import { MainLayout } from 'layouts';
import Link from 'next/link'
import {Button} from '@mui/material'
export default function Home() {
  return (
    <Authenticated>
      <MainLayout>
        <h1 className="text-center text-red-900 selection:bg-slate-400">Authenticated</h1>
        <Link href={'/profile'} passHref>profile</Link>
        <Link href={'/login'} passHref>Login</Link>
        <Button className="bg-red-200">s</Button>
     </MainLayout>
    </Authenticated>
  )
}
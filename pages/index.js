import { Authenticated } from 'layouts';
import { MainLayout } from 'layouts';
import Link from 'next/link'
export default function Home() {
  return (
    <Authenticated>
      <MainLayout>
        <h1 className="text-center text-blue-900 selection:bg-slate-400">Authenticated</h1>
        <Link href={'/profile'} passHref>profile</Link>
        <Link href={'/login'} passHref>Login</Link>
     </MainLayout>
    </Authenticated>
  )
}
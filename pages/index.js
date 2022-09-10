import React from 'react';
import Head from 'next/head';
import { Posts } from 'components/posts';
import { MainLayout } from 'layouts';
import { Feature, HowWork, Blog } from 'components/Landing';
import { usePosts } from 'hooks/usePost';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const page = router.query.page || 1;
  const { data } = usePosts({page})
console.log(router)
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Feature />
      <HowWork />
      <Blog items={data?.posts || []} />
    </MainLayout>
  )
}

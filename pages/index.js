import React from 'react';
import Head from 'next/head';
import { MainLayout } from 'layouts';
import { Welcome, Feature, HowWork, Blog, Tags } from 'components/Landing';
import { usePosts } from 'hooks/usePost';
import { useRouter } from 'next/router';
import { useTags } from 'hooks/useTags';

export default function Index() {
  const router = useRouter();
  const page = router.query.page || 1;
  const { data } = usePosts({page})
  const { data: tags } = useTags()

  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Welcome />
      <Feature />
      <HowWork />
      <Blog items={data?.posts || []} />
      <Tags items={tags || []}/>
    </MainLayout>
  )
}

import React from 'react';
import { MainLayout } from 'layouts';
import { Welcome, Feature, HowWork, Blog, Tags, Contact } from 'components/Landing';
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
      <Welcome />
      <Feature />
      <HowWork />
      <Blog items={data?.posts || []} />
      <Tags items={tags || []}/>
      <Contact />
    </MainLayout>
  )
}

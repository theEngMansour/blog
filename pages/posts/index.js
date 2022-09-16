import React from 'react';
import { MainLayout } from 'layouts';
import { usePosts } from 'hooks/usePost';
import { Posts, Pages } from 'components/posts'
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export default function Index() {
  const router = useRouter();
  const page = router.query.page || 1;
  const {data, loading} = usePosts({ page })
  const { formatMessage } = useIntl()
  return (
    <MainLayout>
      {loading 
      ?
      <h1>Loading !</h1>
      : 
      data?.posts?.length > 0 ? (
        <React.Fragment>
          <Posts items={data?.posts || []} />
          <Pages count={data?.pages} page={Number(page)} />
        </React.Fragment>
      ) : (<NoPost />)
      }
    </MainLayout>
  )
}

function NoPost() {
  return (
    <h1>no post</h1>
  )
}
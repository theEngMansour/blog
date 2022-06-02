import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MainLayout } from 'layouts';
import { usePosts } from 'hooks/usePost';
import { Posts, Pages } from 'components/posts'
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';

export default function Index() {
  const router = useRouter();
  const page = router.query.page || 1;
  const {data, loading} = usePosts({ page })
  const { formatMessage } = useIntl()
  return (
    <MainLayout>
      <Head>
        <title>{formatMessage({id: 'title.profile'})}</title>
      </Head>
      {loading 
      ?
      <h1>Loading !</h1>
      : 
      data?.posts?.length > 0 ? (
        <React.Fragment>
          <Link href={'/my-posts'} prefetch >On Link</Link>
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
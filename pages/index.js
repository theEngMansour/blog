import React from 'react';
import Head from 'next/head';
import { MainLayout } from 'layouts';
import { Welcome, Feature } from 'components/Landing';

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Welcome />
        {/* <Feature /> */}
    </React.Fragment>
  )
}

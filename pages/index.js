import React from 'react';
import Head from 'next/head';
import { MainLayout } from 'layouts';
import { Welcome, Feature } from 'components/Landing';

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Feature />
    </MainLayout>
  )
}

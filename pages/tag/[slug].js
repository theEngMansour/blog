import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import prisma from 'lib/prisma';
import useTag from 'hooks/useTags';
import Image from 'next/image';
import { useEffect, useContext } from 'react';
import { MainLayout } from 'layouts';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import { Box, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';

export default function Show({params}) {
  const router = useRouter();
  const {data: tag} = useTag(params?.slug, params?.id)
  const {mutate} = useSWRConfig()

  useEffect(() => {
    if (!params?.id) router.push('/404')
    mutate(`/api/tag/${params?.slug}?id=${params?.id}`)
    //Update page when Added new answer
  }, [params])

  return (
    <MainLayout>
      <Head>
        <title>{tag?.item.name}</title>
      </Head>
      <Box className="mt-14 mb-8">
        <Typography style={{ fontFamily: "Montserrat-Bold"}} variant="h5">
          {tag?.item.name}
        </Typography>
      </Box>
      <Link href={`/tag`} passHref>
        <button className="flex w-50 m-5 items-center text-white justify-center rounded-md border-0 border-gray-300 bg-red-500 px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <Image src={'/svg/arrow-small-right-free-icon-font.svg'} width={17.5} height={17.5} alt={'Feature'} />
        </button>
      </Link>
      <Grid container spacing={3} >
        {
          tag?.item.posts.map((e) =>
            <Grid item sm={4} xs={6} key={e.id}>
              <Link passHref href={`/posts/${e.post.id}`}>
                  <Card variant="outlined" className="my-3">
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h6" color="primary">
                          {e.post.title.substr(0,100)}
                        </Typography>
                        <Typography variant="body2">
                          {e.post.contents.substr(0,200)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
              </Link>
            </Grid>
          )
        }
      </Grid>
    </MainLayout>
  );
}


// Server 
export async function getStaticPaths() {
  const items = await prisma.tag.findMany()
  const paths = items.map(e => ({params: {slug: e.slug.toString()}}))
  return {
    paths,
    fallback: true // Reload any id new for post added
  }
}

export async function getStaticProps({params}) {
  const item = await prisma.tag.findUnique({
    where: {
      slug: params.slug,
    }
  })
  return {
    props: {
      params: JSON.parse(JSON.stringify(item))
    }
  }
}
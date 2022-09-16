import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { MainLayout } from 'layouts';
import { Grid, Card, CardActionArea, CardContent, Typography, Skeleton } from '@mui/material';
import { useTags } from 'hooks/useTags';

export default function Tags() {
    const [loading, setLoading] = useState(true)
    const { data: tags } = useTags()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    })

    return (
        <MainLayout title="التصنيفات">
            <Head>
                <title>التصنيفات</title>
            </Head>
            <Link href={`/`} passHref>
                <button className="flex w-50 m-5 items-center text-white justify-center rounded-md border-0 border-gray-300 bg-red-500 px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    <Image src={'/svg/arrow-small-right-free-icon-font.svg'} width={17.5} height={17.5} alt={'Feature'} />
                </button>
            </Link>
            { loading ? (
                <Grid container spacing={3}>
                    {
                        tags.map(({ id, name, slug, description }) =>
                            <Grid item sm={4} xs={12} key={id}>
                                <Skeleton animation="wave" variant="rectangular" width={180} height={180} />
                            </Grid>
                        )
                    }
                </Grid>
                ) : (
                    <Grid container spacing={3}>
                        {
                            tags.map(({ id, name, slug, description }) =>
                                <Grid item sm={4} xs={12} key={id}>
                                    <Link passHref href={`tag/${slug}?id=${id}`}>
                                        <Card variant="outlined" className="">
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography style={{ fontFamily: "Montserrat-Bold"}} variant="h6" color="primary">
                                                        {name}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        {description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Link>
                                </Grid>
                            )
                        }
                    </Grid>

                )
            }
           <br></br>
        </MainLayout>
    )
}
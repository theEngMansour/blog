import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from 'layouts';
import { Grid, Card, CardActionArea, CardContent, Typography, Skeleton, Box, Button } from '@mui/material';
import { useTags } from 'hooks/useTags';
import { FormattedMessage } from 'react-intl';


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
                                        <Card variant="outlined" className="mt-11">
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
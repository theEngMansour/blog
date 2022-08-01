import React from 'react';
import {
    Card, 
    CardActions, 
    CardContent, 
    Button, 
    Typography
} from '@mui/material';
import Image from 'next/image';
import moment from 'site-settings/moment';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import SideBar from './SideBar';

export default function Posts({ items = []}) {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={8}>
                    {
                        items.map((post) => 
                            <div key={post.id}>                            
                                <Card sx={{ maxWidth: '100%' , textAlign: 'center', borderRadius: 0}} variant={0}>
                                    <Image src={post.images[0].img_uri} width={'100%'} height={'100%'} alt={post.title} />
                                    <CardContent sx={{textAlign: 'righ'}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        {moment(post.createdAt).fromNow()}
                                        <Typography variant="body2" color="text.secondary">
                                            {post.contents} 
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={`/posts/${post.id}`} prefetch>
                                            <Button size="small">المزيد</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    }
                </Grid>
                <Grid item xs={12} sm={3.5} md={4}>
                    <SideBar />
                </Grid>
            </Grid>

        </React.Fragment>
    )
}
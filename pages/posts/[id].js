import React, { useEffect } from 'react';
import prisma from 'lib/prisma';
import Image from 'next/image';
import Head from 'next/head';
import moment from 'site-settings/moment';
import { usePost } from 'hooks/usePost';
import { useRouter } from 'next/router';
import { MainLayout } from 'layouts';
import { FormattedMessage, useIntl } from 'react-intl';
import { ShowPost } from 'components/posts'


export default function Show({params}) {   
    const { formatMessage } = useIntl()
    const router = useRouter()

    useEffect(() => {
        if (!params?.id) router.push('/404')
    }, [])

    const { post, loading } = usePost(params?.id)


    return (
        <div>
            <Head>
                <title>{formatMessage({id: 'title.profile'})}</title>
            </Head>
            <ShowPost item={post} />
        </div>
    )
}


export async function getStaticPaths() {
    const items = await prisma.post.findMany()
    const paths = items.map(e => ({params: {id: e.id.toString()}}))
    return {
        paths,
        // Reload any id new for post added
        fallback: true
    }
}

export async function getStaticProps({params}) {
    const item = await prisma.post.findUnique({
        where: {
            id: Number(params.id),
        }
    })
    return {
        props: {
            params: JSON.parse(JSON.stringify(item))
        }
    }
}
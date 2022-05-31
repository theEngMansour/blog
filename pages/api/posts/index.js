import prisma from 'lib/prisma';

const paginate = async ({page = 1, limit = 5}) => {
    const skip = limit * (page - 1)
    const posts = await prisma.post.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    img_uri: true
                }
            },
            images: true
        },
        take: limit,
        skip: skip
    })
    const pages = Math.ceil(await prisma.post.count()/limit)
    return {
        posts, pages
    }
} 

export default async function handler(req, res) {
    try {
        const {page} = req.query;
        const {posts, pages} = await paginate({page})
        res.status(200).json({
            data: {
                posts, pages, page
            }
        })
    } catch(e) {
        res.status(500).json(e)
    }
}
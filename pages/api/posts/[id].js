import prisma from 'lib/prisma';

export default async function handler(req, res) {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: Number(req.query.id)
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        img_uri: true
                    }
                },
                images: true
            }
        })
        res.status(200).json(post);
    } catch(e) {
        res.status(500).json(e)
    }
}
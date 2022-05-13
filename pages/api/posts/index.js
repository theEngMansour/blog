import prisma from 'lib/prisma';

export default async function handler(req, res) {
    try {
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
            }
        });
        res.status(401).json(posts);
    } catch(e) {
        res.status(500).json(e)
    }
}
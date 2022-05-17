import prisma from 'lib/prisma';

async function handler(req, res) {
    try {
        const comments = await prisma.comment.findMany({
            where: {
                postId: Number(req.query.id)
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        img_uri: true
                    }
                }
            }
        });
        res.status(200).json(comments)
    } catch(e) {
        res.status(500).json(e)
    }
}

export default handler
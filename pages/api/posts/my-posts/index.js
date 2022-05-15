import prisma from 'lib/prisma';
import auth from 'middleware/authentication';

async function handler(req, res) {
    try {
        const myPosts = await prisma.post.findMany({
            where: {
                userId: Number(req.user.id)
            },
            include: {
                images: true
            }
        });
        res.status(200).json(myPosts);
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler);
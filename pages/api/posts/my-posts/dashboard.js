import prisma from 'lib/prisma';
import auth from 'middleware/authentication';

async function handler(req, res) {
    try {
        const posts = await prisma.post.count({
            where: {userId: Number(req.user.id)}
        });

        const comments = await prisma.comment.count({
            where: {userId: Number(req.user.id)}
        });

        const likes = await prisma.like.count({
            where: {userId: Number(req.user.id)}
        });

        const tags = await prisma.tag.count();

        res.status(200).json({posts, comments, likes, tags});
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler);
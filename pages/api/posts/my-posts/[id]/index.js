import prisma from 'lib/prisma';
import auth from 'middleware/authentication';

async function handler(req, res) {
    try {
        const myPost = await prisma.post.findMany({
            where: {
                id: Number(req.query.id),
                userId: Number(req.user.id)
            }
        })
        res.status(200).json(myPost);
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
import prisma from 'lib/prisma';
import auth from 'middleware/authentication';
import langs from 'site-settings/site-translations';

async function handler(req, res) {
    try {
        const userLiked = await prisma.like.findMany({
            where: {userId: Number(req.user.id), postId: Number(req.query.id)}
        });
        if(userLiked.length !== 0) {
            await prisma.like.deleteMany({
                where: {userId: Number(req.user.id), postId: Number(req.query.id)}
            })
            res.status(200).json({message: langs.ar.deleteLike})
        } else {
            await prisma.like.create({
                data: {userId: Number(req.user.id), postId: Number(req.query.id)}
            })
        }
        res.status(200).json({message:  langs.ar.addLike})
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
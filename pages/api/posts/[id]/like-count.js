import prisma from "lib/prisma";
import jwt from 'jsonwebtoken';

async function handler(req, res) {
    try {
        const likes = await prisma.like.count({
            where: {postId: Number(req.query.id)}
        });
        const token = req.headers.authorization;
        if(!token) res.status(200).json({likes: likes, userLiked: null})
        const deCoded = jwt.verify(token, process.env.JWT)
        const userLiked = await prisma.like.findMany({
            where: {userId: deCoded.id, postId: Number(req.query.id)}
        })
        res.status(200).json({
            likes: likes,
            userLiked
        })

    } catch(e) {
        res.status(500).json(e)
    }
}

export default handler
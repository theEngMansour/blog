import prisma from 'lib/prisma';
import auth from 'middleware/authentication';

async function handler(req, res) {
    try {
        const user = await prisma.user.findUnique({ 
            where: {id: req.user.id},
            select: {
                id: true,
                name: true,
                email: true,
                img_uri: true
            }
        });
        res.status(200).json(user)
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
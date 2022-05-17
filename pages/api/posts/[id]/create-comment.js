import prisma from 'lib/prisma';
import auth from 'middleware/authentication';
import langs from 'site-settings/site-translations';

async function handler(req, res) {
    if (req.method !== 'PUT') return res.status(400).json()
    const {text} = req.body;
    try {
        const comment = await prisma.comment.create({
            data: {
                text,
                postId: Number(req.query.id),
                userId: Number(req.user.id)
            }
        })
        res.status(200).json({message: langs.ar.createComment})
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
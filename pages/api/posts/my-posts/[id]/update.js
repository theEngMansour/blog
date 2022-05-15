import prisma from 'lib/prisma';
import auth from 'middleware/authentication';
import langs from 'site-settings/site-translations';

async function handler(req, res) {
    try {
        if (req.method !== 'PUT') return res.status(400).json({message: 'method no put'})
        const {title, contents, steps} = req.body;
        const updatePost = await prisma.post.updateMany({
            where: {
                id: Number(req.query.id),
                userId: Number(req.user.id)
            },
            data: {
                title,
                contents,
                steps
            }
        })
        res.status(200).json({message: langs.ar.editPost});
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
import prisma from 'lib/prisma';
import auth from 'middleware/authentication';
import fs from 'fs/promises';
import langs from 'site-settings/site-translations';

async function handler(req, res) {
    const {postId} = req.body;
    const check = await prisma.post.findMany({ where: {userId: req.user.id, id: Number(postId)} });
    if (req.method !== 'DELETE') return res.status(400).json({message: 'method no DELETE'})
    if (check.length === 0) return res.status(401).json({message: 'post for anther user no current user'})
    try {
        await prisma.post_Image.findMany({
            where: {
                postId: Number(postId)
            },
        }).then(res => {
            res.map((img) => {
                fs.unlink(`./public/${img.img_uri}`, function(err) {
                    if(err) throw err
                })
            })
        })
        await prisma.post.deleteMany({
            where: {
                id: Number(postId),
                userId: Number(req.user.id),
            }
        }) 
        res.status(200).json({message: langs.ar.deletePost});
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler);
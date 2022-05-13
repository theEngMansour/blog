import prisma from 'lib/prisma';
import auth from 'middleware/authentication';
import langs from 'site-settings/site-translations';
import {apiRoute, upload} from 'middleware/upload';
import {validationResult} from 'express-validator';
import {postValidationRules} from 'middleware/validtor';

apiRoute.use(upload.array('postImg', 5));
apiRoute.post(async (req, res) => {
    if (req.method !== 'POST') return res.status(400).json()
    await postValidationRules(req, res)
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
    const {title, contents, steps, country, region} = req.body;
    try {
        const post = await prisma.post.create({
            data: {
                title, 
                contents, 
                steps, 
                country, 
                region,
                userId: req.user.id
            }
        });
        req.files.map(async (file) => {
            const post_img = await prisma.post_Image.create({
                data: {
                    img_uri: `/images/${file.filename}`,
                    postId: post.id
                }
            })
        })
        res.status(200).json({message: langs.ar.createPost});
    } catch(e) {
        res.status(500).json(e)
    }
});

export default auth(apiRoute);

export const config = {
  api: {
    bodyParser: false, 
  },
};
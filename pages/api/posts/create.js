import prisma from 'lib/prisma';
import auth from 'middleware/authentication';
import langs from 'site-settings/site-translations';
import { validationResult } from 'express-validator';
import { postValidationRules } from 'middleware/validtor';

async function handler(req, res) {
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
        res.status(200).json({message: langs.ar.createPost});
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
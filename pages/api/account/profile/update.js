import prisma from 'lib/prisma';
import bcrypt from 'bcrypt';
import langs from 'site-settings/site-translations';
import auth from 'middleware/authentication';
import { validationResult } from 'express-validator';
import { updateUserValidationRules } from 'middleware/validtor'

async function handler(req, res) {
    
    await updateUserValidationRules(req, res)
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
    
    const {name, password} = req.body;
    const hashPassowrd = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.update({
            data: { 
                name, 
                password: hashPassowrd
            },
            where: {
                id: req.user.id
            }
        });
        res.status(200).json({message: langs.ar.updateProfile})
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
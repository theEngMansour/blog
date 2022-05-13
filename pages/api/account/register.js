import prisma from 'lib/prisma';
import bcrypt from 'bcrypt';
import langs from 'site-settings/site-translations';
import { validationResult } from 'express-validator';
import { userValidationRules } from 'middleware/validtor';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(400).json()
    // user validation rules
    await userValidationRules(req, res)
    // user error
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    
    const {name, email, password} = req.body;
    try {
        const hashPassowrd = await bcrypt.hash(password, 10);
        const findEmail = await prisma.user.findUnique({where: {email}});
        if(findEmail === null) {
            const user = await prisma.user.create({
                data: {
                    name, 
                    email,
                    password: hashPassowrd
                }
            });
            res.status(200).json({message: langs.ar.loginSuccess});
        } else {
            res.status(400).json({message: langs.ar.loginError})
        }
    } catch(e) {
        res.status(500).json(e)
    }
}
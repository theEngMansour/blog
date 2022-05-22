import prisma from 'lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import langs from 'site-settings/site-translations';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(400).json()
    const {email, password} = req.body;
    try {
        const user = await prisma.user.findUnique({where: {email}});
        if(user === null) {
            res.status(401).json({message: langs.ar.errorLogin});
        } else {
            const pass = await bcrypt.compare(password, user.password);
            if(pass) {
                const token = jwt.sign({ 
                    id: user.id,
                    email: user.email
                }, process.env.JWT)
                res.status(200).json({accessToken: token});
            } else {
                res.status(401).json({message: langs.ar.errorLogin});
            }
        }
    } catch(e) {
        res.status(500).json(e)
    }
}
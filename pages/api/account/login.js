import prisma from 'lib/prisma';
import bcrypt from 'bcrypt';
import langs from 'site-settings/site-translations';

export default async function handler(req, res) {
    const {email, password} = req.body;
    try {
        const user = await prisma.user.findUnique({where: {email}});
        if(user === null) {
            res.status(401).json({message: langs.ar.errorLogin});
        } else {
            const pass = await bcrypt.compare(password, user.password);
            if(pass) {
                res.status(200).json();
            } else {
                res.status(401).json({message: langs.ar.errorLogin});
            }
        }
    } catch(e) {
        res.status(500).json(e)
    }
}
import prisma from 'lib/prisma';
import auth from 'middleware/authentication';

async function handler(req, res) {
    try {
        res.status(200).json(req.user)
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
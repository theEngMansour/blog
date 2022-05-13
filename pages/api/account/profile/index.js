import prisma from 'lib/prisma';
import auth from 'middleware/authentication';

const exclude = (user, ...keys) => {
    for(let key of keys){
        delete user[key]
    }
    return user
}

async function handler(req, res) {
    try {
        const user = await prisma.user.findUnique({ 
            where: {id: req.user.id}
        });
        const userWithoutPassword = exclude(user, 'password')
        res.status(200).json(userWithoutPassword)
    } catch(e) {
        res.status(500).json(e)
    }
}

export default auth(handler)
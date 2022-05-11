import jwt from 'jsonwebtoken';
import langs from 'site-settings/site-translations'

async function isLoggedIn(req, res) {
    try {
        const token = req.headers.authorization;
        if(!token) res.status(401).json({message: langs.ar.errorAuthorization})
        const deCoded = jwt.verify(token, process.env.JWT)
        return deCoded;
    } catch(e) {
        res.status(500).json(e);
    }
}

const auth = (handler) => async (req, res) => {
    try {
        req.user = await isLoggedIn(req, res)
        return handler(req, res)
    } catch (error) {
        res.status(401).json(error)
    }
}

export default auth
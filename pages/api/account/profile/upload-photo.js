import auth from 'middleware/authentication';
import prisma from 'lib/prisma';
import {apiRoute, upload} from 'middleware/upload';

apiRoute.use(upload.single('avatar'));

apiRoute.post(async (req, res) => {
    try{
        const uploadPhoto = await prisma.user.update({
            data: {
                img_uri: '/images/' + req.file.filename
            },
            where: {
                id: req.user.id
            }
        });
        res.status(200).json({
            message: "تم إضافة الصورة بنجاح"
        });
    } catch(e) {
        res.status(500).json(e.message)
    }
});

export default auth(apiRoute);

export const config = {
  api: {
    bodyParser: false, 
  },
};
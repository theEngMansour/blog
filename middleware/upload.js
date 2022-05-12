import nextConnect from 'next-connect';
import multer from 'multer';

// upload images
const DIR = './public/images';
const storage = multer.diskStorage({
  destination: DIR,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileType = file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg';
    if(fileType) {
      cb(null, true)
    } else {
      cb(new multer.MulterError('not a file is picture'))
    }
  }
});

// next Connect
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

export {apiRoute, upload}
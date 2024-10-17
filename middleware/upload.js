import multer from "multer";
import path from "path"

const destinationPath = path.resolve('temp')

const storage = multer.diskStorage({
    destination: destinationPath,
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })

  const limits = 5 * 1024 *1024

const upload = multer({
    storage,
    limits,
});

export default upload;

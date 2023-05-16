import multer from 'multer';

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
});  

const fileFilter = (req, file, cb) => {
    console.log("revive")
    if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
        cb(null, true);
    } else{
        cb(null, false);
    }

};

let upload = multer({ storage: storage, fileFilter: fileFilter,});

export default upload.single('ProfilePicture')
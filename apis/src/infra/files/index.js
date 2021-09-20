const multer = require('multer')

// const storage = multer.memoryStorage({
//     destination: function (req, file, callback) {
//         callback(null, '')
//     }
// })
// const upload = multer({
//     storage,
//     limits: { fileSize: 100 * 1024 * 1024 }
// }).single('file')

const upload =  multer({ dest: '../../../public/data/' }).single('file')

export default {
    upload
}
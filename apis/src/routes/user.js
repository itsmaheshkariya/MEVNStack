import {Router} from 'express'
import UserController from '../controllers/user'
import fileInfra from '../infra/files'

const multer = require('multer')
const upload =  multer({ dest: './public/' })

const User = Router()

User.post('/upload/profile', upload.single('file'), UserController.uploadProfilePicture)

User.post('/signup', UserController.createUser)

User.post('/login', UserController.login)

User.get('/', UserController.getUsers)

User.get('/:id', UserController.getUserById)

User.delete('/:id', UserController.deleteUser)

User.put('/:id', UserController.updateUserById)

export default User
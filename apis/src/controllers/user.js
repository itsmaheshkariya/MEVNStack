import getUserService from '../services/user/get'

import postUserService from '../services/user/post'

import deleteUserService from '../services/user/delete'

import putUserService from '../services/user/put'

// const redis = require('redis')
// const client = redis.createClient()

const getUsers = async (req, res) => {
    try {
        res.status(200).json((await getUserService.all()))
    } catch (e) {
        res.status(500).json(e)
    }
}

const getUserById = async (req, res) => {
    try {
        res.json((await getUserService.byId(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}

const createUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
        const newUser = await postUserService.create({
            name,
            email,
            password
        })
        res.status(200).json(newUser)
    } catch (e) {
        res.status(500).json(e)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userDeleted = await deleteUserService.byId(req.params.id)
        res.status(200).json({ userDeleted })
    } catch (e) {
        res.status(500).json(e)
    }
}

const updateUserById = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
        console.log({
            id: req.params.id
        })
        const updateUserById = await putUserService.byId(req.params.id, {
            name,
            email,
            password
        })
        res.status(200).json(updateUserById)
    } catch (e) {
        res.status(500).json(e)
    }
}

const uploadProfilePicture = (req, res) => {
    console.log(req.file.originalname)
    console.log(req.file.originalname)
    res.json(req.body)
}
const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        const loggedin = await getUserService.byEmailAndPassword(
            email,
            password
        )
        // await client.set(email, loggedin)
       
        res.status(200).json(loggedin)
    }
    catch (e) {
        res.status(500).json(e)
    }
}
export default {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUserById,
    uploadProfilePicture,
    login
}
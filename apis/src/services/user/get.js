import { User } from '../../models/user'
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const all = async () => User.find({})

const byId = async (_id) => User.find({ _id })

const byEmailAndPassword = async (email, password) => {
    const user = await User.findOne({ email })
    return bcrypt.compareSync(password, user.password) ? { secret: jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email
    }, process.env.SECRET) } : { secret: null }
}

export default {
    all,
    byId,
    byEmailAndPassword
}
import { User } from '../../models/user'

const create = async (user) => User.create(user)

export default {
    create
}
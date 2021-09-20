import { User } from '../../models/user'

const byId = async (id, user) => User.findByIdAndUpdate(id, user)

export default {
    byId
}
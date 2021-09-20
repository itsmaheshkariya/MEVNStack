import { User } from '../../models/user'

const byId = async (id) => User.findByIdAndDelete(id)

export default {
    byId
}
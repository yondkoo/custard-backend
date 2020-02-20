import * as mongoose from 'mongoose'

const option = {
	timestamps: true,
	collection: 'users'
}

const usersSchema = new mongoose.Schema({
	firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        sparse: true,
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
    role: {
        type: String,
        default: 'user' // user, admin
    },
    password: {
        type: String,
    },
}, option)

export default mongoose.model('users', usersSchema)
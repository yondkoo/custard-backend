import usersModel from '../models/users'
import usersInterface from '../interfaces/users'
import bcrypt from '../middlewares/bcrypt'
import jwt from '../middlewares/jwt'

export default class {

	public static async login ( data: usersInterface ) {
		const usersResult: any = await usersModel.findOne({ username: data.username })
		const passwordCheck: any = await bcrypt.check(data.password, usersResult.password)
		if (passwordCheck)
			return await jwt.create(usersResult.id)
		else
			throw new Error('Wrong Password!')
	}

	public static async register ( data: usersInterface ) {
		data.password = await bcrypt.create(data.password)
		const usersResult = await usersModel.create(data)
		return usersResult
	}

}
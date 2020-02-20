import jwt from 'jsonwebtoken'

export default class {

	public static create ( data: string	) {
		return jwt.sign({
			exp: Math.floor(Date.now() / 1000) + parseInt(process.env.JWT_TIME, 10),
			data
		}, process.env.JWT_SECRET)
	}

	public static verify ( data: string ) {
		const token = data.slice(7)
		const result = jwt.verify(token, process.env.JWT_SECRET)
		return result
	}

}
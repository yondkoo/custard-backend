import bcrypt from 'bcrypt'

export default class {

	public static create (
		data: string
	) {
		const rounds: any = parseInt(process.env.BCRYPT_SALT_ROUND, 10)
		const salt: any = bcrypt.genSaltSync(rounds)
		return bcrypt.hashSync(data, salt)
	}

	public static check (
		raw: string,
		encrypted: string
	) {
		return bcrypt.compareSync(raw, encrypted)
	}

}
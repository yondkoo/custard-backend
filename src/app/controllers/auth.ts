import authServices from '../services/auth'

export default class {

	public static async login ( req: any, res: any, next: any ) {
		try {
			const result: any = await authServices.login(req.body)
			res.json({
				result: true,
				data: result
			})
		} catch(err) {
			next(err)
		}
	}

	public static async register ( req: any, res: any, next: any ) {
		try {
			const result: any = await authServices.register(req.body)
			res.json({
				result: true,
				data: result})
		} catch(err) {
			next(err)
		}
	}

}
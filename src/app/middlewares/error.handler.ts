export default (
    err: any,
    req: any,
    res: any,
    next: any
) => {
	const {
        status = 500,
        message = 'Internal server error',
        errors
    } = err

    res.status(status).json({
        result: false,
        data: [],
        message,
        errors: errors || undefined
    })
}
// Letting you know that start command is initiated
// tslint:disable-next-line
console.log(
	'\x1b[35m%s\x1b[0m',
	'[crypted-syntax] Project: ' + process.env.npm_package_name
)
// tslint:disable-next-line
console.log(
	'\x1b[35m%s\x1b[0m',
	'[crypted-syntax] Version: ' + process.env.npm_package_version
)
// Neccessary imports
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'

import appRoutes from './routes'
import errorHandler from './app/middlewares/error.handler'
import './app/middlewares/env'

const app = express()

// Options for cors midddleware
const options:cors.CorsOptions = {
	allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
	credentials: true,
	methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
	origin: [],
	preflightContinue: false
}

// Don't tamper with these. It's necessary :)
app.use(cors(options))
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

// Able to interact with public folder
app.use('/public', express.static(path.join(__dirname, './public')))

// Not gonna let requester know that it is made by NodeJS
app.disable('x-powered-by')

// Connection of mongoose
// In .env.example file place your MongoDB URI there
// It will work like magic :)
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// Introduction of your Web API
// Of course you can change the responses :)
app.get('/', (req: any, res: any) => {
	res.json({
		name: 'Typescript Express Back-End Only Starter',
		version: process.env.npm_package_version,
	})
})

// Application Routes
app.use(appRoutes)

// Catch all errors, Sends 500 I think
app.use(errorHandler)

// Sets up the port and lets you know on the console
const port = process.env.PORT || 80

// If you are gonna deploy your application,
app.listen(port)
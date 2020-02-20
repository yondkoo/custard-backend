import express from 'express'
import authRoutes from './app/routes/auth'

const router = express.Router()

router.use('/auth', authRoutes)

export default router
import { Router } from 'express'
import { post } from '../controllers/user'

const router = Router()

router.post('/', post)

export default router

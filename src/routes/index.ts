import { Router } from 'express'
import value from './value'

const router = Router()

router.use('/value', value)

export default router

import { Router } from 'express'
import value from './value'
import user from './user'

const router = Router()

router.use('/value', value)
router.use('/user', user)

export default router

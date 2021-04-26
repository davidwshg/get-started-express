import { Router } from 'express'
import { get, getById } from '../controllers/value'
import validate from '../middlewares/validate'
import * as yup from 'yup'

const router = Router()

router.get('/', get)
router.get<{ id: string }>('/:id', validate({
  params: yup.object({
    id: yup.number().required()
  })
}), getById)

export default router

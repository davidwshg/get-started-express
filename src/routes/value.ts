import { Router } from 'express'
import * as yup from 'yup'

import { value } from '../controllers'
import { validate } from '../middlewares'

export const valueRouter = Router()

/**
 * @apiDefine CommonErrors
 *
 * @apiErrorExample 404
 *  {
 *    "error": {
 *      "name": "NotFoundError",
 *      "message": "Not found error message.",
 *      "requestID": "pfpr75cw6"
 *    }
 *  }
 * @apiErrorExample 500
 *  {
 *    "error": {
 *      "name": "InternalServiceError",
 *      "message": "Internal service error message.",
 *      "requestID": "pfpr75cw6"
 *    }
 *  }
 */

/**
 * @api {get} /values Get all values
 * @apiDescription Get all values
 * @apiGroup values
 *
 * @apiSuccessExample 200
 *  ["v1", "v2", "v3"]
 * @apiUse CommonErrors
 */
valueRouter.get('/', value.get)

/**
 * @api {get} /values/:id Get value by id
 * @apiDescription Get value by id
 * @apiGroup values
 * 
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiSuccessExample 200
 *  "v1"
 * @apiErrorExample 400
 *  {
 *    "error": {
 *      "name": "ValidationError",
 *      "message": "Validation error message.",
 *      "requestID": "pfpr75cw6",
 *      "errors": [
 *          {
 *              "name": "ValidationError",
 *              "message": "Validation error message.",
 *              "requestID": "pfpr75cw6",
 *              "path": "params.id"
 *          }
 *      ]
 *    }
 *  }
 * @apiUse CommonErrors
 */
valueRouter.get<{ id: string }>('/:id', validate({
  params: yup.object({
    id: yup.number().required()
  })
}), value.getById)

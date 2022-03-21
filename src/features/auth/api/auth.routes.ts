import express from 'express'
import UserControllers from './auth.controllers'
import UserValidators from './auth.validators'
import { validateRequest } from '../../../common/middlewares/validate-request'

/**
 * @route         /api/users
 * @method        POST
 * @description   register a new user
 */
const registerRoute = express.Router().post('/',
  UserValidators.register,
  validateRequest,
  UserControllers.register,
)


/**
 * @route         /api/users/login
 * @method        POST
 * @description   login a user
 */
const loginRoute = express.Router().post('/login',
  UserValidators.login,
  validateRequest,
  UserControllers.login
)

const UsersAPI = express.Router().use('/users', 
  registerRoute,
  loginRoute,
)

export default UsersAPI


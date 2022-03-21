import { body } from 'express-validator'

const registerValidator = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').trim().isLength({ min: 8, max: 20 }).withMessage('Invalid password (must be between 8 and 20 characters)'),
]

const loginValidator = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').trim().notEmpty().withMessage('You must supply a password'),
]

const UserValidators = Object.freeze({
  register: registerValidator,
  login: loginValidator,
})

export default UserValidators
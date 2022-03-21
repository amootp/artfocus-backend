import { Request, Response } from 'express'
import AuthService from '../core/auth.service'

const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const token = await AuthService.register(email, password)
  req.session = { token }
  res.status(201)
}

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const token = await AuthService.register(email, password)
  req.session = { token }
  res.status(200)
}

const AuthControllers = Object.freeze({
  register: registerController,
  login: loginController,
})

export default AuthControllers
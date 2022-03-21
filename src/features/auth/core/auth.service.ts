import UserDB from '../db/user.model'
import { generateToken, comparePasswords } from '../../../common/helpers/crypto-service'
import { BadRequestError } from '../../../common/errors/bad-request-error'

const register = async (email: string, password: string) => {
  const emailExists = await UserDB.findOne({ email }) ? true : false
  if (emailExists) {
    throw new BadRequestError('Email is already in use')
  }
  else {
    const user = await UserDB.create({ email, password })
    const token = generateToken({
      id: user._id,
      firstName: user.firstName
    })
    return token
  }
}

const login = async (email: string, password: string) => {
  const user = await UserDB.findOne({ email })
  if (!user || !comparePasswords(password, user.password)) {
    throw new BadRequestError('Invalid email or password')
  }
  else {
    const token = generateToken({
      id: user._id,
      firstName: user.firstName
    })
    return token
  }
}

const UserService = Object.freeze({
  register,
  login,
})

export default UserService

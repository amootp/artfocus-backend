import jwt from 'jsonwebtoken'
import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt);
const JWT_SECRET_KEY = process.env.JWT_SECRET!

export const generateToken = (payload: string | object ) => {
  const token = jwt.sign(payload, JWT_SECRET_KEY)
  return token
}

export const hash = async (message: string): Promise<string> => {
  const salt = randomBytes(16).toString('hex')
  const hash = (await scryptAsync(message, salt, 64) as Buffer).toString('hex')
  return `${hash}.${salt}`
}

export const comparePasswords = async (password: string, target: string) => {
  const [targetHash, targetSalt] = target.split('.')
  const hash = (await scryptAsync(password, targetSalt, 64) as Buffer).toString('hex')
  return hash === targetHash
}
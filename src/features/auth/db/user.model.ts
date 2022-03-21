import mongoose from 'mongoose'
import { User } from './user.entity'

const user = new mongoose.Schema<User>({ 
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, },
  lastName: { type: String, },
  isAdmin: { type: Boolean, required: true, default: false },
}, {
  timestamps: true,
})

user.pre('save', 
  async function(next) {
    const user = this
    if (user.isModified('password')) {
      const newPlainPassword = user.get('password')
      const newEncryptedPassword = '@NOT-IMPLEMENTED' //CryptoService.hash(newPlainPassword)
      user.set('password', newEncryptedPassword)
    }
    next()
  }
)

export default mongoose.model<User>('User', user)

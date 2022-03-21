import { ValidationError } from 'express-validator'
import { CustomError } from './custom-error'

export class RequestValidationError extends CustomError {
  errors: ValidationError[]
  statusCode: number

  constructor(errors: ValidationError[]) {
    super('Invalid request parameters')
    this.errors = errors
    this.statusCode = 400
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return this.errors.map(err => { return { message: err.msg, field: err.param }})
  }
}
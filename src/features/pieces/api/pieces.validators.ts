import { body, param } from 'express-validator'

const getPieceValidator = [
  param('id').isMongoId().withMessage('Invalid piece id')
]

const createPieceValidator = [
  body('price').isInt({ min: 0, max: 10000000 })
]

const updatePieceValidator = [
  body('price').isInt({ min: 0, max: 10000000 })
]

const PieceValidators = Object.freeze({
  getPiece: getPieceValidator,
  createPiece: createPieceValidator,
  updatePiece: updatePieceValidator,
})

export default PieceValidators
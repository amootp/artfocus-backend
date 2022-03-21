import express, { Router } from 'express'
import { validateRequest } from '../../../common/middlewares/validate-request'
import PieceControllers from './pieces.controllers'
import PieceValidators from './pieces.validators'

const PiecesAPI = Router()

PiecesAPI.get('/pieces/',
  PieceControllers.getAllPieces
)

PiecesAPI.get('/pieces/:id',
  PieceValidators.getPiece,
  validateRequest,
  PieceControllers.getPieceById
)

PiecesAPI.post('/pieces/',
  PieceValidators.createPiece,
  //validateRequest,
  PieceControllers.createPiece
)

PiecesAPI.put('/pieces/:id',
  PieceValidators.updatePiece,
  //validateRequest,
  PieceControllers.updatePiece
)


export default PiecesAPI
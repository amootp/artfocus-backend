import { Request, Response } from 'express'
import PieceService from '../core/pieces.service'
import { NotFoundError } from '../../../common/errors/not-found-error'

const getPieceController = async (req: Request, res: Response) => {
  const id = req.params.id
  const piece = await PieceService.getPieceById(id)
  if (!piece) {
    throw new NotFoundError()
  }
  else {
    res.send(piece)
  }
}

const getAllPiecesController = async (req: Request, res: Response) => {
  const pieces = await PieceService.getAllPieces()
  res.send(pieces)
}

const createPieceController = async (req: Request, res: Response) => {
  const { 
    name,
    artist,
    image,
    medium,
    price,
  } = req.body
  const piece = await PieceService.createPiece(name, artist, image, medium, price)
  res.status(201).send(piece)
}

const updatePieceController = async (req: Request, res: Response) => {
  const { id } = req.params
  const attrsToUpdate = req.body

  const piece = await PieceService.updatePiece(id, attrsToUpdate)
  res.send(piece)
}



const PieceControllers = Object.freeze({
  getPieceById: getPieceController,
  getAllPieces: getAllPiecesController,
  createPiece: createPieceController,
  updatePiece: updatePieceController,
})

export default PieceControllers


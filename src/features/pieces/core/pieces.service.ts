import PieceModel from '../db/piece.model'
import { Model, Schema, model } from 'mongoose'

const getAllPieces = async () => {
  const pieces = await PieceModel.find({})
  return pieces
}

const getPieceById = async (id: any) => {
  const piece = await PieceModel.findById(id)
  return piece
}

const createPiece = async (name: string, artist: string, image: string, medium: string, price: number) => {
  const piece = await PieceModel.create({ name, artist, image, price: price, medium })
  return piece
}

const updatePiece = async (id: any, attrs: object) => {
  const piece = await PieceModel.findOneAndUpdate(id, attrs)
  console.log(piece)
  return piece
}

const PieceService = Object.freeze({
  getAllPieces,
  getPieceById,
  createPiece,
  updatePiece,
})

export default PieceService
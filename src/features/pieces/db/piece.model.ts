import mongoose from 'mongoose'
import { Piece } from './piece.entity'

const pieceSchema = new mongoose.Schema<Piece>({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
})

const PieceModel = mongoose.model('Piece', pieceSchema)

export default PieceModel
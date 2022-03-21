import mongoose from 'mongoose'
import { Artist } from './artist.entity'

const artistSchema = new mongoose.Schema<Artist>({
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

const ArtistModel = mongoose.model('Artist', artistSchema)

export default ArtistModel
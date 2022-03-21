import express from 'express'

import { validateRequest } from '../../../common/middlewares/validate-request'


const addArtistRoute = express.Router().post('/', () => {})

const removeArtistRoute = express.Router().post('/login', () => {})

const ArtistsAPI = express.Router().use('/artists', 
  addArtistRoute,
  removeArtistRoute,
)

export default ArtistsAPI


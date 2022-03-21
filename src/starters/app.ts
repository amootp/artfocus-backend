import path from 'path'
import express, { Request, Response } from 'express'
import connectDB from './db'
import { json } from 'body-parser';
import cookieSession from 'cookie-session'
import morgan from 'morgan'
import { errorHandler } from '../common/middlewares/error-handler'
import { NotFoundError } from '../common/errors/not-found-error'

import piecesRoutes from '../features/pieces/api/pieces.routes'
import authRoutes from '../features/auth/api/auth.routes'
import artistsRoutes from '../features/artists/api/artists.routes'
import uploadsRoutes from '../features/uploader/api/uploads.routes'

const startApp = () => {
  const app = express()
  app.set('trust proxy', true);
  app.use(morgan('tiny'))
  app.use(json());
  app.use(
    cookieSession({
      signed: false,
      secure: process.env.NODE_ENV !== 'test',
    })
  )
  app.get('/api', (req: Request, res: Response) => { 
    res.send('API is running...') 
  })
  app.use('/api', 
    piecesRoutes, 
    authRoutes,
    artistsRoutes,
    uploadsRoutes,
  )

  const __dirname = path.resolve()
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
  app.use('/pieces', express.static(path.join(__dirname, '/uploads')))

  app.all('*', async (req, res) => {
    throw new NotFoundError();
  });
  
  app.use(errorHandler)
  // process.on('unhandledRejection', (err) => { 
  //   console.error(err);
  //   process.exit(1);
  // })

  app.listen(process.env.PORT, () => {
    console.log(`API is running in mode=${process.env.NODE_ENV} on port=${process.env.PORT}`)
  })
}

export default startApp
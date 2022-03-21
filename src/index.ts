import 'dotenv/config'
import 'express-async-errors'


import startApp from './starters/app'
import connectDB from './starters/db'

const NODE_ENV: string    = process.env.NODE_ENV!
const PORT: string        = process.env.PORT!
const MONGO_URI: string   = process.env.MONGO_URI!



connectDB()

const app = startApp()



process.on('unhandledRejection', (err) => { 
  console.error(err);
  process.exit(1);
})






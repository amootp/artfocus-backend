import { connect } from 'mongoose'

const connectDB = async () => {
  
  try {
    const mongoClient = await connect(process.env.MONGO_URI!, {})
    const host = mongoClient.connection.host
    console.log(`Connected to MongoDB: ${host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB

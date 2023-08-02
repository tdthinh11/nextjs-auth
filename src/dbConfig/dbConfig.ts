import mongoose from "mongoose";

export async function connect(dnName='') {
  const URL = `${process.env.MONGO_URL}/${dnName}`
  console.log('URL', URL)
  try {
    mongoose.connect(URL!)
    const connection = mongoose.connection
    connection.on('connected', () => {
      console.log('MongoDB connected')
    })

    connection.on('error', (err) => {
      console.log('MongoDB connected error log', err)
      process.exit()
    })
  } catch (error) {
    console.log('something went wrong', error)
  }
}
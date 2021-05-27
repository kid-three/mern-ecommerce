import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
// .js because its a file
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is runnin...')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server ruinnning in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)

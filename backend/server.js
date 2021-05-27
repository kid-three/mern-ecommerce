import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
// .js because its a file
import connectDB from './config/db.js'
// .js because its a file
import products from './data/products.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is runnin...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server ruinnning in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)

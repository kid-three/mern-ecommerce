import express from 'express'
const router = express.Router()
import { getProductById, getProducts } from '../controlers/productController.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router

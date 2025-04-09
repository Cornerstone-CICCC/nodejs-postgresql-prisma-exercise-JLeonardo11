import {Router} from 'express';
import productController from '../controllers/product.controller'

const ProductRouter = Router()

ProductRouter.get('/', productController.getAllProducts)
ProductRouter.get('/:id', productController.getProductById)
ProductRouter.post('/', productController.addProduct)
ProductRouter.put('/:id', productController.updateProductById)
ProductRouter.delete('/:id', productController.deleteProductById)                                                                                   

export default ProductRouter
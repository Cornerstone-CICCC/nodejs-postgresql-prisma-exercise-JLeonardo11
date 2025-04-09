import { Request, Response } from 'express'
import { Product } from '@prisma/client'
import ProductModel from '../models/product.model'

// Get all Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const Products = await ProductModel.fetchAllProducts()
    res.status(200).json(Products)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

// Get Product by id
const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const Product = await ProductModel.fetchProductById(id)
    if (!Product) {
      res.status(404).json({ message: "Product not found" })
      return
    }
    res.status(200).json(Product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to fetch Product" })
  }
}

// Add new Product
const addProduct = async (req: Request<{}, {}, Omit<Product, 'id'>>, res: Response) => {
  try {
    const { productName, price, } = req.body
    const Product = await ProductModel.createProduct({
      productName,
      price,
      
    })
    res.status(201).json(Product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Unable to add Product' })
  }
}

// Update Product by id
const updateProductById = async (req: Request<{ id: string }, {}, Partial<Product>>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { productName, price} = req.body
    const Product = await ProductModel.editProductById(id, {
      productName,
      price,
    })
    if (!Product) {
      res.status(404).json({ message: "Product not found" })
      return
    }
    res.status(200).json(Product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to update Product" })
  }
}

// Delete Product by id
const deleteProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const Product = await ProductModel.removeProductById(id)
    res.status(200).json(Product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to delete Product" })
  }
}

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById
}
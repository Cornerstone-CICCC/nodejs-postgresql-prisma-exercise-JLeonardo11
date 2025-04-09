import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient()

// Fetch all Products
const fetchAllProducts = async () => {
  return await prisma.product.findMany({
   
  })
}

// Fetch Product by id
const fetchProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id }
  })
}

// Create new Product
const createProduct = async (data: Omit<Product, 'id'>) => {
  return await prisma.product.create({ data })
}

// Edit Product by id
const editProductById = async (id: number, data: Partial<Product>) => {
  const foundProduct = await fetchProductById(id)
  if (!foundProduct) return null
  const newUpdate = {
    productname: data.productName ?? foundProduct.productName,
    price: data.price ?? foundProduct.price,
   
  }
  return await prisma.product.update({
    where: { id },
    data: newUpdate
  })
}

// Remove Product by id
const removeProductById = async (id: number) => {
  return await prisma.product.delete({ where: { id } })
}

export default {
  fetchAllProducts,
  fetchProductById,
  createProduct,
  editProductById,
  removeProductById
}
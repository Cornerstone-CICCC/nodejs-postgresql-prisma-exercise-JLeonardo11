import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import pageRouter from './routes/product.routes'

// Create server
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/:id', pageRouter)
app.use('/price', pageRouter)
app.use('/', pageRouter)

// Fallback
app.use((req: Request, res: Response) => {
  res.status(404).send('Invalid route!')
})

// Start server
const PORT = process.env.PORT || 5433
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
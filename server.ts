import cors from 'cors'
import express from 'express'
import legendsRouter from './routers/legends.ts'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use('/legends', legendsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
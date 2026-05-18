import express from 'express'
import legendsData from '../data/legendsData.json' with { type: 'json' }
import legendsClass from '../data/legendsClass.json' with { type: 'json' }

const router = express.Router()

router.get('/legendsData', (req, res) => {
  console.log(`Get data`)
  res.json(legendsData)
})

router.get('/legendsClass', (req, res) => {
  console.log(`Get data`)
  res.json(legendsClass)
})

export default router
import express from 'express'
import legendsData from '../data/legendsData.json' with { type: 'json' }
import legendsClass from '../data/legendsClass.json' with { type: 'json' }

const router = express.Router()

router.get('/legendsdata', (req, res) => {
  res.json(legendsData)
})

router.get('/legendsdata/:name', (req, res) => {
  const legendData = legendsData.find(legend => legend.name.toLowerCase() === req.params.name)

  res.json(legendData)
})


router.get('/legendsclass', (req, res) => {
  res.json(legendsClass)
})

export default router
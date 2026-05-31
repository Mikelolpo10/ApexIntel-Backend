import express from 'express'
import legendsData from '../data/legendsData.json' with { type: 'json' }
import legendsClass from '../data/legendsClass.json' with { type: 'json' }

const router = express.Router()

router.get('/legendsdata', (req, res) => {
  const expand = req.query.expand

  if (expand === 'fulldata') {
    res.status(200)
    return res.json(legendsData)
  }

  const result = legendsData.map(legend => {
    const data = {
      name: legend.name,
      path: legend.path,
      img: legend.img,
    }

    return data
  })
  res.json(result)
})

router.get('/legendsdata/:name', (req, res) => {
  const legendData = legendsData.find(legend => legend.name.toLowerCase() === req.params.name)

  res.json(legendData)
})


router.get('/legendsclass', (req, res) => {
  res.json(legendsClass)
})

export default router
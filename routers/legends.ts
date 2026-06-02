import express from 'express'
import legendsData from '../data/legendsData.json' with { type: 'json' }
import legendsClass from '../data/legendsClass.json' with { type: 'json' }

const router = express.Router()

type PartialData = {
  name: string;
  path: string;
  img: string;
}

interface Ability {
  img: string;
  name: string;
  description: string;
}

interface Legend {
  name: string;
  realName: string;
  nickname: string;
  quote: string;
  path: string;
  img: string;
  class: string;
  gender: string;
  age: string;
  homeworld: string;
  passive: Ability;
  tactical: Ability;
  ultimate: Ability;
  description: string;
}

router.get('/legendsdata', (req, res): void => {
  const expand = req.query.expand as string | undefined

  if (expand === 'fulldata') {
    res.status(200)
    res.json(legendsData as Legend[])
  }

  const result = legendsData.map(legend => {
    const data: PartialData = {
      name: legend.name,
      path: legend.path,
      img: legend.img,
    }

    return data
  })
  res.json(result)
})

router.get('/legendsdata/:name', (req, res): void => {
  const legendData: Legend | undefined = legendsData.find(legend => legend.name.toLowerCase() === req.params.name)

  res.json(legendData)
})


router.get('/legendsclass', (req, res) => {
  res.json(legendsClass)
})

export default router
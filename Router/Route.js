const express = require('express')
const { DataModel } = require('../Model/DataModel')
const router = express.Router()
router.get('/', async(req, res) => {
    const data=await DataModel.find()
    res.send({msg:data})
})
router.post('/post', async (req, res) => {
    const dataValue = await new DataModel(req.body)
    dataValue.save()
    res.send('post successful...')
})

module.exports = { router }
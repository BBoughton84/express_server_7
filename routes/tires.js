const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('tires')
    .then(result => {
      res.send(result)
    })
})

router.get('/:id', (req, res) => {
  var getId = req.params.id
  knex('tires').where('id', getId)
    .then(result => {
      res.send(result)
    })
})

router.post('/new', (req, res) => {
  var newBrand = req.body.brand
  var newName = req.body.name
  var newSize = req.body.size
  knex('tires').insert({brand:newBrand, name:newName, size:newSize}).returning(['id', 'brand', 'name', 'size'])
    .then(result => {
      res.send(result)
    })
})

router.patch('/:id', (req, res) => {
  var changeId = req.params.id
  var changeBrand = req.body.brand
  var changeName = req.body.name
  var changeSize = req.body.size
  knex('tires').where('id', changeId).update({name:changeName, brand:changeBrand, size:changeSize}).returning(['id', 'brand', 'name', 'size'])
    .then(result => {
      res.send(result)
    })
})


router.delete('/:id', (req, res) => {
  var dId = req.params.id
  knex('tires').where('id', dId).del()
    .then(result => {
      res.send(200)
    })
})


module.exports = router

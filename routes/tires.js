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





module.exports = router

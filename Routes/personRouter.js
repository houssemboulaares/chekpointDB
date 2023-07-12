const personController = require('../controllers/personController')



const Router = require('express').Router()


Router.get('/get',personController.get)
Router.get('/getByFoods',personController.getByFoods)
Router.get('/getById',personController.getById)
Router.post('/add',personController.add)
Router.put('/pushHamburger',personController.pushHamburger)
Router.put('/changeAge',personController.changeAge)
Router.delete('/deleteById',personController.deleteById)
Router.delete('/deleteByName',personController.deleteByName)
module.exports = Router 
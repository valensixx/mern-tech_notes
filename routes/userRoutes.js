const express = require('express')
const router = express.Router()
const usersControler = require('../controllers/usersController')

router.route('/')
    .get(usersController.getAllUsers) //match as crud --> read
    .post(usersController.createNewUser) // --> create
    .patch(usersController.updateUser) // --> update 
    .delete(usersController.deleteUser) // --> delete

module.exports = router
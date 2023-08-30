const express = require('express')
const router = express.Router()

router.route('/')
    .get() //match as crud --> read
    .post() // --> create
    .patch() // --> update 
    .delete() // --> delete

module.exports = router
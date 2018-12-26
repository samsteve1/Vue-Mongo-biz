//  pull in express and create a router
const express = require('express')
const router = express.Router()
//  add transaction and user routes to the Router
require('./routes/transaction')(router)
require('./routes/user')(router)
//  export module
module.exports = router

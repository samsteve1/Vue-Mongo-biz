//  pull in the user module
const User = require('../../models/user')
//  set up route end points
module.exports = function (router) {
  //  route endpoint to get user by ID
  router.get('/user/:id', function (req, res) {
    User.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding user',
          error: err
        }))
  })
  //  endpoint to get user by email
  router.get('/user/email/:email', function (req, res) {
    User.find({ 'email': req.params.email }).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding user',
          error: err
        }))
  })
  //  end point to create a User
  router.post('/user', function (req, res) {
    let user = new User(req.body)
    user.save(function (err, user) {
      if (err) return console.log(err)
      res.status(200).json(user)
    })
  })
  //  user update endpoint
  router.put('/user/:id', function (res, req) {
    console.log(req.body)
    let qry = { _id: req.params.id }
    let doc = {
      // first: req.body.fisrName,
      // last: req.body.lastName,
      // email: req.body.email,
      // password: req.body.password,
      isActive: req.body.isActive
    }
    console.log(doc)
    User.update(qry, doc, function (err, respRaw) {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })
}

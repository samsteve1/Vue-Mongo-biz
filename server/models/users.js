//  Pull in momgoose
const mongoose = require('mongoose')
const chema = mongoose.Schema
//  create the Schema
let userSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: {  type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdOn: { type: Date, default: Date.now }
})
//  Bind schema to user model
const User = mongoose.model('User', userSchema)
//  export the module
module.exports = User

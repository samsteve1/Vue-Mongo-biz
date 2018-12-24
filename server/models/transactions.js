//  pull in mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//create the Schema
let transactionSchema = new Schema({
  userId: mongoose.SchemaTypes.ObjectId,
  transactionDate: { type: Date, required: true },
  transactionType: { type: String, required: true },
  description: { type: String, required: true },
  charge: { type: Number, default: 0 },
  deposits: { type: Number, default: 0 },
  notes: { type: String, default: '' },
  createdOn: { type: Date, default: Date.now }
})

//bind the schema to Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema)
//export the module
module.exports = Transaction

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let TokenSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  registered_at: Date
})

let Token = mongoose.model("Token", TokenSchema)

module.exports = Token

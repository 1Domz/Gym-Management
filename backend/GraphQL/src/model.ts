import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
})

export const Users = mongoose.model('user', userSchema)

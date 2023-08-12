import { Users } from '../model.js'

import bcrypt from 'bcrypt'

export const createUser = async (
  firstname: String,
  lastname: String,
  email: String,
  password: String
) => {
  try {
    const hashPassword = await bcrypt.hash(password, 10)

    const userExist = await Users.findOne({ email })

    if (userExist) throw new Error('Email already exist')

    const username = await new Users({
      firstname,
      lastname,
      email,
      password: hashPassword,
    })

    await username.save()
    return username
  } catch (error) {
    console.error('Error creating user:', error.message)
    throw new Error('Failed to create user.')
  }
}

'use client'

import { useMutation } from '@apollo/client'
import { FormEvent, useState } from 'react'
import { TextField } from '../components/ui/textfield'
import { Button } from '../components/ui/button'
import { signUp } from '../common/mutation/signup'

// interface User {
//   firstname: string
//   password: string
// }

// interface SignupData {
//   Signup: User
// }

interface SignupVariables {
  firstname: string
  lastname: string
  email: string
  password: string
}

export default function Register() {


  const [SignupMutation, { loading, error }] =
    useMutation<SignupVariables>(signUp)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  if (error) return `Submission error ${error.message}`
  if (loading) return <h1>Loading ...</h1>

  const checkPassword = () => {
    if (password !== confirmPassword) {
      return 'your password is not match'
    }
  }
  const handleSignUp = (e: FormEvent) => {
    try {
      checkPassword()
      e.preventDefault() // Prevent the default form submission
      SignupMutation({
        variables: {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        },
      })
    } catch (error) {}
  }

  return (
    <div className='h-100 my-40'>
      <div className='flex justify-center '>
        <h1 className=''>Register</h1>
        <div className='grid grid-cols-2 w-60 h-28 my-16'>
          <form onSubmit={handleSignUp}>
            <TextField
              name='First name'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              name='Last name'
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              name='Email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              name='Password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
            <TextField
              name='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
              type='password'
            />

            <Button name='Sign up' type='submit' />
          </form>
        </div>
      </div>
    </div>
  )
}

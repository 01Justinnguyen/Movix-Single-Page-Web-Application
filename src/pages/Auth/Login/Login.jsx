import Button from '@/components/button/Button'
import Field from '@/components/field/Field'
import Input from '@/components/input/Input'
import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage'
import './login.css'

const Login = () => {
  return (
    <AuthenticationPage>
      <form className="form">
        <Field>
          <Input hasIcon label="Enter your email" placeholder="Enter your email"></Input>
        </Field>
        <Field>
          <Input label="Enter your password"></Input>
        </Field>
        <Field>
          <Input label="Enter your confirm password"></Input>
        </Field>
        <div className="text-left have-account text-[16px] mb-5">
          Don&apos;t have an account?{' '}
          <NavLink to={'/register'}>
            <span className="text-orange hover:opacity-95">Register</span>
          </NavLink>
        </div>
        <Button className="transition-all hover:scale-105">Login</Button>
      </form>
    </AuthenticationPage>
  )
}

export default Login

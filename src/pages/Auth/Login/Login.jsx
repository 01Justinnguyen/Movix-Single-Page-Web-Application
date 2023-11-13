import Button from '@/components/button/Button'
import Field from '@/components/field/Field'
import Input from '@/components/input/Input'
import {} from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage'
import './login.css'

const Login = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control
  } = useForm()

  const onSubmitHandle = (values) => {
    console.log('🐻 ~ file: Input.jsx:18 ~ onSubmitHandle ~ values:', values)
  }
  return (
    <AuthenticationPage>
      <div className="form-wrapper rounded-xl">
        <form onSubmit={handleSubmit(onSubmitHandle)} className="w-full form">
          <Field>
            <Input control={control} name="email" label="Enter your email" type="email" placeholder="Enter your email"></Input>
          </Field>
          <Field>
            <Input control={control} hasIcon name="password" label="Enter your password"></Input>
          </Field>
          {/* <Field>
            <Input hasIcon name="rePassword" label="Enter your confirm password"></Input>
          </Field> */}
          <div className="text-left have-account text-[16px] mb-5 mt-10">
            Don&apos;t have an account?{' '}
            <NavLink to={'/register'}>
              <span className="text-orange hover:opacity-95 hover:underline">Register</span>
            </NavLink>
          </div>
          <Button className="transition-all hover:scale-105">Login</Button>
        </form>
      </div>
    </AuthenticationPage>
  )
}

export default Login

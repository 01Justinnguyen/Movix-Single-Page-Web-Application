import Button from '@/components/button/Button'
import Field from '@/components/field/Field'
import ReCAPTCHA from 'react-google-recaptcha'
import Input from '@/components/input/Input'
import {} from 'react'
import { NavLink } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage'
import './register.css'

const Register = () => {
  function onChangeReCAPTCHA(value) {
    console.log('Captcha value:', value)
  }
  return (
    <AuthenticationPage>
      <div className="form-wrapper rounded-xl">
        <form className="w-full form">
          <Field>
            <Input name="email" label="Enter your email" placeholder="Enter your email"></Input>
          </Field>
          <Field>
            <Input hasIcon name="password" label="Enter your password"></Input>
          </Field>
          <Field>
            <Input hasIcon name="rePassword" label="Enter your confirm password"></Input>
          </Field>
          <ReCAPTCHA sitekey="6Le_OAspAAAAAJnNcw3FinpwOdlUsZZTSUtJHDaF" onChange={onChangeReCAPTCHA} />
          <div className="text-left have-account text-[16px] mb-5 mt-10">
            Already have an account?
            <NavLink to={'/login'}>
              {' '}
              <span className="text-orange hover:opacity-95 hover:underline">Login</span>
            </NavLink>
          </div>
          <Button className="mt-10 transition-all hover:scale-105">Login</Button>
        </form>
      </div>
    </AuthenticationPage>
  )
}

export default Register

import Button from '@/components/button/Button'
import Field from '@/components/field/Field'
import ReCAPTCHA from 'react-google-recaptcha'
import Input from '@/components/input/Input'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage'
import './register.css'
import { useForm } from 'react-hook-form'
import RadioHook from '@/components/radio/RadioHook'

const Register = () => {
  const [recaptcha, setRecapcha] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control
  } = useForm()

  function onChangeReCAPTCHA(value) {
    setRecapcha(value)
  }

  const onSubmitHandle = (values) => {
    console.log('🐻 ~ file: Register.jsx:24 ~ onSubmitHandle ~ values:', values)
  }
  return (
    <AuthenticationPage>
      <div onSubmit={handleSubmit(onSubmitHandle)} className="form-wrapper rounded-xl">
        <form className="w-full form">
          <Field>
            <Input control={control} name="email" label="Enter your email" placeholder="Enter your email"></Input>
          </Field>
          <Field>
            <Input control={control} hasIcon name="password" label="Enter your password"></Input>
          </Field>
          <Field>
            <Input control={control} hasIcon name="rePassword" label="Enter your confirm password"></Input>
          </Field>
          <Field>
            <div>
              <label htmlFor="" className="block mb-3 cursor-pointer">
                Gender
              </label>
              <div className="flex items-center gap-5">
                <div className="flex items-centers gap-x-3">
                  <RadioHook name="gender" control={control} value="male" />
                  <span>Male</span>
                </div>
                <div className="flex items-centers gap-x-3">
                  <RadioHook name="gender" control={control} value="female" />
                  <span>Female</span>
                </div>
              </div>
            </div>
          </Field>
          <ReCAPTCHA sitekey="6Le_OAspAAAAAJnNcw3FinpwOdlUsZZTSUtJHDaF" name="ReCAPTCHA" {...register('ReCAPTCHA')} onChange={onChangeReCAPTCHA} />
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

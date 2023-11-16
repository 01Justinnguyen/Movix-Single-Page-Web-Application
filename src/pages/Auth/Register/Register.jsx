import * as yup from 'yup'
import Button from '@/components/button/Button'
import Field from '@/components/field/Field'
import ReCAPTCHA from 'react-google-recaptcha'
import Input from '@/components/input/Input'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage'
import './register.css'
import { useForm } from 'react-hook-form'
import RadioHook from '@/components/radio/RadioHook'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import Label from '@/components/label/Label'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '@/firebase/firebase-config'

const schemaValidation = yup
  .object({
    username: yup.string().required('Vui lòng nhập đầy đủ username'),
    email: yup.string().email('Please enter valid email').required('Please enter your email address'),
    password: yup.string().required('Please enter your password').min(8, 'Your password must be at least 8 characters'),
    rePassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    gender: yup.string().required('Please select your gender').oneOf(['male', 'female'], 'Please select correct')
  })
  .required()

const Register = () => {
  useEffect(() => {
    document.title = 'Register Page'
  }, [])
  const navigate = useNavigate()
  const [captchaIsDone, setCaptchaIsDone] = useState(false)
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
    watch
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: 'onBlur',
    defaultValues: {
      gender: 'male'
    }
  })

  useEffect(() => {
    const arrErrors = Object.values(errors)
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message)
    }
  }, [errors])

  function onChangeReCAPTCHA() {
    setCaptchaIsDone(true)
  }

  const handleSignUp = async (values) => {
    if (Boolean(captchaIsDone) === false) {
      toast.error('Please accept reCapcha')
      return
    }
    if (!isValid) return

    try {
      const credentials = await createUserWithEmailAndPassword(auth, values.email, values.password)
      await updateProfile(auth.currentUser, {
        displayName: values.username
      })

      const userRef = collection(db, 'users')
      await addDoc(userRef, {
        email: values.email,
        password: values.password,
        username: values.username,
        id: credentials.user.uid
      })
      toast.success('Register successfully!!!')
    } catch (error) {
      toast.error('Something went wrong', error.message)
      console.log(error.message)
    }
  }

  const watchGender = watch('gender')

  return (
    <AuthenticationPage>
      <div onSubmit={handleSubmit(handleSignUp)} className="form-wrapper rounded-xl">
        <form className="w-full form">
          <Field>
            <Input type="text" control={control} name="username" label="Enter your username" placeholder="Enter your username"></Input>
          </Field>
          <Field>
            <Input type="email" control={control} name="email" label="Enter your email" placeholder="Enter your email"></Input>
          </Field>
          <Field>
            <Input control={control} hasIcon name="password" label="Enter your password"></Input>
          </Field>
          <Field>
            <Input control={control} hasIcon name="rePassword" label="Enter your confirm password"></Input>
          </Field>
          <Field>
            <div>
              <Label>Select your gender</Label>
              <div className="flex items-center gap-5 mt-5">
                <div className="flex items-centers gap-x-3">
                  <RadioHook checked={watchGender === 'male'} name="gender" value="male" control={control} />
                  <span>Male</span>
                </div>
                <div className="flex items-centers gap-x-3">
                  <RadioHook checked={watchGender === 'female'} name="gender" value="female" control={control} />
                  <span>Female</span>
                </div>
              </div>
            </div>
          </Field>
          <ReCAPTCHA sitekey="6Le_OAspAAAAAJnNcw3FinpwOdlUsZZTSUtJHDaF" onChange={onChangeReCAPTCHA} />
          <div className="text-left have-account text-[16px] mb-5 mt-10">
            Already have an account?
            <NavLink to={'/login'}>
              {' '}
              <span className="text-orange hover:opacity-95 hover:underline">Login</span>
            </NavLink>
          </div>
          <Button className="mt-10 transition-all hover:scale-105">Register</Button>
        </form>
      </div>
    </AuthenticationPage>
  )
}

export default Register

import * as yup from 'yup'
import './login.css'
import Button from '@/components/button/Button'
import Field from '@/components/field/Field'
import Input from '@/components/input/Input'
import { auth } from '@/firebase/firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthenticationPage from '../AuthenticationPage'
import { yupResolver } from '@hookform/resolvers/yup'

const schemaValidation = yup.object({
  email: yup.string().email('Vui lòng nhập email hợp lệ').required('Vui lòng nhập email'),
  password: yup.string().required('Vui lòng nhập mật khẩu')
})

const Login = () => {
  useEffect(() => {
    document.title = 'Login Page'
  }, [])
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: 'onBlur'
  })

  useEffect(() => {
    const arrErrors = Object.values(errors)
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message)
    }
  }, [errors])

  const handleSignIn = async (values) => {
    if (!isValid) return

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
      navigate('/')
    } catch (error) {
      console.log('🐻 ~ file: SignInPage.jsx:49 ~ handleSignIn ~ error:', error.message)
      if (error.message.includes('wrong-password') || error.message.includes('Firebase: Error (auth/user-not-found)') || error.message.includes('Firebase: Error (auth/invalid-login-credentials).'))
        toast.error('It seems your email or password was wrong')
    }
  }
  return (
    <AuthenticationPage>
      <div className="form-wrapper rounded-xl">
        <form onSubmit={handleSubmit(handleSignIn)} className="w-full form">
          <Field>
            <Input control={control} name="email" label="Enter your email" type="email" placeholder="Enter your email"></Input>
          </Field>
          <Field>
            <Input control={control} hasIcon name="password" label="Enter your password"></Input>
          </Field>
          <div className="text-left have-account text-[16px] mb-5 mt-10">
            Don&apos;t have an account?{' '}
            <NavLink to={'/register'}>
              <span className="text-orange hover:opacity-95 hover:underline">Register</span>
            </NavLink>
          </div>
          <Button className="transition-all hover:scale-105" disabled={isSubmitting}>
            Login
          </Button>
          <span className="block mt-10 mb-5 text-white">Or continue with</span>
          <div className="socialIcons gap-x-4">
            <span className="icon icon-login">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </span>

            <span className="icon icon-login">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </span>

            <span className="icon icon-login">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </span>
          </div>
        </form>
      </div>
    </AuthenticationPage>
  )
}

export default Login

import { auth } from '@/firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ ...props }) => {
  const [userInfo, setUserInfo] = useState({})

  const values = { userInfo, setUserInfo }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user)
    })
  }, [])

  return <AuthContext.Provider value={values} {...props}></AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (typeof context === 'undefined') throw new Error('useAuth must be used within AuthProvider')
  return context
}

export { AuthProvider, useAuth }

import {} from 'react'
import { NavLink } from 'react-router-dom'
import './AuthenticationPage.css'
const AuthenticationPage = ({ children }) => {
  return (
    <div className="mt-[100px] min-h-[1000px]">
      <div className="mx-auto text-center text-white contentWrapper">
        <NavLink to={'/login'}>
          <img className="inline-block h-[80px] logo mx-auto mb-10" src="/movix-logo.svg" alt="Movix logo" />
        </NavLink>
        {children}
      </div>
    </div>
  )
}

export default AuthenticationPage

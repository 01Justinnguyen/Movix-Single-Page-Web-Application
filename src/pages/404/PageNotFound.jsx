import {} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import './PageNotFound.css'
const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="pageNotFound bg-primary">
      <div className="page-content">
        <img src="./404.png" alt="notfound" className="image" />
        <h1 className="heading">404 - Looks like you&apos;re lost.</h1>
        <p className="text-lg leading-5 description">Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?</p>
        <Button className="font-semibold transition duration-300 transform rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-95 hover:scale-105" onClick={() => navigate('/')}>
          Go back home
        </Button>
      </div>
    </div>
  )
}

export default PageNotFound

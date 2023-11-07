import {} from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../banner/Banner'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home page">
      <Banner />
    </div>
  )
}

export default Home

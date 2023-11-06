import {} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return <div className="home page">This is my home page</div>
}

export default Home

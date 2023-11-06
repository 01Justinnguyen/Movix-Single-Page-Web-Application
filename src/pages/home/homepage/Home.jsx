import {} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="contentWrapper h-[60px]">
      <div className="cursor-pointer logo">
        <img className="h-[50px] hover:opacity-95 hover:scale-105" src="./movix-logo.svg" alt="Movix logo" />
      </div>
    </div>
  )
}

export default Home

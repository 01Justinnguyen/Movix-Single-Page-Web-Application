import {} from 'react'
import { useParams } from 'react-router-dom'
import './explore.css'
const Explore = () => {
  const { mediaType } = useParams()
  console.log('🐻 ~ file: explore.jsx:6 ~ Explore ~ mediaType:', mediaType)
  return <div className="p-5 text-white pt-[70px]">This is explore {mediaType} page</div>
}

export default Explore

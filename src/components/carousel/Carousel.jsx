import {} from 'react'
import './Carousel.css'
import SwitchTab from '../switchTab/SwitchTab'

const Carousel = ({ title }) => {
  return (
    <div className="carouselSection">
      <div className="flex items-center justify-between !mb-5 contentWrapper">
        <span className="carouselTitle text-[24px] text-white font-normal">{title}</span>
        <SwitchTab />
      </div>
      <div className="carousel">
        <div className="contentWrapper">this is carousel</div>
      </div>
    </div>
  )
}

export default Carousel

import { useState } from 'react'
import './switchTab.css'

const SwitchTab = ({}) => {
  const [active, setActive] = useState(false)

  const onTabChange = () => {
    setActive(!active)
  }

  return (
    <div onClick={onTabChange} className="switchTab h-[34px] bg-white rounded-[20px] p-[2px] transition-all">
      <div className="tabItems h-[30px] flex items-center relative">
        <span className={`tabItem cursor-pointer w-[100px] text-primary flex h-full duration-600  items-center justify-center z-10`}>Day</span>
        <span className={`tabItem cursor-pointer w-[100px] flex h-full duration-600 text-primary items-center justify-center z-10`}>Week</span>
        <span className={`movingBg bg-hero-pattern absolute w-[100px] h-[30px] rounded-[20px] ${active === false ? 'left-0' : 'left-[100px]'} transition-switchTab duration-600`}></span>
      </div>
    </div>
  )
}

export default SwitchTab

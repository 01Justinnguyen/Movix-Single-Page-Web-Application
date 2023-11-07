import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [show, setShow] = useState(true)
  const [showProfile, setShowProfile] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  //Đảm bảo khi chuyển trang thì location sẽ lên đầu trang
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  //Xử lý ẩn hiện khi scroll header
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShow(false)
      } else {
        setShow(true)
      }
    })
  })

  const handleShowProfile = () => {
    setShowProfile(!showProfile)
  }

  return (
    <header className={`transition-all fixed w-[100%] h-[60px] z-[2] bg-[rgba(0,0,0,0.25)] backdrop-blur-sm ${show ? '' : 'translate-y-[-60px]'}`}>
      <div className="flex items-center justify-between h-full contentWrapper">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img className="h-[50px] hover:opacity-95 hover:scale-105" src="./movix-logo.svg" alt="Movix logo" />
        </div>

        <div className="flex items-center text-lg text-white list-none header-right gap-x-5">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li className="relative" onClick={handleShowProfile}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
            {showProfile && (
              <div className="absolute header-menu-profile w-[200px] top-[150%] right-0 bg-white text-black p-2">
                <div className="h-7 bg-green">
                  <span>Hello Liam</span>
                </div>
                <ul className="">
                  <li>
                    <a href="">Profile</a>
                  </li>
                  <li>
                    <a href="">Log out</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <a href="#">
              <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </a>
          </li>
        </div>
      </div>
    </header>
  )
}

export default Header

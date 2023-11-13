import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [show, setShow] = useState(true)
  const [showProfile, setShowProfile] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  //Đảm bảo khi chuyển trang thì location sẽ lên đầu trang
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  //Xử lý ẩn hiện khi scroll header
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  const handleShowProfile = () => {
    setShowProfile(!showProfile)
  }

  const handleCloseSearch = () => {
    setShowSearch(false)
  }

  const handleShowSearch = () => {
    setShowSearch(true)
  }

  const handleSearchQuery = (e) => {
    if (e.key === 'Enter' && query?.length > 0) {
      navigate(`/search/${query}`)
      setTimeout(() => {
        setShowSearch(false)
      }, 800)
    }
  }

  const setFilterDebounce = debounce((e) => setQuery(e.target.value), 300)
  // console.log('🐻 ~ file: Header.jsx:11 ~ Header ~ query:', query)

  return (
    <header className={`transition-all fixed w-[100%] h-[60px] z-[2] top-0 bg-[rgba(0,0,0,0.25)] backdrop-blur-sm ${show ? '' : 'translate-y-[-60px]'}`}>
      <div className="flex items-center justify-between h-full contentWrapper">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img className="h-[50px] hover:opacity-95 hover:scale-105" src="/movix-logo.svg" alt="Movix logo" />
        </div>

        <div className="flex items-center text-lg text-white list-none header-right gap-x-5">
          <li>
            <NavLink to={'/explore/movie'}>Movies</NavLink>
          </li>
          <li>
            <NavLink to={'/explore/tv'}>TV Shows</NavLink>
          </li>
          <li className="relative cursor-pointer hover:text-pink" onClick={handleShowProfile}>
            <span href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            {showProfile && (
              <div className="absolute header-menu-profile w-[200px] top-[130%] right-0 bg-primary bg-opacity-80 text-white rounded-lg">
                <div className="m-2 text-center text-white rounded-lg bg-primary h-7">
                  <span>Hello Liam</span>
                </div>
                <ul className="m-2 list-action">
                  <li className="p-1 hover:text-pink">
                    <a className="flex items-center gap-x-2" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      Profile
                    </a>
                  </li>
                  <li className="p-1 hover:text-pink">
                    <a className="flex items-center gap-x-2" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                      Log out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <span onClick={handleShowSearch} className="cursor-pointer hover:text-pink" href="#">
              <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
          </li>
        </div>
      </div>

      {showSearch && (
        <div className="absolute w-full bg-white searchBar animate-searchDown">
          <div className="contentWrapper">
            <div className="searchInput">
              <input onKeyUp={handleSearchQuery} onChange={setFilterDebounce} className="p-4 text-lg font-medium" type="text" placeholder="Search for a movie or tv show...." />
              <span onClick={handleCloseSearch} className="block text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition-all cursor-pointer hover:scale-150">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

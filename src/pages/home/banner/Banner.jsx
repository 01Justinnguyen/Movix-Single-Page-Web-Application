import LazyImage from '@/components/lazyLoadImage/LazyImage'
import useFetchData from '@/hooks/useFetchData'
import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'
import './banner.css'
const Banner = () => {
  const [background, setBackground] = useState()
  const [query, setQuery] = useState(null)
  const { data, loading } = useFetchData('/movie/upcoming')

  useEffect(() => {
    //kiểm tra background được mount vào giao diện chưa
    //======> Đang bị lỗi cần fix sau <=======
    if (!background) {
      const randomIndex = Math.floor(Math.random() * data?.results?.length)
      const bg = 'https://image.tmdb.org/t/p/original' + data?.results?.[randomIndex]?.backdrop_path
      setBackground(bg)
    }

    //random background mỗi 10s
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * data?.results?.length)
      const bg = 'https://image.tmdb.org/t/p/original' + data?.results?.[randomIndex]?.backdrop_path
      setBackground(bg)
    }, 10000)

    return () => clearInterval(timer)
  }, [data, background])

  // console.log('🐻 ~ file: Banner.jsx:9 ~ Banner ~ query:', query)

  const setFilterDebounce = debounce((e) => setQuery(e.target.value), 500)

  return (
    <div className="banner">
      {!loading && background && (
        <div className="backdrop-img">
          <LazyImage src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>

      <div className="z-10 contentWrapper">
        <div className="flex flex-col items-center text-white BannerContent max-w-[800px] mr-auto ml-auto">
          <span className="block title mb-0 text-[98px] font-bold leading-tight">Welcome.</span>
          <span className="subTitle text-[24px] mb-10">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="searchInput">
            <input onChange={setFilterDebounce} className="text-[14px] font-semibold h-[50px] bg-white outline-none border-none px-5" type="text" placeholder="Search for a movie or tv show...." />
            <button className="w-[100px] h-[50px] text-white outline-none border-none text-base cursor-pointer hover:opacity-95">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

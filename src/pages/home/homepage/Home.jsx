import {} from 'react'
import Banner from '../banner/Banner'
import Popular from '../popular/Popular'
import TopRated from '../topRated/TopRated'
import Trending from '../trending/Trending'
import Upcoming from '../upcoming/Upcoming'

const Home = () => {
  return (
    <div className="text-white home page">
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
      <Upcoming />
    </div>
  )
}

export default Home

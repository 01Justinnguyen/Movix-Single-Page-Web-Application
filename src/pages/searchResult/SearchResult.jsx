import {} from 'react'
import useFetchData from '@/hooks/useFetchData'
import { useParams } from 'react-router-dom'
import './searchResult.css'
const SearchResult = () => {
  const { query } = useParams()
  const { data } = useFetchData(`/search/multi?query=${query}`)
  console.log('🐻 ~ file: searchResult.jsx:9 ~ SearchResult ~ data:', data)
  return (
    <div className="pt-[100px] text-white min-h-[700px]">
      <div className="contentWrapper">
        <span className="text-[24px]">{`Search results of '${query}'`}</span>
        <br />
        <span className="resultNotFound text-[24px] text-secondary">Sorry, Results not found!</span>
      </div>
    </div>
  )
}

export default SearchResult

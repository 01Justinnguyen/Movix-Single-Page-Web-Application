import {} from 'react'
import useFetchData from '@/hooks/useFetchData'
import { useParams } from 'react-router-dom'
import './searchResult.css'
const SearchResult = () => {
  const { query } = useParams()
  const { data } = useFetchData(`/search/multi?query=${query}`)
  console.log('🐻 ~ file: searchResult.jsx:9 ~ SearchResult ~ data:', data)
  return <div className="pt-[70px] text-white">{`Search results of '${query}'`}</div>
}

export default SearchResult

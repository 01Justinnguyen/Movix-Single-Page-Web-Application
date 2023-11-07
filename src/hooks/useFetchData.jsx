import { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'

const useFetchData = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading('loading...')
        setData(null)
        setError(null)

        const responseData = await fetchDataFromApi(url)
        setLoading(false)
        setData(responseData)
      } catch (error) {
        setLoading(false)
        setError('Something went wrong!')
      }
    }
    fetchData()
  }, [url])
  return { data, loading, error }
}

export default useFetchData

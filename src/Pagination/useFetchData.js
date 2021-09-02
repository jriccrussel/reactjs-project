import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetchData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()

    // new set of items(or number of data) that are divided by 10
    setData(paginate(data))
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
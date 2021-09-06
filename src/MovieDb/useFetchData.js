import { useState, useEffect } from 'react'
import axios from 'axios'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetchData = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({ show: false, msg: '' })
    const [data, setData] = useState(null)

    const fetchMovies = async (url) => {
        setIsLoading(true)
        axios.get(url)
        .then(res => {
            console.log(res.data)
            
            if (res.data.Response === 'True') {
                setData(res.data.Search || res.data)
                setError({ show: false, msg: '' })
            } else {
                setError({ show: true, msg: res.data.Error })
            }
            setIsLoading(false)
        })
        .catch(error => console.log(error))
    }

    // const fetchMovies = async (url) => {
    //     setIsLoading(true)
    //     try {
    //         const response = await fetch(url)
    //         const data = await response.json()

    //     if (data.Response === 'True') {
    //         setData(data.Search || data)

    //         setError({ show: false, msg: '' })
    //     } else {
    //         setError({ show: true, msg: data.Error })
    //     }
    //         setIsLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`)
    }, [urlParams])
    return { isLoading, error, data }
}

export default useFetchData
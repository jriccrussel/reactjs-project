import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import useFetchData from './useFetchData'

// API REQUEST with access key cunstructor
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}` 

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    // [query, setQuery] - para sa search
    const [query, setQuery] = useState('batman')

    // const [isLoading, setIsLoading] = useState(true)
    // const [isError, setIsError] = useState(false)
    // const [movies, setMovies] = useState([])

    // Fetch Async 
    // const fetchMovies = async (url) => {
    //     setIsLoading(true)
    //     try {
    //         const response = await fetch(url)
    //         const data = await response.json()

    //         if (data.Response === 'True') {
    //             setMovies(data.Search)
    //             setIsError(false)
    //         } else {
    //             setIsError(true)
    //         }
    //         setIsLoading(false)
    //         console.log(setMovies())
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // Axios Fetch
    // const fetchMovies = async (url) => {
    //     setIsLoading(true)
    //     axios.get(url)
    //     .then(res => {
    //         console.log(res.data)
            
    //         if (res.data.Response === 'True') {
    //             setMovies(res.data.Search)
    //             setIsError(false)
    //         } else {
    //             setIsError(true)
    //         }
    //         setIsLoading(false)
    //     })
    //     .catch(error => console.log(error))
    // }

    // useEffect to display the list of movies
    // useEffect(() => {
    //     fetchMovies(`${API_ENDPOINT}&s=${query}`)
    // }, [query])

    const { isLoading, error, data: movies } = useFetchData(`&s=${query}`)

    return (
        // <AppContext.Provider value={{ isLoading, isError, movies, query, setQuery}}>
        //     {children}
        // </AppContext.Provider>
        <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
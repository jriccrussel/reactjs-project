import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import axios from 'axios'

import useFetchData from './useFetchData'

const SingleMovie = () => {
    const {id} = useParams()
    // const [details, setDetails] = useState({})
    // const [isLoading, setIsLoading] = useState(true)

    // Axios Fetch
    // const fetchDetails = async (url) => {
    //     setIsLoading(true)
    //     axios.get(url)
    //     .then(res => {
    //         console.log(res.data)
    //         setDetails(res.data)
    //         setIsLoading(false)
    //     })
    // }

    // Fetch Async Await 
    // const fetchMovie = async (url) => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setMovie(data)
    //     setLoading(false)
    // }

    // useEffect to display ang details sa movie(basically single page cya)
    // useEffect(() => {
    //     fetchDetails(`${API_ENDPOINT}&i=${id}`)
    // }, [id])

    // check ang data na gikan sa axios fetch
    // console.log(details)
    
    // const { Poster: poster, Title: title, Plot: plot, Year: year } = details

    const { isLoading, error, data: movie } = useFetchData(`&i=${id}`)

    if(isLoading) {
        return <div className="loading"></div>
    }
    if(error.show){
        return (
            <div className="page-error">
                <h1>{error.msg}</h1>
                <Link to="/" className="btn">
                    back to movies
                </Link>
            </div>
        )
    }
    
    console.log(movie)
    const { Poster: poster, Title: title, Plot: plot, Year: year } = movie

    return (
        <section className="single-movie">
            <img src={poster} alt={title} />
            <div className="single-movie-info">
                <h2>{title}</h2>
                <p>{plot}</p>
                <h4>{year}</h4>
                <Link to="/" className="btn">
                    back to movies
                </Link>
            </div>
        </section>
    )
}

export default SingleMovie

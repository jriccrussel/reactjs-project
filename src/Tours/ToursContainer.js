import { useState, useEffect } from 'react'
import Loading from './Loading'
import './Tours.css'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

const ToursContainer = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    // Remove Function that we need to pass it to the List Component
    const removeTours = (id) => {
        const newTours = tours.filter((tourId) => tourId.id !== id)
        setTours(newTours)
    }

    // Fetching the data from 'const = url'
    const fetchToursData = async () => {
        setLoading(true)
        
        // Network Errors using Try Catch Method
        try{
            const response = await fetch(url)
            // 'const toursData' the data we just fetched from the the api or 'const response'
            const toursData = await response.json()            
            setLoading(false)
            setTours(toursData)
        } catch(error){
            setLoading(false)
            console.log(error)
        }
    }

    // invoking the 'const = fetchToursData' using useEffect once it renders
    // '[]' would only run once
    useEffect(() => {
        fetchToursData()
    }, [])

    // loading component will render first as the browser refreshes
    if(loading){
        return(
            <main>
                <Loading />
            </main>
        )
    }

    return (
        <main>
            <Tours tours={tours} removeTours={removeTours}/>
        </main>
    )
}

export default ToursContainer

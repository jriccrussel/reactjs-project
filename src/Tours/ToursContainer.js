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
            // setTours(toursData) - receiving data from 'toursData' and in the useState the word 'tours' will automatically have the data coming from 'setTours'
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

    // if the 'tours'(parameter from useState and take note the 'tours' parameter would'nt had a data if was'nt from 'fetchToursData' inside the block the 'setTours(toursData)'(from the useState) is fetching the data) has no left(which been remove by clicking the 'Not Interested' button) it will just grab the 'fetchToursData' to display the fetched data again
    if(tours.length === 0){
        return (
            <main>
                <div className="title">
                    <h2>No Tours Left</h2>
                    <button className="btn" onClick={fetchToursData}>Refresh</button>
                </div>
            </main>
        )
    }

    return (
        <main>
            {/* tours={tours} - the word 'tours'(a parameter) is from the 'useState' and 'tours' will pass as props since 'setTours(toursData)' from 'fetchToursData' has fetched/grab the data */}
            {/* tours={tours} - will pass it to the 'List' Component because the 'tours={tours}' will expect the 'List' Component to display all the data using map method */}
            <Tours tours={tours} removeTours={removeTours}/>
        </main>
    )
}

export default ToursContainer

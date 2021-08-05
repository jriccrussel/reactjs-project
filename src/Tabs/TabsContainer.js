import {useState, useEffect} from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import './Tabs.scss'

const url = 'https://course-api.com/react-tabs-project'

const TabsContainer = () => {
    const [loading, setLoading] = useState(true)
    // the useState 'jobs' parameter is equal to the whole array properies of 'url' which is an API
    const [jobs, setJobs] = useState([])
    // the useState 'value' parameter is equal to index
    const [value, setValue] = useState(0)

    const fetchDataJobs = async () => {
        const response = await fetch(url)
        const NewFetchedJobsData = await response.json()
        setJobs(NewFetchedJobsData)
        setLoading(false)
    }

    // useEffect will display the fetched data after loading
    useEffect(() => {
        fetchDataJobs()
    }, [])

    // If still loading the Loading Section will display
    if(loading){
        return (
            <section className="section loading">
                <h1>Loading</h1>
            </section>
        )
    }

    const {company, dates, duties, title} = jobs[value]
    
    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>

            <div className="jobs-center">
                {/* Aside Button */}
                <div className="btn-container">
                    {jobs.map((newJobs, currentNewJobsIndex) => {
                        return (
                            <button
                                key={newJobs.id}
                                onClick={() => setValue(currentNewJobsIndex)}
                                className={`job-btn ${currentNewJobsIndex === value && 'active-btn'}`}
                            >{newJobs.company}</button>
                        )
                    })}
                </div>

                {/* Job Details */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {/* Iterate or Mapping all the data of 'duties' object properties from 'url'/ the API */}
                    {duties.map((newDuty, currentNewDutyIndex) => {
                        return (
                            <div key={currentNewDutyIndex} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <p>{newDuty}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
            <button type="button" className="btn">More Info</button>
            {/* <button type="button" className="btn">More Info</button> */}
        </section>
    )
}

export default TabsContainer

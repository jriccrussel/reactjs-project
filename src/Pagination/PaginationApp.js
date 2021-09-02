import { useState, useEffect } from 'react'
import { useFetchData } from './useFetchData'
import Item from './Followers'

import '../Pagination/Pagination.scss'

const PaginationApp = () => {
    const {loading, data} = useFetchData()
    const [page, setPage] = useState(0)
    const [followers, setFollowers] = useState([])

    useEffect(() => {
        // after loading e display niya ang mga data/items(remember ang items naka divide na to 10) and ang page is ang current page(inig click na nimo to page 2 then ang index nya is 1)
        if(loading) return
        setFollowers(data[page])
    }, [loading, page])

    // next button
    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1
            if (nextPage > data.length - 1) {
                nextPage = 0
            }
            return nextPage
        })
    }
    // previous button
    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1
            if (prevPage < 0) {
                prevPage = data.length - 1
            }
            return prevPage
        })
    }

    // ang current page naka display
    const handlePage = (index) => {
        setPage(index)
    }

    return (
        <main>
            <div className='section-title'>
                <h1>{loading ? 'loading...' : 'pagination'}</h1>
                <div className='underline'></div>
            </div>
            <section className="followers">
                <div className="container">
                    {followers.map((newFollowers) => {
                        return <Item key={newFollowers.id} {...newFollowers} />
                    })}
                </div>

                {!loading && (
                    <div className="btn-container">
                        <button className="prev-btn" onClick={prevPage}>prev</button>
                        {data.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`page-btn ${index === page ? 'active-btn' : null}`}
                                    onClick={() => handlePage(index)}
                                >
                                    {/* instead of 0 add ta 1 para ma change ang order sa page button */}
                                    {index + 1}
                                </button>
                            )
                        })}
                        <button className="next-btn" onClick={nextPage}>next</button>
                    
                    </div>
                )}
            </section>
        </main>
    )
}

export default PaginationApp

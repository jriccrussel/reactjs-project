import {useState} from 'react'
import List from './List'
import data from '../data/data-birthday'
import './birthday.css'

const Birthday = () => {
    const [people, setPeople] = useState(data)

    return (
        <main>
            <section className="container">
                <p>{people.length} Birthdays Today</p>
                <List people={people}/>
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    )
}

export default Birthday

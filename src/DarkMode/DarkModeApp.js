import {useState, useEffect} from 'react'
import data from '../data/data-darkmode'
import Article from './Article'
import '../DarkMode/DarkMode.scss'

// local storage
const getStorageTheme = () => {
    let storeTheme = 'light-theme'

    if(localStorage.getItem('storeTheme')){
        storeTheme = localStorage.getItem('storeTheme')
    }

    return storeTheme
}

const DarkModeApp = () => {
    // const [theme, setTheme] = useState('light-theme')

    // local storage
    const [theme, setTheme] = useState(getStorageTheme())

    const toggleTheme = () => {
        theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
    }

    useEffect(() => {
        document.documentElement.className = theme

        localStorage.setItem('storeTheme', theme)
    }, [theme])

    return (
        <main>
            <nav>
                <div className="nav-center">
                    <h1>Overreacted</h1>
                    <button className="btn" onClick={toggleTheme}>toggle</button>
                </div>    
            </nav>    
            <section className="articles">
                {data.map((newItem) => {
                    return <Article key={newItem.id} {...newItem}/>
                })}
            </section>        
        </main>
    )
}

export default DarkModeApp

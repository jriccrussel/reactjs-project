import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes, FaTwitter } from 'react-icons/fa'
import {links, social} from '../data/data-navbar'
import logo from './logo.svg'
import './Navbar.scss'


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo' />
                    {/* <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                        {showLinks ? <FaTimes/> : <FaBars /> }                        
                    </button> */}
                    <button className='nav-toggle'>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container show-container'>
                    <ul className='links'>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                        <li>
                            <a href="#">products</a>
                        </li>
                    </ul>
                </div>
                <ul className='social-icons'>
                    <li>
                        <a href="https://wwww.twitter.com">
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

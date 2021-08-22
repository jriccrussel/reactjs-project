import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes, FaTwitter } from 'react-icons/fa'
import {links, social} from '../data/data-navbar'
import logo from './logo.svg'
import './Navbar.scss'

const NavToggle = () => {
    const [showLinks, setShowLinks] = useState(false)
    
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo' />
                    {/* useState toggle */}
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                        {showLinks ? <FaTimes/> : <FaBars /> }                        
                    </button>
                </div>
                {showLinks && (
                    <div className='links-container show-container'>
                        <ul className='links'>
                            {links.map((newLink) => {
                                const {id, url, text} = newLink
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
                <ul className='social-icons'>
                    {social.map((newSocial) => {
                        const {id, url, icon} = newSocial
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavToggle

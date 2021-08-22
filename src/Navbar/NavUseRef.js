import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes, FaTwitter } from 'react-icons/fa'
import {links, social} from '../data/data-navbar'
import logo from './logo.svg'
import './Navbar.scss'

const NavUseRef = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const toggle = () => {
        setShowLinks(!showLinks)
    }
    
    useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height

        // if(showLinks){
        //     linksContainerRef.current.style.height = `${linkHeight}px`
        // } else {
        //     linksContainerRef.current.style.height = '0px'
        // }

        showLinks ? linksContainerRef.current.style.height = `${linkHeight}px` : linksContainerRef.current.style.height = '0px'
        console.log(linkHeight)
    }, [showLinks])

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo' />
                    {/* useState toggle */}
                    <button className='nav-toggle' onClick={toggle}>
                        {showLinks ? <FaTimes/> : <FaBars /> }                        
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
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

export default NavUseRef

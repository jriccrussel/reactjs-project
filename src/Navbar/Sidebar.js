import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes, FaTwitter } from 'react-icons/fa'
import {links, social} from '../data/data-navbar'
import logo from './logo.svg'
import './Navbar.scss'

const Sidebar = () => {
    return (
        // <div className='links-container show-container'>
        //     <ul className='links'>
        //         <li>
        //             <a href="#">home</a>
        //         </li>
        //         <li>
        //             <a href="#">about</a>
        //         </li>
        //         <li>
        //             <a href="#">contact</a>
        //         </li>
        //         <li>
        //             <a href="#">products</a>
        //         </li>
        //     </ul>
        // </div>

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
    )
}

export default Sidebar

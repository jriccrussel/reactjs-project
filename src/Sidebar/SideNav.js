import { FaTimes } from 'react-icons/fa'
import {links, social} from '../data/data-sidebar'
import logo from './logo.svg'
import { useCustomHookContext } from './context'

const SideNav = () => {
    const { isSidebarOpen, closeSidebar } = useCustomHookContext()

    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} alt="" className="logo" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((newLink) => {
                    const {id, url, text, icon} = newLink
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="social-icons">
                {social.map((newSocial) => {
                    const {id, url, icon} = newSocial
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default SideNav

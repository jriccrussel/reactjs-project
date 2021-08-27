import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from '../data/data-stripe'

const Sidebar = () => {
     // functions and state coming from 'useGlobalContext' context
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    return (
        <div
        className={`${
            isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
        }`}
        >
            <aside className='sidebar'>
                <button className='close-btn' onClick={closeSidebar}>
                <FaTimes />
                </button>
                <div className='sidebar-links'>
                    {/* nested map naa 2 or more properties*/}
                    {sublinks.map((item, index) => {
                        // mga properties ang sulod sa sublinks(ang data)
                        const { links, page } = item
                        return (
                        <article key={index}>
                            <h4>{page}</h4>
                            <div className='sidebar-sublinks'>
                                {links.map((link, index) => {
                                    // mga properties sulod sa 'links'
                                    const { url, icon, label } = link
                                    return (
                                    <a key={index} href={url}>
                                        {icon}
                                        {label}
                                    </a>
                                    )
                                })}
                            </div>
                        </article>
                        )
                    })}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
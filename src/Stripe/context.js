import React, { useState, useContext } from 'react'
import sublinks from '../data/data-stripe'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

    // '{ page: '', links: [] }' - default state values/properties mag expect ug values para sa page and links 
    const [page, setPage] = useState({ page: '', links: [] })

    // state value for the 'location' or ang coordinates or will be the 'coordinates' sa pag center sa submenu
    const [location, setLocation] = useState({})

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    // openSubmenu looking or mag expecting ut 'text' = 'page' and 'coordinates' = position sa hover or ang submenu position
    const openSubmenu = (text, coordinates) => {

        // grabbing the page property(na gikan sa data and naka object cya) and if equal cla sa 'text'(mag expect cya sa page) then display ang page text
        const subMenu = sublinks.find((link) => link.page === text);

        // Subpage displays the text with links
        setPage(subMenu)

        // Subpage hover position in the center
        setLocation(coordinates)

        // Subpage state changes when it hovers
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (

        // 'isSidebarOpen, openSidebar, closeSidebar, isSubmenuOpen, openSubmenu, closeSubmenu, page, location' - para ma gamit ning mga functionalities globally(sa bisag asa na component) u need to pass this values
        <AppContext.Provider
        value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            page,
            location,
        }}
        >
        {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppContext, AppProvider }
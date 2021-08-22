import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }
    
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
    }}>
        {children}
    </AppContext.Provider>
}

// Manual Method
// const AppProvider = ({prop}) => {
//     return <AppContext.Provider value="hello">{prop}</AppContext.Provider>
// }

// Dynamic Method with Custom Hooks and with useContext
export const useCustomHookContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
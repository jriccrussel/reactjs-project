import React, { useContext, useState, useEffect, useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    // Fetching data including the details
    const fetchData = useCallback( async () => {
        setLoading(true)

        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data)

            // properties destructure coming from 'url' api
            const {drinks} = data

            // Conditional Statemen to display the data
            if(drinks){
                const newCocktails = drinks.map((item) => {
                    // properties destructure coming from 'url' api
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass
                    } = item 
                    // reassign the destructure properties
                    return {
                        id: idDrink,
                        name: strDrink, 
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }

            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [setSearchTerm])

    // Display the fetched data 
    useEffect(() => {
        fetchData()
    }, [searchTerm, fetchData])

    return (
        <AppContext.Provider 
            value={{ loading, cocktails, searchTerm, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

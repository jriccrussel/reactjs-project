import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'


import useFetch from './useFetch'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

import reducer from './reducer'

// API Data
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
    isLoading: true,
    hits: [],
    query: 'react',
    page: 0,
    nbPages: 0,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(reducer, initialState)

    // Fetch Async 
    // const fetchStories = async (url) => {
    //     dispatch({ type: SET_LOADING })
    //     try {
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         dispatch({
    //             type: SET_STORIES,
    //             payload: { hits: data.hits, nbPages: data.nbPages },
    //         })
    //     } catch (error) {
    //       console.log(error)
    //     }
    // }

    // Axios Fetch
    // const fetchStories = async (url) => {
    //     dispatch({ type: SET_LOADING })
    //     axios.get(url)
    //     .then(res => {
    //         console.log(res.data)
            
    //         const newData = res.data
    //         dispatch({
    //             type: SET_STORIES,
    //             payload: { hits: newData.hits, nbPages: newData.nbPages },
    //         })
    //     })
    //     .catch(error => console.log(error))
    // }

    // useEffect(() => {
    //     fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    // }, [state.query, state.page])

    // Custom Hooks 
    const {state, removeStory, handleSearch, handlePage} = useFetch()

    // Remove Button 
    // const removeStory = (id) => {
    //     dispatch({type: REMOVE_STORY, payload: id})
    // }

    // // Search Form 
    // const handleSearch = (query) => {
    //     dispatch({type: HANDLE_SEARCH, payload: query})
    // }

    // // Pages
    // const handlePage = (value) => {
    //     dispatch({type: HANDLE_PAGE, payload: value})
    // }

    return (
        <AppContext.Provider value={{ ...state, removeStory, handleSearch, handlePage }}>
        {children}
        </AppContext.Provider>
    )
}
    // make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}
  
export { AppContext, AppProvider }
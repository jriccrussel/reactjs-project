import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

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

const useFetch = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING })
        axios.get(url)
        .then(res => {
            console.log(res.data)
            
            const newData = res.data
            dispatch({
                type: SET_STORIES,
                payload: { hits: newData.hits, nbPages: newData.nbPages },
            })
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    const removeStory = (id) => {
        dispatch({type: REMOVE_STORY, payload: id})
    }

    // Search Form 
    const handleSearch = (query) => {
        dispatch({type: HANDLE_SEARCH, payload: query})
    }

    // Pages
    const handlePage = (value) => {
        dispatch({type: HANDLE_PAGE, payload: value})
    }

    return {state, removeStory, handleSearch, handlePage}
}

export default useFetch

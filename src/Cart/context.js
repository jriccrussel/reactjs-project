import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from '../data/data-cart'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

// initial state
const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider = ({ children }) => {
    // reducer coming from 'reducer.js' actions(coditinal statement[if, switch]) 
    const [state, dispatch] = useReducer(reducer, initialState)

    // clear all cart
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    // remove item
    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    // increase quantity on the item
    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }

    // decrease quantity on the item
    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }

    // fetching data from an api and also e load una ang 'LOADING' action then e load dayon ang data
    const fetchData = async () => {
        dispatch({ type: 'LOADING' })
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    }

    // increase and decrease toogle 
    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    }

    // making sure e load ang data
    useEffect(() => {
        fetchData()
    }, [])

    // loading ang total price sa items 
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease,
                toggleAmount,
            }}
        >
        {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
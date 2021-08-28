import React from 'react'
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import './Cart.scss'
import { useGlobalContext } from './context'

const CartApp = () => {
    // functions coming from 'useGlobalContext' context
    const { loading } = useGlobalContext()

    // load the Loading first then display the components
    if (loading) {
      return (
        <div className='loading'>
            <h1>Loading...</h1>
        </div>
      )
    }
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    )
}

export default CartApp

const reducer = (state, action) => {
    // action clear all cart
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    // action remove cart item
    if (action.type === 'REMOVE') {
        return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
        }
    }

    // action increase cart item quantity
    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
        })
        return { ...state, cart: tempCart }
    }

    // action decrease cart item quantity
    if (action.type === 'DECREASE') {
        let tempCart = state.cart
        .map((cartItem) => {
            if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        })
        .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
    }

    // action get total prices 
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce(
        // cartTotal = total prices, cartItem = amount quantity
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                // total prices
                cartTotal.total += itemTotal

                // amount quantity
                cartTotal.amount += amount
                return cartTotal
            },
            {
                total: 0,
                amount: 0,
            }
        )
        // display 2 digits on the prices
        total = parseFloat(total.toFixed(2))

        return { ...state, total, amount }
    }

    // action load the LOADING first
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    // action after LOADING then display the cart items and other componets(like navbar, footer and etc...)
    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload, loading: false }
    }

    // action Toogle increase and decrease quantity
    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart
        .map((cartItem) => {
            if (cartItem.id === action.payload.id) {
            if (action.payload.type === 'inc') {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            if (action.payload.type === 'dec') {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            }
            return cartItem
        })
        .filter((cartItem) => cartItem.amount !== 0)

        return { ...state, cart: tempCart }
    }
    throw new Error('no matching action type')
}
  
export default reducer
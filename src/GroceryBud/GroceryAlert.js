import {useEffect} from 'react'

// 'type, msg' - properties sa 'alert' state
// 'removeAlert' - pass nato ang removeAlert prop naa value of 'showAlert' dynamic function
const GroceryAlert = ({type, msg, removeAlert, list}) => {
    useEffect(() => {
        // nag set ta ug TimeOut animation delay na when mo gawas ang removeAlert
        const timeOut = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeOut)
    }, [list])

    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}

export default GroceryAlert

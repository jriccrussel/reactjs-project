import {useState, useEffect} from 'react'
import List from './GroceryList'
import Alert from './GroceryAlert'

import './GroceryBud.scss'

const getLocalStorage = () => {
    let list = localStorage.getItem('list')

    if(list){
        return (
            list = JSON.parse(localStorage.getItem('list'))
        )
    } else {
        return []
    }
}

const GroceryBud = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState(getLocalStorage())
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello')
        // 'if(!name)' - if the value is empty and click the submit button then display the alert
        if(!name){  
            // MANUAL
            setAlert({
                show: true,
                msg: 'Please Enter Value',
                type: 'danger'
            })
            // DYNAMIC 
            showAlert(true, 'please enter value', 'danger')
        }
        // 'else if(name && isEdit)' - if 'name' has a value and 'isEdit' is true then can edit
        else if(name && isEdit){
            setList(
                list.map((itemEdit) => {
                    // take note ang 'editId' naa nay value na gi set na 'setEditId(id)' from 'editItem' function
                    if (itemEdit.id === editId){
                        // then if mga id's nag match then kwaon ang tanan data sa 'itemEdit' and kwaon ang value sa 'title'(naka set na ug 'name')
                        return {...itemEdit, title: name}
                    }
                    return itemEdit
                })
            )
            setName('')
            setEditId(null)
            setIsEdit(false)
            showAlert(true, 'value changed', 'success')
        }
        
        else{
            showAlert(true, 'item added to the list', 'success')
            const newItem = {
                id: new Date().getTime().toString(),
                title: name
            }
            // 'setList' - function that controls the array/generate the arrays of items to the list
            // '...list' - get all the 'list' state or data
            // 'newItem' - kada push/add sa data or values which is '...list' it also push/add ang properties which is ang 'newItem' na naa sulod na 'id' and 'title'
            setList([...list, newItem])
            setName('')
        }
    }

    // DYNAMIC and can be use the function infinitely, na naay mga set na properties 
    const showAlert = (show=true, msg="", type="") => { 
        // setAlert({show: show, msg: msg, type: type})
        setAlert({show, msg, type})
    }

    // Clear List Function
    const clearList = () => {
        showAlert(true, 'empty list', 'danger')
        setList([])
    }
    // Remove Item Function
    const removeItem = (id) => {
        showAlert(true, 'item removed', 'danger')
        // passing a new/current value na naa previous value/data
        setList(list.filter((itemRemove) => 
            // if ang new item id nag match/equal sa whatever na id ato gi pass/add then dili nya e return value/data
            itemRemove.id !== id
        ))
    }

    // Store sa local storage na naa sa inspect elements sa 'Application' > 'Storage' > 'Local Storage' > 'http://localhost:3000'
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const editItem = (id) => {
        // if ang new item id nag match/equal sa whatever na id ato gi pass/add then return nya an item(if mag match cya sa id)
        const specificItem = list.find((itemFind) => itemFind.id === id)
        // once ang id nag match then ang 'setIsEdit' is true
        setIsEdit(true)
        // 'setEditId' - find ang sakting id na dapat e edit
        setEditId(id)
        // 'setName - then we can edit the title'
        setName(specificItem.title)
    }

    return (
        <section className="section-center">
            <form  className="grocery-form" onSubmit={handleSubmit}>
                {/* If TRUE then display Alert Component */}
                {/* {...alert} - passing all the data to 'Alert' component */}
                {/* removeAlert={showAlert} - passing the 'showAlert' dynamic function to 'Alert' Component */}
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                <h3>Grocery Bud</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className='grocery'
                        placeholder="e.g. eggs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="submit-btn">
                        {isEdit ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {/* 'list.length && ' - display ang list once naa gi add na data(or item) */}
            {list.length && (
                <div className="grocery-container">
                    <List itemProp={list} removeItem={removeItem} editItemProp={editItem}/>
                    <button className="clear-btn" onClick={clearList}>Clear Items</button>
                </div>
            )}
        </section>
    )
}

export default GroceryBud

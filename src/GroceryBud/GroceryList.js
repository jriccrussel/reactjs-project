import {FaEdit, FaTrash} from 'react-icons/fa'

const GroceryList = ({itemProp, removeItem, editItemProp}) => {
    return (
        <div className="grocery-list">
             {itemProp.map((newItems) => {
                 const {id, title} = newItems

                 return (
                     <article className="grocery-item">
                         <p className="title">{title}</p>
                         <div className="btn-container">
                            <button type='button' className="edit-btn" onClick={() => editItemProp(id)}>
                                <FaEdit />
                            </button>
                            <button type='button' className="delete-btn" onClick={() => removeItem(id)}>
                                <FaTrash />
                            </button>
                         </div>
                     </article>
                 )
             })}
        </div>
    )
}

export default GroceryList

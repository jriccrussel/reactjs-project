import { useState } from 'react'

const List = ({id, image, info, price, name, removeTours}) => {
    const [readMore, setReadMore] = useState(false)

    return (
        // the id, image, info, price, name props are same as tourItem.id, tourItem.image, tourItem.info, tourItem.price, tourItem.name
        // the word "tourItem" is from the 'Tours' component 
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                {/* `${info.substring(0, 200)}...` - displays on the 1st 200 words */}
                <p>{readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </button>
                </p>
                {/* removeTours prop(coming from the 'ToursContainer') goes here */}
                <button className="delete-btn" onClick={() => removeTours(id)}>Not Interested</button>
            </footer>
        </article>
    )
}

export default List

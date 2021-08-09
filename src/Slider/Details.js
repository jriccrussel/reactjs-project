import { useParams } from "react-router"

const Details = ({image, title, price}) => {

    const {id} = useParams()

    return (
        <div key={id}>
            <img src={image} alt="" className='product_img'/>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}

export default Details

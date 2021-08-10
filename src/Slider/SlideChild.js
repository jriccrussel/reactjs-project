import { Link } from 'react-router-dom';

const SlideChild = ({item}) => {
    return (
        <Link to={`/products/${item.id}`}>
            <div>
                <img src={item.image} alt="" className='product_img'/>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        </Link>
    )
}

export default SlideChild

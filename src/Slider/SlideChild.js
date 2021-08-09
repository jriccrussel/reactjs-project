import { Link } from 'react-router-dom';
import Details from './Details'

const SlideChild = ({product}) => {
    return (
        <div>
            {product.map((prod) => {
                return (
                    <Link to='/products/:id'>
                        <div key={prod.id} {...prod}>
                            <img src={prod.image} alt="" className='product_img'/>
                            <p>{prod.title}</p>
                            <p>{prod.price}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default SlideChild

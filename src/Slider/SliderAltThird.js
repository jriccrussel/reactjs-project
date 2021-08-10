import { useState, useEffect} from 'react'
import axios from "axios";
import SlideChild from './SlideChild';

const SliderAltThird = () => {
    const url = 'https://fakestoreapi.com/products'

    const [product, setProduct] = useState([])

    useEffect(() => {
        const product =  {
            method: 'GET' ,
            url: url ,
            params: {limit: '10'},
            headers: {
                'x-rapidapi-key': 'dfec89619dmshf6323189f37fc93p18be3djsn95b61770d2eb',
                'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com'
            }
        }
    
        axios.request(product).then(function (response) {
            console.log(response.data)
            setProduct(response.data)
        }).catch(function (error) {
            console.error(error)
        })
    }, [url])

    // const fetchData = () => {
        
    // }
    
    return (
        <div>
            {product.map((item) => {
                return(
                    <div key={item.id}>
                        <SlideChild item={item}/>
                    </div>
                )
            })}
        </div>
    )
}

export default SliderAltThird

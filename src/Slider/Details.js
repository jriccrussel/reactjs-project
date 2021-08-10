import { useState, useEffect} from 'react'
import axios from "axios";
import { useParams } from "react-router"

const Details = () => {

    const {id} = useParams()

    const url = `https://fakestoreapi.com/products/${id}`

    const [item, setItem] = useState([])

    useEffect(() => {
        // fetchData()
        const product =  {
            method: 'GET' ,
            url: url ,
            headers: {
                'x-rapidapi-key': 'dfec89619dmshf6323189f37fc93p18be3djsn95b61770d2eb',
                'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com'
            }
        }
    
        axios.request(product).then(function (response) {
            console.log(response.data);
            setItem(response.data)
        }).catch(function (error) {
            console.error(error);
        })
    }, [url])

    // const fetchData = () => {
        
    // }
    
    return (
        <div>
            <img src={item.image} alt="" className='product_img'/>
            <p>{item.category}</p>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default Details

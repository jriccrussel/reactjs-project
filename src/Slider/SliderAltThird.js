import { useState, useEffect} from 'react'
import axios from "axios";

const SliderAltThird = () => {
    const url = 'https://the-sneaker-database.p.rapidapi.com/sneakers'

    const [sneakers, setSneakers] = useState([])

    const fetchData = () => {
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
            console.log(response.data.results);
            setSneakers(response.data.results)
        }).catch(function (error) {
            console.error(error);
        })
    }

    useEffect(() => {
        fetchData()
    }, [sneakers])
    
    return (
        <div>
            {sneakers.map((kicks) => {
                return (
                    <img src={kicks.image} alt=""/>
                )
            })}
        </div>
    )
}

export default SliderAltThird

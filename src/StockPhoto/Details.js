import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    const [error, setError] = useState(null)
    const [item, setItem] = useState([])

    const url = `https://api.unsplash.com/photos/${id}?client_id=wMA7wU4o_MtZlXbF7bRk7RdVk-IsgCMvgmaRoJmpRQs`

    // const fetchImages = async () => {      
    //     try {
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         if(data){
    //             const {
    //                 regular,
    //                 alt_description,
    //                 name,
    //                 likes,
    //                 portfolio_url,
    //                 medium
    //             } = data

    //             const newData = {
    //                 regular,
    //                 alt_description,
    //                 name,
    //                 likes,
    //                 portfolio_url,
    //                 medium
    //             }
    //             setItem(newData)
    //         }
    //         setItem(data)   
    //         console.log(data)           
            
    //     } catch (error) {
    //         console.log(error)            
    //     }
    // }

    // useEffect(() => {
    //     fetchImages()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [url])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            data => {

                if(data){
                    const {
                        urls: { regular },
                        alt_description,
                        likes,
                        id,
                        user: {
                            name,
                            portfolio_url,
                            profile_image: { medium },
                        },
                    } = data

                    const newData = {
                        regular,
                        alt_description,
                        name,
                        likes,
                        portfolio_url,
                        medium
                    }          
                    
                    setItem(newData)
                    console.log(newData)
                } else{
                    setItem(null)
                }                
            }            
        )
        .catch((error) => {
            setError(error);
            console.log(error)
        })
    }, [])

    if(error){
        return <div> Error Page </div>
    } else {
        return (
            <div>
                <img src={item.regular} alt={item.alt_description} />
                <div className='photo-info'>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.likes} likes</p>
                    </div>
                    <a href={item.portfolio_url}>
                        <img src={item.medium} alt='' className='user-img' />
                    </a>
                </div>
    
                
                    {/* <img src={item.urls.regular} alt={item.alt_description} />
                    <div className='photo-info'>
                        <div>
                            <h4>{item.sponsorship.sponsor.name}</h4>
                            <p>{item.likes} likes</p>
                        </div>
                        <a href={item.sponsorship.sponsor.portfolio_url}>
                            <img src={item.sponsorship.sponsor.profile_image.medium} alt='' className='user-img' />
                        </a>
                    </div> */}
               
            </div>
        )
    }
}

export default Details

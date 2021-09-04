import { Link } from 'react-router-dom'

const PhotoCard = ({
        urls: { regular },
        alt_description,
        likes,
        id,
        user: {
            name,
            portfolio_url,
            profile_image: { medium },
        },
    }) => {
        
    return (
        <Link to={`/page/${id}`}> 
        
            <article className='photo'>
                <img src={regular} alt={alt_description} />
                <div className='photo-info'>
                    <div>
                        <h4>{name}</h4>
                        <p>{likes} likes</p>
                    </div>
                  
                    {/* <a href={portfolio_url}> */}
                        <img src={medium} alt='' className='user-img' />
                    {/* </a> */}
                </div>
            </article>
        </Link>
  )
}

export default PhotoCard
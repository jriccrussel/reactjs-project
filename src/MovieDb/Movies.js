import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
    // data & state from useGlobalContext na gi destructure  
    const {movies, isLoading} = useGlobalContext()

    if(isLoading){
        return <div className="loading"></div>
    }

    return (
        <section className="movies">
            {movies.map((newMovie) => {
                // Properties from the data na naa ron sa useGlobalContext
                const { imdbID: id, Poster: poster, Title: title, Year: year } = newMovie

                return(
                    <Link to={`/movies/${id}`} key={id} className="movie">
                        <article>
                            <img src={poster === 'N/A' ? url:poster} alt={title} />
                            <div className="movie-info">
                                <h4 className="title">{title}</h4>
                                <p>{year}</p>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </section>
    )
}

export default Movies

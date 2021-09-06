import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import '../MovieDb/MovieDb.scss'

const MovieDbApp = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            {/* <Route path='/movies/:id' children={<Movie />} /> */}
            <Route path="/movies/:id">
                <Movie />
            </Route>
        </Switch>
    )
}

export default MovieDbApp

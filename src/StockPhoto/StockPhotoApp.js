import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './StockPhoto'
import Details from './Details' 

import '../StockPhoto/StockPhoto.scss'

const StockPhotoApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/page/:id">
                    <Details />
                </Route>
            </Switch>
        </Router>
        // <StockPhoto />
    )   
}

export default StockPhotoApp

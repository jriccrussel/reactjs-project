import {Link} from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <Link>
                    <img src={logo} alt="" className='logo'/>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/about'>about</Link>
                    </li>
                </ul>
            </div>            
        </nav>
    )
}

export default Navbar

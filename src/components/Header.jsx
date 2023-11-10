import './Header.scss'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <nav className='navbar'>
            <ul>
                <li><Link to="/"><img src="/assets/img/ponytale.jpg" alt="" /></Link></li>
                <li><Link to="/">ACCEUIL</Link></li>
                <li><Link to="/poneys">PONEYS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/apropos">A PROPOS</Link></li>
            </ul>
        </nav>
    )
}
export default Header
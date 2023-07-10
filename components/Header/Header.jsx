import { NavLink, Link} from "react-router-dom"
export default function Header(){
    return(
        <header className="container">
        <nav className='navigation'>
          <Link to='/'>#Vanlife</Link>
          <div className="link-section">
            <NavLink 
              to="/host"
              className={({isActive})=> isActive ? 'active-link': null}
            >Host</NavLink>
            <NavLink to='/about'
            className={({isActive})=> isActive ? 'active-link': null}
            >About</NavLink>
            <NavLink to='/vans'
            className={({isActive})=> isActive ? 'active-link': null}
            >Vans</NavLink>
          </div>
        </nav>
      </header>
    )
}
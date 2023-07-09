import { Link } from "react-router-dom"
export default function Header(){
    return(
        <header className='container'>
        <nav className='navigation'>
          <Link to='/'>#Vanlife</Link>
          <div className="link-section">
            <Link to="/host">Host</Link>
            <Link to='/about'>About</Link>
            <Link to='/vans'>Vans</Link>
          </div>
        </nav>
      </header>
    )
}
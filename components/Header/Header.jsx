import { NavLink, Link} from "react-router-dom"
import {RxAvatar} from 'react-icons/rx'
import {GiExitDoor} from 'react-icons/gi'
export default function Header(){

    function fakeLogOut(){
      localStorage.removeItem('loggedin')
    }
    return(
        <header className="container">
        <nav className='navigation'>
          <Link to='/'>#Vanlife</Link>
          <div className="link-section">
            <NavLink 
              to={`${localStorage.getItem('pathname') ? `${localStorage.getItem('pathname') }` : "/host"}`}
              className={({isActive})=> isActive ? 'active-link': null}
            >Host</NavLink>
            <NavLink to='/about'
            className={({isActive})=> isActive ? 'active-link': null}
            >About</NavLink>
            <NavLink to='/vans'
            className={({isActive})=> isActive ? 'active-link': null}
            >Vans</NavLink>
            <NavLink to='login'
            className={({isActive})=> isActive ? 'active-link': null}
            ><RxAvatar style={{width: "30", height: '30'}}></RxAvatar></NavLink>
            {/* <button className="exit-button" onClick={fakeLogOut}><GiExitDoor/></button> */}
            <GiExitDoor  className="exit-button" onClick={fakeLogOut} style={{width: "30", height: '30'}}></GiExitDoor>
          </div>
        </nav>
      </header>
    )
}
import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css"

export default function HostLayout(){
    const linkActiveStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }
    return(
        <div className="container">
            <nav className=" nav-host">
                <NavLink to='/host'
                end
                style={({isActive}) => isActive ? linkActiveStyles : null}
                >Dashboard</NavLink>
                <NavLink to='/host/income'
                style={({isActive}) => isActive ? linkActiveStyles : null}
                >Income</NavLink>
                <NavLink to='/host/vans'
                style={({isActive}) => isActive ? linkActiveStyles : null}
                >Vans</NavLink>
                <NavLink to='/host/reviews'
                style={({isActive}) => isActive ? linkActiveStyles : null}
                >Reviews</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}
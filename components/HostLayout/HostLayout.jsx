import { NavLink, Navigate, Outlet } from "react-router-dom";

import "./HostLayout.css"



export default function HostLayout(){
    
    const isLoggedIn  = localStorage.getItem('loggedin');
    console.log(isLoggedIn + " log in")
    const linkActiveStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }
    return(
        <>
            {!isLoggedIn ? <Navigate to ={`/login?message=You must log in first.&redirectTo=${localStorage.getItem("pathname")}`}></Navigate> : 
            <div className="container">
            <nav className=" nav-host">
                <NavLink to='.'
                end
                style={({isActive}) => isActive ? linkActiveStyles : null}
                >Dashboard</NavLink>
                <NavLink to='income'
                style={({isActive}) => isActive ? linkActiveStyles : null}
                >Income</NavLink>
                <NavLink to='vans'
                style={({isActive}) => isActive ? linkActiveStyles : null}
                >Vans</NavLink>
                <NavLink to='reviews'
                style={({isActive}) => isActive ? linkActiveStyles : null}
                >Reviews</NavLink>
            </nav>
            <Outlet/>
        </div>}
        </>
    )
}
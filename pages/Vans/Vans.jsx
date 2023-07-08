import { useEffect, useState } from "react"
import './Vans.css'
import { Link } from "react-router-dom";

export default function Vans(){

    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
        .then(result => result.json())
        .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => {
        return(
            <div className="van-content" key={van.id}>
                <Link  to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt="" />
                <div className="van-information">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                    <i className={`${van.type} van-type`}>{van.type}</i>
                </div>
                </Link>
                
            </div>
        )
    })
    return(
        <div className="container grid-container">
            <h2 >Explorte our van options</h2>
            <div className="grid-vans">
                {vanElements}
            </div>
        </div>
    )
}
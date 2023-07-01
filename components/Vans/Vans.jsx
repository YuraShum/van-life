import { useEffect, useState } from "react"

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
                <img src={van.imageUrl} alt="" />
                <div className="van-information">
                    <h3>{van.name}</h3>
                    <p>{van.price}<span>/day</span></p>
                    <i>{van.type}</i>
                </div>
            </div>
        )
    })
    return(
        <div>
            <h2>Explorte our van options</h2>
            {vanElements}
        </div>
    )
}
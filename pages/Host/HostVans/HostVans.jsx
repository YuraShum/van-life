import { useEffect, useState } from "react"

import { Link } from "react-router-dom";
export default function HostVans(){
    const [personalVans, setPersonalVans] = useState([]);


    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setPersonalVans(data.vans))
    }, [])

    console.log(personalVans)
    const ElementPersonalVans = personalVans.map((van) => {
        return (
            <Link to={van.id} className="personal-van" key={van.id} >
                <img src={van.imageUrl} alt="" />
                <div className="information">
                    <h2>{van.name}</h2>
                    <p>$<span>{van.price}</span>/day</p>
                </div>
            </Link>
        )
    })
    return(
        <section>
            <h1 style={{margin: '20px 20px'}}>Your listed vans</h1>
            <div className="personal-vans">
            {
                personalVans.length > 0 ?  (
                    <section>
                        {ElementPersonalVans}
                    </section>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
        </section>
    )
}
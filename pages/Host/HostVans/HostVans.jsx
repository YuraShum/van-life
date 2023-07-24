import { Suspense, useEffect, useState } from "react"

import { Await, Link, useLoaderData, defer } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";

export async function loader({request}){
    await requireAuth(request)
    return defer({hostVans: getHostVans()});
}
export default function HostVans(){
    const personalVans = useLoaderData();

    function renderVanElements(vans){
        const ElementPersonalVans = vans.map((van) => {
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
            <div className="personal-vans">
                <section>
                    {ElementPersonalVans}
                </section>
            </div> 
        )
    }
    
    return(
        <section>
            <h1 style={{margin: '20px 20px'}}>Your listed vans</h1>
            <Suspense fallback={<h2 style={{marginLeft: 20}}>Loading host vans...</h2>}>
                <Await resolve={personalVans.hostVans}>
                    {renderVanElements}
                </Await>
            </Suspense>
        </section>
    )
}
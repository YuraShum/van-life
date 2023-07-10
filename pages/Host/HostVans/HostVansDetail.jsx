import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { Link, NavLink } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Collection } from "miragejs";


export default function HostVanDetail(){
    const linkActiveStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    const params = useParams();
    const [detailVan, setDetailVan] = useState(null)
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then((res) => res.json())
        .then(data => setDetailVan(data.vans[0]))
    }, [params.id])
    console.log(detailVan)

    return(
        <>
            <Link to='..' relative="path" style={{display: 'flex', marginLeft: '20px', textAlign: 'center', marginTop: '20px'}}><AiOutlineArrowLeft/> Back to all vans</Link>
            <div className="personal-van-description">
                {detailVan ? 
                <>
                    <div className="personal-van-description-content">
                        <img src={detailVan.imageUrl} alt="" />
                        <div className="personal-van-description-info">
                            <i className={`${detailVan.type} van-type`}>{detailVan.type}</i>
                            <h2>{detailVan.name}</h2>
                            <p><span>${detailVan.price}</span>/day</p>
                        </div>
                    </div> 
                <nav className="host-van-detail-nav">
                    <NavLink 
                        to ={`.`} 
                        end 
                        style={({isActive})=> isActive ? linkActiveStyles : null}>Details</NavLink>
                    <NavLink 
                        to ={`pricing`} 
                        style={({isActive})=> isActive ? linkActiveStyles : null}>Pricing</NavLink>
                    <NavLink 
                        to ={`photos`} 
                        style={({isActive})=> isActive ? linkActiveStyles : null}>Photos</NavLink>
                </nav>
                <Outlet context={[detailVan, setDetailVan]}/>
                </>: 
                <h2>Loading...</h2>
        }
        </div>
        </>
    )
}
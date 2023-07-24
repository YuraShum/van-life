import { useEffect, useState } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom"
import { Link, NavLink } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Collection } from "miragejs";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";

export async function loader({params, request}){
    await requireAuth(request)
    return getHostVans(params.id)
}
export default function HostVanDetail(){
    const linkActiveStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }
    const detailVan = useLoaderData()

    return(
        <>
            <Link to='..' relative="path" style={{display: 'flex', marginLeft: '20px', textAlign: 'center', marginTop: '20px'}}><AiOutlineArrowLeft/> Back to all vans</Link>
            <div className="personal-van-description">
                
                <>
                    <div className="personal-van-description-content">
                        <img src={detailVan[0].imageUrl} alt="" />
                        <div className="personal-van-description-info">
                            <i className={`${detailVan[0].type} van-type`}>{detailVan[0].type}</i>
                            <h2>{detailVan[0].name}</h2>
                            <p><span>${detailVan[0].price}</span>/day</p>
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
                <Outlet context={detailVan}/>
                </>
        </div>
        </>
    )
}
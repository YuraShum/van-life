import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import './VanDetail.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { getVans } from "../../api";
import { useLoaderData } from "react-router-dom";

export function loader({params}) {

    return getVans(params.id)
}
export default function VanDetail(){
    const detail = useLoaderData();
    const location = useLocation()
    const search = location.state?.search || ""
    const type = location.state?.typeFilter || "all"

    return(
        <div className=" container van-detail-container">
            <Link to={`..?${search}`} relative="path" style={{display: 'flex',  textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}><AiOutlineArrowLeft/> 
            Back to {type} vans</Link>
            
            <div className="van-detail">

                <img src={detail.imageUrl} alt="" />
                <i className={`${detail.type} van-type`}>{detail.type}</i>
                <h2>{detail.name}</h2>
                <p><span>${detail.price}</span>/day</p>
                <p className="van-description">{detail.description}</p>
                <button>Rent this van</button>

            </div>
        </div>
    )
}
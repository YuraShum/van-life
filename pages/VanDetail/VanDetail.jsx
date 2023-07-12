import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import './VanDetail.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom";
export default function VanDetail(){
    const params = useParams();
    const [detail, setDetail] = useState(null);
    const location = useLocation()
    

    useEffect(() => {
        fetch(`/api/vans/${params.id}`).
        then(res => res.json()).
        then(data => setDetail(data.vans))
    }, [params.id])

    console.log(detail)

    const search = location.state?.search || ""
    const type = location.state?.typeFilter || "all"

    return(
        <div className=" container van-detail-container">
            <Link to={`..?${search}`} relative="path" style={{display: 'flex',  textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}><AiOutlineArrowLeft/> 
            Back to {type} vans</Link>
            {detail ? 
            <div className="van-detail">

                <img src={detail.imageUrl} alt="" />
                <i className={`${detail.type} van-type`}>{detail.type}</i>
                <h2>{detail.name}</h2>
                <p><span>${detail.price}</span>/day</p>
                <p className="van-description">{detail.description}</p>
                <button>Rent this van</button>

            </div> : <h2>Loading...</h2>}
        </div>
    )
}
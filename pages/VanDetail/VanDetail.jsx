import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './VanDetail.css'
export default function VanDetail(){
    const params = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`).
        then(res => res.json()).
        then(data => setDetail(data.vans))
    }, [params.id])
    console.log(params)
    console.log(detail)

    return(
        <div className=" container van-detail-container">
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
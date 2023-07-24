import { Await, Link, Outlet, defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";
import { getHostVans } from "../../api";
import {BsStarFill} from 'react-icons/bs'
import { Suspense } from "react";


export async function loader({request}){
    await requireAuth(request)
    return defer({vans: getHostVans()})
}
export default function Dashboard(){
    const loaderData = useLoaderData()

    function renderVanElements(vans){
        const hostVans = vans.map(van => (
            <div key={van.id} className="host-van-single">
                <div className="host-van-block">
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
                <Link to={`vans/${van.id}`}>View</Link>
                <></>
            </div>

            
        ))

        return(
            <div className="host-vans-list">
                <section>{hostVans}</section>
            </div>
        )
    }
    return(
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to='income'>Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <BsStarFill className="star" />
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                    <Suspense fallback={<h3>Loading...</h3>}>
                        <Await resolve={loaderData.vans}>
                            {renderVanElements}
                        </Await>
                    </Suspense>
                
            </section>
        </>
    )
}
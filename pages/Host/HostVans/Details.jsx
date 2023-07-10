import { useOutletContext } from "react-router-dom"

export default function Details() {
    const [detailVan, setDetailVan] = useOutletContext();
    console.log(`${detailVan}: context`)
    return(
        <section className="host-vans-information-detail">
            <p><span>Name: </span>{detailVan.name}</p>
            <p><span>Category: </span>{detailVan.type}</p>
            <p><span>Description: </span>{detailVan.description}</p>
            <p><span>Visibility: </span>Public</p>
            
        </section>
    )
}
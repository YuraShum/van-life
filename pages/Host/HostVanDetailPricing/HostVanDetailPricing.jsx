import { useOutletContext } from "react-router-dom";

export default function HostVanDetailPricing(){
    const [detailVan, setDetailVan] = useOutletContext();
    return(
        <p style={{margin: '30px 0px'}}><span style={{fontSize: 20, fontWeight: 700}}>${`${detailVan.price}.00`}</span>/day</p>
    )
}
import { useOutletContext } from "react-router-dom"

export default function HostVanDetailPhotos(){
    const [detailVan, setDetailVan] = useOutletContext();
    return(
        <img style={{width: 100, borderRadius: 8, margin: '20px 0px 0px'}} src={detailVan.imageUrl} alt="" />
    )
}
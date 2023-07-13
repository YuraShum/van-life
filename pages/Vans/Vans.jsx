import { useEffect, useState } from "react"
import './Vans.css'
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";


export default function Vans(){

    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    useEffect(() => {
        async function loadVans() {
            const data = await getVans();
            setVans(data)
        }
        loadVans()
    }, [])

    const filterVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter)  : vans ;

    const vanElements = filterVans.map(van => {
        return(
            <div className="van-content" key={van.id}>
                <Link  to={van.id} state={{search: searchParams.toString(), typeFilter: typeFilter}}>
                <img src={van.imageUrl} alt="" />
                <div className="van-information">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                    <i className={`${van.type} van-type`}>{van.type}</i>
                </div>
                </Link>
                
            </div>
        )
    })

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
          if (value === null) {
            prevParams.delete(key)
          } else {
            prevParams.set(key, value)
          }
          return prevParams
        })
      }
    return(
        <div className="container grid-container">
            <h2 >Explorte our van options</h2>
            <div className="van-type-filters-button">
                <button style={typeFilter === 'simple' ? {backgroundColor: '#E17654', color: 'white'} : {}} className = {`van-type-filter van-type-filter-types`} onClick={() => handleFilterChange('type', 'simple')}>Simple</button>
                <button style={typeFilter === 'luxury' ? {backgroundColor: '#161616', color: 'white'} : {}} className = {`van-type-filter van-type-filter-types`} onClick={() => handleFilterChange('type', 'luxury')}>Luxury</button>
                <button style={typeFilter === 'rugged' ? {backgroundColor: '#115E59', color: 'white'} : {}} className = {`van-type-filter van-type-filter-types`} onClick={() => handleFilterChange('type', 'rugged')}>Rugged</button>
                {typeFilter ? <button className = "van-type-filter " onClick={() => setSearchParams({})}>Clear filter</button> :
                <></>}
            </div>
            <div className="grid-vans">
                {vanElements}
            </div>
        </div>
    )
}
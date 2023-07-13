export async function getVans(){
    const respons = await fetch("/api/vans")
    if(!respons.ok){
        throw{
            message: "Failed to fetch vans",
            statusText: respons.statusText,
            status: respons.status
        }
    }
    const data = await respons.json()
    return data.vans
}
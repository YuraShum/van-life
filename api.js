export async function getVans(){
    const respons = await fetch("/api/vans")
    const data = await respons.json()
    return data.vans
}
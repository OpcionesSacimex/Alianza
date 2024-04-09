const api_url = "https://nominatim.openstreetmap.org/"

export const iniciar=({onUbicacion,onError,onNoPermision,opcionesDeSolicitud={
    enableHighAccuracy: false, // Alta precisión
    maximumAge: 0, // No queremos caché
    timeout: 10000 // Esperar solo 10 segundos
}})=>{
    if (!("geolocation" in navigator)) {
        onNoPermision()
    }
    navigator.geolocation.getCurrentPosition(onUbicacion, onError, opcionesDeSolicitud);
}

export const getDirOpenMap=async (lat, lng, onError)=> {
    let obj;
    try {
        obj = await (await fetch(`${api_url}reverse?lat=${lat}&lon=${lng}&format=json`)).json();
    } catch (e) {
        if(onError){
            onError(e);
        }
        console.log(e);
    }
    const jsonObj = JSON.parse(JSON.stringify(obj.address));
    const { city_district,city, house_number, road, town, county, state, postcode, country } = jsonObj
    return {city_district,city, house_number, road, town, county, state, postcode, country}
}

export const boundRectangleCenter=(bounds)=>{
    console.log(bounds)
    const x1 = bounds[0][0]
    const y1 = bounds[0][1]
    const x2 = bounds[1][0]
    const y2 = bounds[1][1]

    return [(x1+x2)/2,(y1+y2)/2]
}
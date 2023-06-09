
// Promisificar



export const getCoordinates = async () => {
    try {
        const positionData = await new Promise((resolve, reject) => {
            // Cuando se ejecuta RESOLVE, la promesa se resuelve con el valor pasado a resolve y cuando se ejecuta REJECT la promesa se rechaza con el valor pasado a reject
            navigator.geolocation.getCurrentPosition( resolve, reject )
        })
        return {latitude: positionData.coords.latitude, 
            longitude: positionData.coords.longitude}
    } catch (_) {
        return null
    }
    // (position) => console.log(position), 
    // () => console.error("No allow")  
}


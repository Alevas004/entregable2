import { kelvinToCelsius } from "./KelvinToCelsius"


const FARENHEIT_CONVERSION =  9/5 
const FARENHEIT_CONVERSION2 = 32 

export const kelvinToFarenheit = (kelvinDegrades) => {
    const Celcius = kelvinToCelsius(kelvinDegrades)
    return (Celcius * FARENHEIT_CONVERSION) + FARENHEIT_CONVERSION2

}
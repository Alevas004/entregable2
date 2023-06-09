import axios from "axios";
import { kelvinToCelsius } from "../utils/KelvinToCelsius";
import { kelvinToFarenheit } from "../utils/celciusToFarenheit";
import { getIconById } from "../utils/getIconById";

const url = 'https://api.openweathermap.org/data/2.5/weather'

export const getCurrentWeather = async (lat, lon) => {
    try {
        const params = {lat, lon, appid: "60dc8241ae26478a97c4f4b138b5e5b5",  }
        const res = await axios.get(url,
            {
                params,

            } )
        
        const weatherInfo = {
            country: res.data.sys.country,
            city: res.data.name,
            weather: {
                main: res.data.weather[0].main,
                description: res.data.weather[0].description,
                icon: getIconById(res.data.weather[0].icon),
            },
            temperature: {
                kelvin: res.data.main.temp,
                celcius: kelvinToCelsius(res.data.main.temp),
                farenheit: kelvinToFarenheit(res.data.main.temp)
            }
        }

        return weatherInfo

    } catch (error) {
        console.error(error)
    }  

}

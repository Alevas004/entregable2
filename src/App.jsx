import { useEffect, useState } from "react";
import "./App.css";
import { getCoordinates } from "./services/getCoordinates";
import { getCurrentWeather } from "./services/getCurrentWeather";
import { getRandomNumber } from "./utils/getRandomNumber";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"

  const backgrounds = [img1, img2, img3, img4, img5]
  
function App() {

  // const getRandomWeather = () => weather[getRandomNumber(weather.length - 1)] 
  const getRandomBackground = () => backgrounds[getRandomNumber(backgrounds.length - 1)];
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState(getRandomBackground());
  const [isCelcius, setIsCelcius] = useState(true)

 

//! random weather start 
  // const changeWeather = () => {
  //   let newWeather = getRandomWeather()
  //   let newBackground = getRandomBackground()

  //   while (newWeather === weather) {
  //       newWeather = getRandomWeather()
  //   }

  //   while (newBackground === background) {
  //     newBackground = getRandomBackground ()
  //   }

  //   setWeather(newWeather)
  //   setBackground(newBackground)

  // }
//! random weather end

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();

      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude,
          coordinates.longitude
        );
        setWeather(weatherData);
      } else {
        // Controlar el caso en que el usuario no da permisos de acceso a la localización
      }
    };
    loadWeather();
  }, []);

  return (
  
  <div className="main_items" style={{backgroundImage: `url("${background}")`}}> 
      <h1>Weather APP</h1>
      {weather ? (
      <>
        <article className="container_weather">
          <div className="titles">
          <h2>{weather.weather.main}</h2>
          <p>{weather.weather.description}</p>
            <img className="icon1"
              src={weather.weather.icon}
              alt="{weather.weather.description}"
            />
          
          </div>
          <div className="degrees">
           
            <p><b>{isCelcius ? weather.temperature.celcius.toFixed(2) : weather.temperature.farenheit.toFixed(2) }</b> °{isCelcius ? 'C' : 'F'}</p>
            <p>{weather.temperature.kelvin.toFixed(2)} °K</p>
            {/* <p><b>{weather.temperature.farenheit.toFixed(2)}</b> °F</p> */}
          </div>
         
          <div className="icon">
            <img
              src={weather.weather.icon}
              alt="{weather.weather.description}"
            />
          </div>
          <div className="city">
          <p>{weather.city}, {weather.country}</p>
          </div>
        </article>
        <div className="main_buttons">
        <button className="btn_container" onClick={() => setIsCelcius(!isCelcius)}>Change to °{isCelcius ? 'F' : 'C'}</button>
        {/* <button className="btn_container" onClick={changeWeather}>Random Weather</button> */}
        </div>
    </>
      ) : (

        <p className="loading">Loading...</p>
      )}
  </div>

  );
}

export default App;

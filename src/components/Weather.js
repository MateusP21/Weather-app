import React from "react";

const Weather = (props) =>{
    const {temperature,country,city,humidity,error} = props
 return(
      <div className="weather">
          <ul>
            {temperature && country ? <li>Temperatura: {temperature}ºC, </li>:undefined}
            {city? <li> Cidade: {city}, {country}</li>:undefined}
            {humidity ? <li> Umidade: {humidity}%</li>:undefined}
            {error ? <li>{error}</li>:undefined}
          </ul>

      </div>
 )
}
export default Weather
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import {API_KEY} from "./config/key.js"


class App extends React.Component {
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    error: undefined
  }

 

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
    const data = await api_call.json()
    if(city && country) {
      this.setState({
        temperature: data.main.temp,
        city:data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        error:""
      })
    }

  if(data.cod === '404') {
    this.setState({error: "Cidade não encontrada"})
  }

  };
  render() { 

  
    const { temperature, country, city, humidity, error} = this.state
    return (
      <div className="App">
        <div className="clima">
        </div>
        <div className="content-app">
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature ={temperature}
          country= {country}
          city = {city}
          humidity = {humidity}
          error = {error}
         />
        </div>       
      </div>
    );
  }
}

export default App

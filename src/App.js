import React, {useState} from 'react';
import './App.css';
import Nav from './Components/Nav';
import Cards from './Components/Cards'
// import Footer from './Components/Footer';

export default function App() {
  const [cities, setCities] = useState([])

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  
  function onSearch(ciudad) {
  
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=b6d6db085a98a24be8b5150ad2f22090&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (cities[0].hasOwnProperty('id')) {
          alert("Already in the list") 
          } else if(recurso.main !== undefined){
        
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities(oldCities => [...oldCities, ciudad]);
        }
        else {
          alert("City not found");
        }
      });

    }

  

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards cities={cities} onClose={onClose}/>
      </div>
      {/* <div><Footer/></div> */}
    </div>
  );
}

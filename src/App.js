import {useState , useEffect} from 'react';
import './App.css';

//APi key
//c30e67cc4e17aeed0ad1b509c4af12e3


//Call

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function App() {

  const name = "chiang mai"
  const apiKey = "c30e67cc4e17aeed0ad1b509c4af12e3"
  const [city,setCity] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  
  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setCity(data)
        setIsLoading(true)
      })
  },[])

const convertTemp=(k)=>{
  return (k-273).toFixed()
}

  return (
    (isLoading && <div className="App">
    <section>
      <div className='location'>
        <h1 className='city'>{city.name}</h1>
        <p className='stage'>{city.sys.country}</p>
        
      </div>
      <div className='card'>
        <div className='weather'>
            <h1>{convertTemp(city.main.temp)}&deg;C</h1>
            <small>max : {convertTemp(city.main.temp_max)}&deg;C ,min : {convertTemp(city.main.temp_min)}&deg;C</small>
        </div>
        <div className='info'>
            <div className='status'>{city.weather[0].main}</div>
            <div className='humunity'>humidity : {city.main.humidity}</div>
            <div className='wind'>wind speed : {city.wind.speed}</div>
        </div>
      </div>
    </section>
  </div>)
  );
}

export default App;

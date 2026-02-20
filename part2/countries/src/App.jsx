import { useState, useEffect } from 'react'
import ManyMatches from './components/ManyMatches'
import ListCountries from './components/ListCountries'
import Countri from './components/countri'
import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_API_KEY

const App = () => {
  const [countries, setCountries] = useState([])
  const [weatherTemperature, setWeatherTemperature] = useState('')
  const [weatherWind, setWeatherWind] = useState('')
  const [inputFind, setInputFind] = useState('')
  const [manyMatches, setManyMatches] = useState(null)
  const [listCountries, setListCountries] = useState([])
  const [countri, setCountri] = useState(null)

  const hook = () => {
    console.log("effect")
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        const list = response.data
        console.log(list)
        setCountries(list)
      })

  }

  useEffect(hook, [])

  useEffect(() => {
    if (inputFind.length === 0) {
      setListCountries(null)
    }
    const result = CheckCountries()
    setListCountries(result)
  }, [inputFind])


  const CheckCountries = () => {
    console.log("mx", countries)

    const resul = countries.filter(x => x.name['common'].toLowerCase().includes(inputFind.toLowerCase()))
    console.log("resulmx", resul)
    if (resul.length <= 10 && resul.length >= 2) {
      setManyMatches(null)
      setCountri(null)
      return resul
    } else if (resul.length === 1) {
      setManyMatches(null)
      if (countri === resul) {

      } else {
        setCountri(resul)
        const horaActual = new Date()
        horaActual.setMinutes(0)
        horaActual.setSeconds(0)
        horaActual.setMilliseconds(0)
        const horaAnterior = new Date()
        horaAnterior.setMinutes(0)
        horaAnterior.setSeconds(0)
        horaAnterior.setMilliseconds(0)
        console.log("capitalInfo", resul.map(x => x.capitalInfo['latlng'][0]))
        const lat = resul.map(x => x.capitalInfo['latlng'][0]);
        const lng = resul.map(x => x.capitalInfo['latlng'][1]);
        const params = 'windSpeed,airTemperature';

        axios.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&start=${horaAnterior.toISOString()}&end=${horaActual.toISOString()}&params=${params}`, {
          headers: {
            'Authorization': api_key
          }
        })
          .then((response) => {
            console.log('api.stormglass', response.data);
            setWeatherTemperature(response.data.hours.map(x => airTemperature.sg))
            setWeatherTemperature(response.data.hours.map(x => windSpeed.sg))

          })
          .catch((error) => {
            console.error('Error:', error);
          });

      }

      return null
    }
    setManyMatches('')
    setCountri(null)
    return null




  }


  const handleCountriesChange = (event) => {
    setInputFind(event.target.value)
  }



  const showCountrie = (id) => {

    const resul = listCountries.filter(x => x.ccn3 === id)
    if (resul) {
      setManyMatches(null)
      setCountri(resul)
      return null
    }
    return null
  }




  return (
    <div>
      find countries <input value={inputFind} onChange={handleCountriesChange} />
      <ManyMatches manyMatches={manyMatches} />
      <ListCountries listCountries={listCountries} showCountrie={showCountrie} />
      <Countri countri={countri} weatherTemp={weatherTemperature} weatherWind={weatherWind} />
    </div>
  )

}
export default App

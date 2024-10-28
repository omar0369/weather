import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm"
import { url, key } from '../data/data'
import WeatherInfo from "./WeatherInfo"

import styles from './Weather.module.css'
import Loading from "./Loading"

const Weather = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  }, [])


  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  const loadInfo = async (city = 'mexico city') => {
    try {
      const res = await fetch(`${url}key=${key}&q=${city}&aqi=no`)
      const json = await res.json()

      //console.log(json)

      setTimeout(() => {
        setWeather(json)
      }, 2000)
    }
    catch (error) {
      console.error(error)
    }
  }

  const handleChangeCity = (city) => {
    setWeather(null)
    loadInfo(city)
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm handleChangeCity={handleChangeCity} />
      {weather ? <WeatherInfo weather={weather} /> : <Loading />}
    </div>
  )
}

export default Weather
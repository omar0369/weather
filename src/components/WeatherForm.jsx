import { useState } from 'react'

import styles from './WeatherForm.module.css'

const WeatherForm = ({ handleChangeCity }) => {
  const [city, setCity] = useState('')

  const onChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleChangeCity(city)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" value={city} onChange={onChange} placeholder='Ingresa una ciudad...' />
    </form>
  )
}

export default WeatherForm
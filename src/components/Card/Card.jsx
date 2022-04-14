import React from 'react'
import './Card-style.css'

const Card = ({name, email, id}) => {
  return (
    <div className='card-container'>
    <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} />
    <h2>{name}</h2>
    <h2>{email}</h2>
  </div>
  )
}

export default Card
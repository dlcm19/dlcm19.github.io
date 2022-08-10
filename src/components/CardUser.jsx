import React from 'react'

const CardUser = ({user}) => {
    
  return (
    <article>
    <div className='img'>
      <img src={user?.picture.large} alt="usuario" />
    </div>
      <h2> {user?.name.title} {user?.name.first} {user?.name.last}</h2>
    </article>
  )
}

export default CardUser

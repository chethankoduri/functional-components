import React from 'react'

function Players(props) {
  return (
    
        <div className='playerDiv'>
      <img src={props.pic} alt=''></img>
      <h2>Name:{props.name}</h2>
      <h3>Team:{props.team}</h3>
      <h3>Role:{props.role}</h3>
      </div>
      
  )
}

export default Players
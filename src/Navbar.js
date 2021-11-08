import React from 'react'
import SexyNigga from './SexyNigga'

function Young({name, price, description , tag}) {
    return (
        <div>
          <SexyNigga name={name} description={description} tag={tag} />  
          <h2>{price}</h2>      

            
        </div>
    )
}

export default Young

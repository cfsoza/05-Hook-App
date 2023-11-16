//import { memo } from 'react'
import React from "react";

//memo memoriza el componente 
export const Small = React.memo(({value}) => {

    console.log('me volvi a dibujar :(');
  return (
    <small>{value}</small>
  )
})

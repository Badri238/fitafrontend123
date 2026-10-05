import React from 'react'
import Child from './Child'
import { useParams } from 'react-router-dom'

function Navbar() {
  const p = useParams("");
  return (
      <div>
      <p>Hello Navbar {p.id}</p>
      <Child  />
    </div>
  )
}

export default Navbar
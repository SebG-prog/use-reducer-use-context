import React, { useContext } from 'react'
import MonContext from '../contexts/MonContext'

const CountClick = () => {
  const [{click}] = useContext(MonContext)
  return (
  <p style={{backgroundColor: 'pink'}}>{click}</p>
  )
}

export default CountClick
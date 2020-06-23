import React, { useContext } from 'react'
import MonContext from '../contexts/MonContext'

const CountClick = () => {
  const [{click}] = useContext(MonContext)
  return (
  <p>{click}</p>
  )
}

export default CountClick
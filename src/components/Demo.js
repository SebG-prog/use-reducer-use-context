import React, { useReducer } from 'react'

import GetName from './GetName'

import { initialState, reducer } from '../reducers/MonReducer'
import MonContext from '../contexts/MonContext'

const Demo = () => {
  const [{ name, loading, click }, dispatch] = useReducer(reducer, initialState)
  return (
    <MonContext.Provider value={dispatch}>
    <GetName name={name} loading={loading} click={click} />
    </MonContext.Provider>
  )
}

export default Demo

import React, { useReducer } from 'react'

import GetName from './GetName'

import { initialState, reducer } from '../reducers/MonReducer'
import MonContext from '../contexts/MonContext'

const Demo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MonContext.Provider value={[state, dispatch]}>
      <GetName />
    </MonContext.Provider>
  )
}

export default Demo

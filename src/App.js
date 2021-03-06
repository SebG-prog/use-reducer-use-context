import React, { useReducer } from 'react';
import Demo from './components/Demo'
import Demo2 from './components/Demo2'

import { initialState, reducer } from './reducers/MonReducer'
import MonContext from './contexts/MonContext'

import './App.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MonContext.Provider value={[state, dispatch]}>
    <div className="App">
      <Demo2 />
      <Demo />
    </div>
    </MonContext.Provider>
  )
}

export default App

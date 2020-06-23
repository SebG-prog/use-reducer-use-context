import React, { useReducer, useContext } from 'react'
import Axios from 'axios'

import { initialState, reducer } from './reducers/MonReducer'

const MonContext = React.createContext(null)

const Demo = () => {
  const [{ name, loading, click }, dispatch] = useReducer(reducer, initialState)
  return (
    <MonContext.Provider value={dispatch}>
    <GetName name={name} loading={loading} click={click} />
    </MonContext.Provider>
  )
}

export default Demo

const GetName = ({name, loading, click}) => {
  const dispatch = useContext(MonContext)

  const handleClick = () => {
    dispatch({ type: 'startGettingName' })
    Axios.get('https://randomuser.me/api/').then(res => {
      dispatch({ type: 'endGettingName', name: res.data.results[0].name.first })
    })
  }

  return (
    loading ? <div>Loading...</div> :
      <main>
        <p>{name}</p>
        <button onClick={handleClick}>Click ME</button>
        <p>{click}</p>
      </main>
  )
}

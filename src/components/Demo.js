import React, { useReducer } from 'react'
import Axios from 'axios'

import { initialState, reducer } from './reducers/MonReducer'

const Demo = () => {
  const [{ name, loading, click }, dispatch] = useReducer(reducer, initialState)
  return (
    <GetName name={name} loading={loading} click={click} dispatch={dispatch} />
  )
}

export default Demo

const GetName = ({name, loading, click, dispatch}) => {
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

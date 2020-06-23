import React, { useReducer } from 'react'
import Axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'startGettingName':
      return {...state, loading: true}
    case 'endGettingName':
      return {...state, name: action.name, loading: false, click: state.click + 1}
    default:
      throw new Error('Unexpected action')
  }
}

const Demo = () => {
  const initialState = {
    name: 'Bob',
    loading: false,
    click: 0
  }
  const [{name, loading, click}, dispatch] = useReducer(reducer, initialState)

  const handleClick = () => {
    dispatch({ type : 'startGettingName'})
    Axios.get('https://randomuser.me/api/').then(res => {
    dispatch({ type: 'endGettingName', name: res.data.results[0].name.first})
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

export default Demo
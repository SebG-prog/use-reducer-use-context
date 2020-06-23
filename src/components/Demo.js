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
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = () => {
    const action = { type : 'startGettingName'}
    dispatch(action)
    Axios.get('https://randomuser.me/api/').then(res => {
    const action = { type: 'endGettingName', name: res.data.results[0].name.first}
    dispatch(action)
    })
  }

  return (
    state.loading ? <div>Loading...</div> : 
    <main>
      <p>{state.name}</p>
      <button onClick={handleClick}>Click ME</button>
      <p>{state.click}</p>
    </main>
  )
}

export default Demo
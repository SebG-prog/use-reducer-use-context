import React, { useState } from 'react'
import Axios from 'axios'

const Demo = () => {
  const initialState = {
    name: 'Bob',
    loading: false,
    click: 0
  }
  const [state, setState] = useState(initialState)

  const handleClick = () => {
    setState({...state, loading: true})
    Axios.get('https://randomuser.me/api/').then(res => {
    setState({...state, name: res.data.results[0].name.first, loading: false, click: state.click + 1})
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
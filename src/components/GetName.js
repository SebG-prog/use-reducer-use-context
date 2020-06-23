import React, {useContext} from 'react'
import Axios from 'axios'

import MonContext from '../contexts/MonContext'

const GetName = () => {
  const [{name, loading, click}, dispatch] = useContext(MonContext)

  const handleClick = () => {
    dispatch({ type: 'startGettingName' })
    Axios.get('https://randomuser.me/api/').then(res => {
      dispatch({ type: 'endGettingName', name: res.data.results[0].name.first })
    })
  }

  return (
    loading ? <div>Loading...</div> :
      <main style={{backgroundColor: 'lightblue'}}>
        <p>{name}</p>
        <button onClick={handleClick}>Click ME</button>
        <p>{click}</p>
      </main>
  )
}

export default GetName
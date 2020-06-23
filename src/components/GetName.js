import React, {useContext} from 'react'
import Axios from 'axios'

import MonContext from '../contexts/MonContext'

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

export default GetName
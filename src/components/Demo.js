import React, { useState } from 'react'
import Axios from 'axios'

const Demo = () => {
  const [name, setName] = useState('Bob')
  const [loading, setLoading] = useState(false)
  const [click, setClick] = useState(0)

  const handleClick = () => {
    setLoading(true)
    Axios.get('https://randomuser.me/api/').then(res => {
    setName(res.data.results[0].name.first)
    setLoading(false)
    setClick(click + 1)
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
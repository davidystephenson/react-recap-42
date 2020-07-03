import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Dog () {
  const { breed }  = useParams()
  const [result, setResult] = useState('')

  const url = `https://dog.ceo/api/breed/${breed}/images/random`

  async function getDog () {
    try {
      // const response = await axios.get(url)

      // const { data } = response
      // const { message } = data

      // const message = response.data.message

      const { data: { message } } = await axios.get(url)

      setResult(message)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => { getDog() }, [])

  return <img src={result} />
}
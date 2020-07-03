import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Dogs () {
  const [results, setResults] = useState([])

  async function getDogs () {
    try {
      const response = await axios
        .get('https://dog.ceo/api/breeds/list/all')
      console.log('response test:', response)

      const { data } = response
      console.log('data test:', data)

      const { message } = data
      console.log('message test:', message)

      const keys = Object.keys(message)
      console.log('keys test:', keys)

      setResults(keys)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => { getDogs() }, [])

  console.log('results test:', results)

  const breeds = results
    .map(result => <p key={result}>
      <Link to={`/dog/${result}`}>{result}</Link>
    </p>)

  return (
    <>
      {breeds}
    </>
  );
}
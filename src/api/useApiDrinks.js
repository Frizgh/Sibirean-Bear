import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
export function useApiDrinks() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    axios
      .get('https://67457811512ddbd807f822d1.mockapi.io/coffe/api/v1/Drinks')
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
    setLoader(false)
  }, [])
  return { data, error, loader }
}

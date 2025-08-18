import { useEffect, useState } from 'react'
import { CoffeeContext } from '.'
import { allCoffee } from '../api/api'

export default function CoffeeContextProvider({ children }) {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    async function dataLoad() {
      try {
        const result = await allCoffee()
        setCoffees(result)
      } catch (error) {
        console.log(error)
      }
    }
    dataLoad()
  }, [])

  return (
    <>
      <CoffeeContext.Provider value={{ coffees, setCoffees }}>
        {children}
      </CoffeeContext.Provider>
    </>
  )
}

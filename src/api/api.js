async function allCoffee() {
  try {
    const res = await fetch('http://localhost:5000/coffee')
    return res.json()
  } catch (error) {
    return error
  }
}

async function coffeeDetails({ params }) {
  try {
    const res = await fetch(`http://localhost:5000/coffee/${params.id}`)
    return res.json()
  } catch (error) {
    return error
  }
}

export { allCoffee, coffeeDetails }

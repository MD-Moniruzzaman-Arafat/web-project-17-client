async function allCoffee() {
  try {
    const res = await fetch('https://web-project-17-server.vercel.app/coffee')
    return res.json()
  } catch (error) {
    return error
  }
}

async function coffeeDetails({ params }) {
  try {
    const res = await fetch(
      `https://web-project-17-server.vercel.app/coffee/${params.id}`
    )
    return res.json()
  } catch (error) {
    return error
  }
}

async function coffeeEdit({ params }) {
  try {
    const res = await fetch(
      `https://web-project-17-server.vercel.app/coffee/${params.id}`
    )
    return res.json()
  } catch (error) {
    return error
  }
}

export { allCoffee, coffeeDetails, coffeeEdit }

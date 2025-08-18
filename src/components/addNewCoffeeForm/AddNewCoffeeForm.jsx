import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function AddNewCoffeeForm() {
  const [addCoffeeData, setAddCoffeeData] = useState({
    name: '',
    chef: '',
    supplier: '',
    taste: '',
    category: '',
    details: '',
    photo: '',
    price: '',
  })

  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target
    setAddCoffeeData({ ...addCoffeeData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const res = await fetch('http://localhost:5000/coffee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addCoffeeData),
      })
      const result = await res.json()
      if (result.acknowledged) {
        navigate('/')
      }
      console.log(result)
    } catch (error) {
      console.log(error)
    }

    console.log(addCoffeeData)
  }
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Name</legend>
            <input
              name="name"
              onChange={handleChange}
              value={addCoffeeData.name}
              type="text"
              className="input"
              placeholder="Enter coffee name"
            />
            <p className="label"></p>
          </fieldset>
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Chef</legend>
            <input
              name="chef"
              onChange={handleChange}
              value={addCoffeeData.chef}
              type="text"
              className="input"
              placeholder="Enter coffee chef"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Supplier</legend>
            <input
              name="supplier"
              onChange={handleChange}
              value={addCoffeeData.supplier}
              type="text"
              className="input"
              placeholder="Enter coffee supplier"
            />
            <p className="label"></p>
          </fieldset>
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Taste</legend>
            <input
              name="taste"
              onChange={handleChange}
              value={addCoffeeData.taste}
              type="text"
              className="input"
              placeholder="Enter coffee taste"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Category</legend>
            <input
              name="category"
              onChange={handleChange}
              value={addCoffeeData.category}
              type="text"
              className="input"
              placeholder="Enter coffee category"
            />
            <p className="label"></p>
          </fieldset>
          <fieldset className="fieldset min-w-xs">
            <legend className="fieldset-legend">Details</legend>
            <input
              name="details"
              onChange={handleChange}
              value={addCoffeeData.details}
              type="text"
              className="input"
              placeholder="Enter coffee details"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex justify-center">
          <fieldset className="fieldset min-w-xs lg:min-w-2xl">
            <legend className="fieldset-legend">Photo</legend>
            <input
              name="photo"
              onChange={handleChange}
              value={addCoffeeData.photo}
              type="text"
              className="input w-full"
              placeholder="Enter photo URL"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex justify-center">
          <fieldset className="fieldset min-w-xs lg:min-w-2xl">
            <legend className="fieldset-legend">Price</legend>
            <input
              name="price"
              onChange={handleChange}
              value={addCoffeeData.price}
              type="number"
              className="input w-full"
              placeholder="Enter coffee price"
            />
            <p className="label"></p>
          </fieldset>
        </div>
        <div className="flex justify-center">
          <button className="btn min-w-xs lg:min-w-2xl bg-[#D2B48C]">
            Add Coffee
          </button>
        </div>
      </form>
    </>
  )
}

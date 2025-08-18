import { useContext } from 'react'
import { Link } from 'react-router'
import editIcon from '../../assets/images/icons/Frame (1).svg'
import viewIcon from '../../assets/images/icons/Frame.svg'
import deleteIcon from '../../assets/images/icons/delete 1.svg'
import { CoffeeContext } from '../../contexts'

export default function OurPopularProductsCard({ data }) {
  const { coffees, setCoffees } = useContext(CoffeeContext)
  async function handleDelete(id) {
    console.log(id)
    try {
      const res = await fetch(`http://localhost:5000/coffee/${id}`, {
        method: 'DELETE',
      })
      const result = await res.json()
      const filterData = coffees.filter((data) => data._id !== id)
      setCoffees(filterData)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="bg-[#f5f4f1d3] max-w-[648px] flex flex-col lg:flex-row items-center justify-between p-5 gap-5 rounded-lg">
        <img className="min-w-[185px]" src={data?.photo} alt="" />
        <div className="min-w-[185px] text-center">
          <p>Name: {data?.name}</p>
          <p>Chef: {data?.chef}</p>
          <p>Price: {data?.price} Taka</p>
        </div>
        <div className="min-w-[185px] flex items-center justify-center flex-row lg:flex-col  gap-2">
          <Link to={`/coffee-details/${data?._id}`}>
            <img
              src={viewIcon}
              alt=""
              className="bg-[#D2B48C] p-1 rounded-xs"
            />
          </Link>
          <Link to={'/update-coffee'}>
            <img
              src={editIcon}
              alt=""
              className="bg-[#3C393B] p-1 rounded-xs"
            />
          </Link>
          <a onClick={() => handleDelete(data?._id)}>
            <img
              src={deleteIcon}
              alt=""
              className="bg-[#EA4744] p-1 rounded-xs"
            />
          </a>
        </div>
      </div>
    </>
  )
}

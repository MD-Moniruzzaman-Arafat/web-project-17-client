import { Link, useLoaderData } from 'react-router'
import icon from '../../assets/images/icons/Vector.svg'
import bg from '../../assets/images/more/1.png'
import OurPopularProductsCard from './OurPopularProductsCard'

export default function OurPopularProducts() {
  const coffeeData = useLoaderData()
  console.log(coffeeData)
  return (
    <>
      <div
        className="my-10 min-h-[900px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto">
          <div className="text-center">
            <p className="">--- Sip & Savor ---</p>
            <h1 className="text-3xl my-1">Our Popular Products</h1>
            <Link
              to={'/add-new-coffee'}
              className="bg-[#E3B577] btn border-[#331A15] text-white text-shadow-gray-300-50 px-5"
            >
              Add Coffee
              <img src={icon} alt="" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {coffeeData.map((data) => (
              <OurPopularProductsCard key={data._id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

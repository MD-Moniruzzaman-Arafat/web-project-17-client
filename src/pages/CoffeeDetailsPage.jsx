import { Link } from 'react-router'
import coffee from '../assets/images/1.png'
import arrow from '../assets/images/icons/left-arrow.svg'

export default function CoffeeDetailsPage() {
  return (
    <>
      <div>
        <div className="container mx-auto p-10">
          <Link to={'/'}>
            <h1 className="flex mb-5">
              {' '}
              <img src={arrow} alt="" />
              Back to home
            </h1>
          </Link>
          <div>
            <div className="bg-[#f5f4f1d3] max-w-[648px] mx-auto flex flex-col lg:flex-row items-center justify-around p-5 gap-5 rounded-lg">
              <img className="min-w-[185px]" src={coffee} alt="" />
              <div className="min-w-[185px] ">
                <h1 className="text-2xl font-bold">Niceties</h1>
                <p>
                  <span className="font-bold">Name:</span> Americano Coffee
                </p>
                <p>
                  <span className="font-bold">Chef:</span> Mr. Matin Paul
                </p>
                <p>
                  <span className="font-bold">Supplier:</span> Cappu Authorizer
                </p>
                <p>
                  <span className="font-bold">Taste:</span> Sweet and hot
                </p>
                <p>
                  <span className="font-bold">Category:</span> Americano
                </p>
                <p>
                  <span className="font-bold">Details:</span> Espresso with hot
                  water
                </p>
                <p>
                  <span className="font-bold">Price:</span> 890 Taka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

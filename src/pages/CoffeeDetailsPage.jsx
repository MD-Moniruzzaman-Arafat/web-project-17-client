import { Link, useLoaderData } from 'react-router'
import arrow from '../assets/images/icons/left-arrow.svg'

export default function CoffeeDetailsPage() {
  const result = useLoaderData()
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
              <img className="min-w-[185px]" src={result?.photo} alt="" />
              <div className="min-w-[185px] ">
                <h1 className="text-2xl font-bold">Niceties</h1>
                <p>
                  <span className="font-bold">Name:</span> {result?.name}
                </p>
                <p>
                  <span className="font-bold">Chef:</span> {result?.chef}
                </p>
                <p>
                  <span className="font-bold">Supplier:</span>{' '}
                  {result?.supplier}
                </p>
                <p>
                  <span className="font-bold">Taste:</span> {result?.taste}
                </p>
                <p>
                  <span className="font-bold">Category:</span>{' '}
                  {result?.category}
                </p>
                <p>
                  <span className="font-bold">Details:</span> {result?.details}
                </p>
                <p>
                  <span className="font-bold">Price:</span> {result?.price} Taka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

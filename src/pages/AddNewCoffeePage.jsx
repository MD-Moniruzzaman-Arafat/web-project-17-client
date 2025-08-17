import { Link } from 'react-router'
import arrow from '../assets/images/icons/left-arrow.svg'
import AddNewCoffeeForm from '../components/addNewCoffeeForm/AddNewCoffeeForm'

export default function AddNewCoffeePage() {
  return (
    <>
      <div>
        <div className="container mx-auto my-10">
          <Link to={'/'}>
            <h1 className="flex mb-5">
              {' '}
              <img src={arrow} alt="" />
              Back to home
            </h1>
          </Link>
          <div className="bg-[#F4F3F0] p-10 ">
            <div className="max-w-lg mx-auto text-center">
              <h1 className="text-3xl">Add New Coffee</h1>
              <p>
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <AddNewCoffeeForm />
          </div>
        </div>
      </div>
    </>
  )
}

import { Link } from 'react-router'
import notFoundImg from '../assets/images/404/404.gif'
import arrow from '../assets/images/icons/left-arrow.svg'

export default function NotFoundPage() {
  return (
    <>
      <div className="container mx-auto p-10">
        <Link to={'/'}>
          <h1 className="flex mb-5">
            {' '}
            <img src={arrow} alt="" />
            Back to home
          </h1>
        </Link>
        <div className="">
          <img className="w-lg mx-auto" src={notFoundImg} alt="" />
        </div>
      </div>
    </>
  )
}

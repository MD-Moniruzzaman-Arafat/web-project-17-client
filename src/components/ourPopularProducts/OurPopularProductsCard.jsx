import { Link } from 'react-router'
import coffee from '../../assets/images/1.png'
import editIcon from '../../assets/images/icons/Frame (1).svg'
import viewIcon from '../../assets/images/icons/Frame.svg'
import deleteIcon from '../../assets/images/icons/delete 1.svg'

export default function OurPopularProductsCard() {
  return (
    <>
      <div className="bg-[#f5f4f1d3] max-w-[648px] flex flex-col lg:flex-row items-center justify-between p-5 gap-5 rounded-lg">
        <img className="min-w-[185px]" src={coffee} alt="" />
        <div className="min-w-[185px] text-center">
          <p>Name: Americano Coffee</p>
          <p>Chef: Mr. Matin Paul</p>
          <p>Price: 890 Taka</p>
        </div>
        <div className="min-w-[185px] flex items-center justify-center flex-row lg:flex-col  gap-2">
          <Link to={'/coffee-details'}>
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
          <a>
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

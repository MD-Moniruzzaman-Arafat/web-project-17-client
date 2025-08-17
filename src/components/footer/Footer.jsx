import facebookIcon from '../../assets/images/icons/facebook-3-2 1.svg'
import twitterIcon from '../../assets/images/icons/Group 24.svg'
import instagramIcon from '../../assets/images/icons/instagram-2016-5 1.svg'
import linkedinIcon from '../../assets/images/icons/linkedin-icon-2 1.svg'
import mailIcon from '../../assets/images/icons/mail.svg'
import mapIcon from '../../assets/images/icons/map.svg'
import phoneIcon from '../../assets/images/icons/phone.svg'
import bg from '../../assets/images/more/13.jpg'
import bg2 from '../../assets/images/more/24.jpg'
import logo from '../../assets/images/more/logo1.png'

export default function Footer() {
  return (
    <>
      <div
        className="py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto flex gap-5 flex-col lg:flex-row justify-between p-3 lg:p-0">
          <div className=" flex flex-col gap-5">
            <img className="w-10" src={logo} alt="" />
            <h1 className="text-3xl">Espresso Emporium</h1>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex items-center gap-2">
              <img className="w-6" src={facebookIcon} alt="" />
              <img className="w-6" src={twitterIcon} alt="" />
              <img className="w-6" src={instagramIcon} alt="" />
              <img className="w-6" src={linkedinIcon} alt="" />
            </div>
            <h1 className="text-3xl">Get in Touch</h1>
            <div>
              <p className="flex items-center gap-2 text-sm">
                <img className="w-3" src={phoneIcon} alt="" /> +88 01533 333 333
              </p>
              <p className="flex items-center gap-2 text-sm">
                <img className="w-3" src={mailIcon} alt="" /> info@gmail.com
              </p>
              <p className="flex items-center gap-2 text-sm">
                <img className="w-3" src={mapIcon} alt="" /> 72, Wall street,
                King Road, Dhaka+
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-3xl">Connect with Us</h1>
            <form action="" className="flex flex-col gap-5 mt-5 lg:min-w-sm">
              <input type="text" placeholder="Name" className="input" />
              <input type="text" placeholder="Email" className="input" />
              <textarea className="textarea" placeholder="Message"></textarea>
              <button className="btn btn-outline w-30 rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <p className="text-white text-center py-1">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </>
  )
}

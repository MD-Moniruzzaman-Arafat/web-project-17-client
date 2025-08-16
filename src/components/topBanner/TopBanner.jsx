import banner from '../../assets/images/more/15.jpg'
import logo from '../../assets/images/more/logo1.png'

export default function TopBanner() {
  return (
    <>
      <div style={{ backgroundImage: `url(${banner})` }}>
        <h1 className="flex items-center justify-center text-4xl">
          <img className="w-20" src={logo} alt="" /> Espresso Emporium
        </h1>
      </div>
    </>
  )
}

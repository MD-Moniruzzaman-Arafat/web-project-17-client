import Banner from '../components/banner/Banner'
import Feature from '../components/feature/Feature'
import FollowOnInstagram from '../components/followOnInstagram/FollowOnInstagram'
import OurPopularProducts from '../components/ourPopularProducts/OurPopularProducts'

export default function HomePage() {
  return (
    <>
      <Banner />
      <Feature />
      <OurPopularProducts />
      <FollowOnInstagram />
    </>
  )
}

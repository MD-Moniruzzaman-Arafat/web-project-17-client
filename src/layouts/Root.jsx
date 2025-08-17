import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import TopBanner from '../components/topBanner/TopBanner'

export default function Root() {
  return (
    <>
      <TopBanner />
      <Outlet />
      <Footer />
    </>
  )
}

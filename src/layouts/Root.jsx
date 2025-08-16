import { Outlet } from 'react-router'
import TopBanner from '../components/topBanner/TopBanner'

export default function Root() {
  return (
    <>
      <TopBanner />
      <Outlet />
    </>
  )
}

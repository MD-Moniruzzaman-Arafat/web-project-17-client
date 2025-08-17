import { createBrowserRouter } from 'react-router'
import Root from '../layouts/Root'
import AddNewCoffeePage from '../pages/AddNewCoffeePage'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/add-new-coffee',
        element: <AddNewCoffeePage />,
      },
    ],
  },
])

export default router

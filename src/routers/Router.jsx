import { createBrowserRouter } from 'react-router'
import Root from '../layouts/Root'
import AddNewCoffeePage from '../pages/AddNewCoffeePage'
import CoffeeDetailsPage from '../pages/CoffeeDetailsPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import UpdateExistingCoffeeDetailsPage from '../pages/UpdateExistingCoffeeDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/add-new-coffee',
        element: <AddNewCoffeePage />,
      },
      {
        path: '/coffee-details',
        element: <CoffeeDetailsPage />,
      },
      {
        path: '/update-coffee',
        element: <UpdateExistingCoffeeDetailsPage />,
      },
    ],
  },
])

export default router

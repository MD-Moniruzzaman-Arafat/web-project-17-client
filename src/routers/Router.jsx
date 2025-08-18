import { createBrowserRouter } from 'react-router'
import { coffeeDetails } from '../api/api'
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
        path: '/coffee-details/:id',
        element: <CoffeeDetailsPage />,
        loader: coffeeDetails,
      },
      {
        path: '/update-coffee',
        element: <UpdateExistingCoffeeDetailsPage />,
      },
    ],
  },
])

export default router

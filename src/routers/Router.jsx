import { createBrowserRouter } from 'react-router'
import { coffeeDetails, coffeeEdit } from '../api/api'
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
        path: '/update-coffee/:id',
        element: <UpdateExistingCoffeeDetailsPage />,
        loader: coffeeEdit,
      },
    ],
  },
])

export default router

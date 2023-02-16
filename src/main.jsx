import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLayout from './layouts/HomeLayout'
import { getData } from './layouts/HomeLayout'
import Products from './blocks/Products.jsx'
import ProductDetails from './blocks/ProductDetails'
import { fetchSingleItem } from './blocks/ProductDetails'
const router = createBrowserRouter([
  {
    path: '/eweb/',
    element: <HomeLayout />,
    loader: getData,
    children: [{
      path: '/eweb/',
      element: <Products />,
      loader: getData,
    },
    {
      path: 'eweb/products',
      element: <Products />,
      loader: getData
    },
    {
      path: 'eweb/products/:id',
      element: <ProductDetails />,
      loader: fetchSingleItem
    }
    ]
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

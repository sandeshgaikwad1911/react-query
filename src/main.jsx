import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/products/:productId',
    element: <Product />,
  }
]);


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </>,
)

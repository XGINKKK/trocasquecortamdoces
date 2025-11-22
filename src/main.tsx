import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import UpsellPage from './pages/UpsellPage.tsx'
import DownsellPage from './pages/DownsellPage.tsx'
import Downsell2Page from './pages/Downsell2Page.tsx'

import MembersBasic from './pages/MembersBasic.tsx'
import MembersPremium from './pages/MembersPremium.tsx'
import CheckoutMockup from './pages/CheckoutMockup.tsx'
import Upsell1Page from './pages/Upsell1Page.tsx'
import ProductsPage from './pages/ProductsPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/up',
    element: <UpsellPage />,
  },
  {
    path: '/down',
    element: <DownsellPage />,
  },
  {
    path: '/down2',
    element: <Downsell2Page />,
  },
  {
    path: '/membrosbasica',
    element: <MembersBasic />,
  },
  {
    path: '/membrospremium',
    element: <MembersPremium />,
  },
  {
    path: '/checkout-mockup',
    element: <CheckoutMockup />,
  },
  {
    path: '/upsell1',
    element: <Upsell1Page />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

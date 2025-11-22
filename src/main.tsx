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
import DiagnosticoPage from './pages/DiagnosticoPage.tsx'
import ProtocoloPage from './pages/ProtocoloPage.tsx'
import RupturaPage from './pages/RupturaPage.tsx'
import AntiRecaidaPage from './pages/AntiRecaidaPage.tsx'
import EntregavelDownPage from './pages/EntregavelDownPage.tsx'
import EntregavelDown2Page from './pages/EntregavelDown2Page.tsx'

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
  {
    path: '/entregavel1',
    element: <Upsell1Page />,
  },
  {
    path: '/entregavel1/diagnostico',
    element: <DiagnosticoPage />,
  },
  {
    path: '/entregavel1/protocolo',
    element: <ProtocoloPage />,
  },
  {
    path: '/entregavel1/ruptura',
    element: <RupturaPage />,
  },
  {
    path: '/entregavel1/anti-recaida',
    element: <AntiRecaidaPage />,
  },
  {
    path: '/entregaveldown',
    element: <EntregavelDownPage />,
  },
  {
    path: '/entregaveldown2',
    element: <EntregavelDown2Page />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

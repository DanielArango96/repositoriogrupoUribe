import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingCartProvider } from '../../Context/Index.jsx'
import './App.css'
import Home from '../Home/Index.jsx'
import MyAccount from '../MyAccount/Index.jsx'
import MyOrder from '../MyOrder/Index.jsx'
import MyOrders from '../MyOrders/Index.jsx'
import SignIn from '../SignIn/Index.jsx'
import NotFound from '../NotFound/Index.jsx'
import Mango from '../Mango/Index.jsx'
import Rifle from '../Rifle/Index.jsx'
import NafNaf from '../NafNaf/Index.jsx'
import AmericanBrands from '../AmericanBrands/Index.jsx'
import Registro from '../Registro/Registro.jsx'
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu.jsx";



function App() {
  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/registro', element: <Registro /> },
    { path: '/*', element: <NotFound /> },
    { path: '/mango', element: <Mango /> },
    { path: '/rifle', element: <Rifle /> },
    { path: '/naf-naf', element: <NafNaf /> },
    { path: '/american-brands', element: <AmericanBrands /> },
  ]);

  return (
    <ShoppingCartProvider>
      <RouterProvider router={router}>
        <Home />
        <CheckoutSideMenu/>
      </RouterProvider>
    </ShoppingCartProvider>

  )
}

export default App

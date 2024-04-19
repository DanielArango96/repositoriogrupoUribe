import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
  const activeStyle = 'underline underline-offset-4'
  const context = useContext(ShoppingCartContext)
  return (
    <nav className='w-full h-14 hidden bg-gray-100 lg:flex p-4 justify-between'>
      <ul>
        <li className='text-xl font-black'>
          <NavLink to='/'>
            STYLE SYNERGY
          </NavLink>
        </li>
      </ul>
      <ul className='flex space-x-8'>
        <li className='font-bold text-md'>
          <NavLink to='/mango' className={({ isActive }) => isActive ? activeStyle : undefined}>
            MNG
          </NavLink>
        </li>
        <li className='font-bold text-md'>
          <NavLink to='/american-brands' className={({ isActive }) => isActive ? activeStyle : undefined}>
            AMERICAN BRANDS
          </NavLink>
        </li>
        <li className='font-bold text-md'>
          <NavLink to='/rifle' className={({ isActive }) => isActive ? activeStyle : undefined}>
            RIFLE
          </NavLink>
        </li>
        <li className='font-bold text-md'>
          <NavLink to='/naf-naf' className={({ isActive }) => isActive ? activeStyle : undefined}>
            NAF-NAF
          </NavLink>
        </li>
        <input className="outline-none p-3 rounded-full shadow-lg" placeholder="busca tu producto" type="search" />
      </ul>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/my-order">
            <ShoppingBagIcon className="h-6 w-6" />
          </NavLink>
        </li>
        {context.count}
        <li>
          <NavLink to="/sign-in">
            <UserCircleIcon className="h-6 w-6" />
            
          </NavLink>
        </li>
        
      </ul>
      
    </nav>
  )
}

export default NavBar

import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'


const FooterMovil = () => {
    return (
        <div className='w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center lg:hidden'>
            <NavLink to='/sign-in'>
                <UserCircleIcon className="w-8 h-8"/>
            </NavLink>
            <NavLink to='/my-order'>
                <ShoppingBagIcon className="w-8 h-8"/>
            </NavLink>
            <NavLink to='/mango'>
                <p className="font-bold">MANGO</p>
            </NavLink>
            <NavLink to='/naf-naf'>
                <p className="font-bold">NAFNAF</p>
            </NavLink>
            <NavLink to='/rifle'>
                <p className="font-bold">RIFLE</p>
            </NavLink>
            <NavLink to='/american-brands'>
                <p className="font-bold">AM</p>
            </NavLink>



        </div>
    )
}

export default FooterMovil

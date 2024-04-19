import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Index";
import { XMarkIcon } from '@heroicons/react/24/solid';
import Ordercards from "../../Components/OrderCards/Ordercards.jsx";
import './style.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    // Función para manejar la eliminación de un producto del carrito
    const handleDelete = (titulo) => {
        const filteredProducts = context.cartProducts.filter(producto => producto.titulo !== titulo);
        context.setCartProducts(filteredProducts);
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} my-order flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl text-center'>Mi orden actual</h2>
                <div><XMarkIcon className='w-6 h-6 cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} /></div>
            </div>
            <div className="px-6 overflow-y-scroll">
                {
                    context.cartProducts && context.cartProducts.length > 0 ? (
                        context.cartProducts.map((producto, index) => (
                            <Ordercards
                                key={index}
                                titulo={producto.titulo}
                                imagen={producto.imagen}
                                precio={producto.precio}
                                cantidad={context.handleCantidadChange[producto.titulo] || []} // Accede a cantidadesProductos a través del contexto
                                handleDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <p>No hay productos en el carrito</p>
                    )
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;
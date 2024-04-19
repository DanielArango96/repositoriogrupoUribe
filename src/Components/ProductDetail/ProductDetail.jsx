import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Index";
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl text-center'>Detalle</h2>
                <div><XMarkIcon className='w-6 h-6 cursor-pointer' onClick={() => context.closeProductDetail()} /></div>
            </div>
            <div>
                <div className="relative" style={{height: '350px'}}>
                    <figure className="px-6 absolute inset-0">
                        <img className="w-full h-full object-cover rounded-lg " src={context.productToShow.imagen} alt={context.productToShow.titulo} />
                    </figure>
                </div>
                <p className="flex flex-col p-6">
                    <span className="font-medium text-2xl text-center">{context.productToShow.precio}</span>
                    <span className="font-medium text-md text-center">{context.productToShow.titulo}</span>
                </p>
            </div>
        </aside>
    )
}

export default ProductDetail

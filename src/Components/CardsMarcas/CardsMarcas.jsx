import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Index";
import { CheckIcon } from '@heroicons/react/24/solid'

const CardsMarcas = ({ data }) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (e, productData) => {
    e.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
  }

  const renderIcon = (index, titulo) => { // Corrección aquí
    const isInCart = context.cartProducts.filter(producto => producto.titulo === titulo).length > 0

    if (isInCart) {
      return (
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" >
          <CheckIcon className="w-6 h-6 text-white"/>
        </button>
      )
    } else {
      return(
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={(e) => {
          addProductsToCart(e, data[index])
          e.stopPropagation()
        }}>
          Añadir al carrito
        </button>
      )

    }


  }
  return (
    <>
      {data.map((producto, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer" onClick={() => showProduct(data[index])}>
          <img
            src={producto.imagen}
            alt={producto.titulo}
            className="w-full h-40 object-contain rounded-md mb-2"
          />
          <div className="text-center mb-2">
            <h3 className="text-lg font-medium mb-1 lowercase">{producto.titulo}</h3>
            <p className="text-gray-500 text-sm mb-2">{producto.precio}</p>
          </div>
          {renderIcon(index, data[index].titulo)}
        </div>
      ))}
    </>
  );
};

export default CardsMarcas;
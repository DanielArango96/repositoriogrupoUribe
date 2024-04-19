import NavBar from '../../Components/NavBar/NavBar'
import LayoutMarcas from '../../Components/LayoutMarcas/LayoutMarcas.jsx'
import BotonesBusqueda from '../../Components/BotonesBusqueda/BotonesBusqueda.jsx'
import FooterMovil from '../../Components/FooterMovil/FooterMovil'
import LayoutCards from '../../Components/LayoutCards/LayoutCards.jsx'
import CardsMarcas from '../../Components/CardsMarcas/CardsMarcas.jsx'
import ProductDetail from '../../Components/ProductDetail/ProductDetail.jsx'
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu.jsx";
import productos from './productos.js'


const Mango = () => {
  return (
    <div>
      <NavBar />
      <LayoutMarcas>
        <p className='text-xl font-bold border-b-2 border-orange-800 uppercase'>Hogar del estilo y la cultura Mediterránea en Colombia.</p>
        <div className='flex justify-between items-center mt-4'>
          <BotonesBusqueda />

        </div>

      </LayoutMarcas>
      <ProductDetail />
      <CheckoutSideMenu/>
      <LayoutCards>
        <CardsMarcas data={productos}/>        
      </LayoutCards>
      <FooterMovil/>
    </div>
  )
}

export default Mango

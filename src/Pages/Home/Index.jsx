import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import BanerPrincipal from '../../Components/BanerPrincipal/BanerPrincipal'
import CardsPaginaPrincipal from '../../Components/CardsPaginaPrincipal/CardsPaginaPrincipal'
import EmpresasAfiliadas from '../../Components/EmpresasAfiliadas/EmpresasAfiliadas'
import Faqs from '../../Components/Faqs/Faqs'
import FooterPrincipal from '../../Components/FooterPrincipal/FooterPrincipal'
import FooterMovil from '../../Components/FooterMovil/FooterMovil'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <section className='w-full h-auto'>
        <BanerPrincipal/>        
      </section>
      <div className='p-6'>
        <p className='text-3xl font-semibold'>RECOMENDADOS</p>        
        <CardsPaginaPrincipal/>    

      </div>
      <EmpresasAfiliadas/>
      <Faqs/>
      <FooterPrincipal/>
      <FooterMovil/>
    </div>
  )
}

export default Home

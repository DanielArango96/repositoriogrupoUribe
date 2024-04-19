import React from 'react'

const Faqs = () => {
  return (
    <div className="w-full h-full bg-white py-12 px-4 md:px-12 lg:px-24 xl:px-32" id="faqs">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Preguntas frecuentes</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">¿Cuáles son los métodos de pago aceptados?</h3>
              <p className="text-base text-left leading-relaxed">Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal y otros métodos de pago seguros.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">¿Cuáles son las opciones de envío disponibles?</h3>
              <p className="text-base text-left leading-relaxed">Ofrecemos envío estándar y express. Los detalles de los tiempos de entrega y costos se proporcionan durante el proceso de compra.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">¿Dónde puedo encontrar información sobre el cuidado de las prendas?</h3>
              <p className="text-base text-left leading-relaxed">La información sobre el cuidado de las prendas se encuentra disponible en la etiqueta de cada artículo y también puedes consultar nuestra guía de cuidado en línea para obtener consejos útiles.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">¿Cuál es la política de devolución?</h3>
              <p className="text-base text-left leading-relaxed">Nuestra política de devolución permite devolver artículos dentro de un plazo de 30 días a partir de la fecha de compra. Los artículos deben estar en su estado original, sin usar y con todas las etiquetas intactas. Por favor, consulta nuestra página de políticas de devolución para obtener más detalles sobre cómo iniciar el proceso de devolución y los requisitos específicos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs

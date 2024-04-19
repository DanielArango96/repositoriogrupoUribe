import React from 'react'
import { NavLink } from 'react-router-dom'
import backgroundImage from '../../assets//imagenesSignyRegistro/fondologin2.jpg'


const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-fixed" id="fondo_registro" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Iniciar sesión
          </h2>
        </div>
        <form className="mt-8 space-y-6 bg-white bg-opacity-50 p-8 rounded-md shadow-md" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Correo electrónico</label>
              <input id="correo" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Correo electrónico" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input id="contrasena" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-black">
                Recordarme
              </label>
            </div>

            <div className="text-sm">
              <NavLink to="/registro" className="font-medium text-black hover:text-white">
                registrarme
              </NavLink>
            </div>

          </div>

          <div>
            <input id="iniciarSesion" type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="Iniciar sesión" />
          </div>
          <NavLink to="/" className="font-medium text-black hover:text-blue">
            Regresar al home
          </NavLink>
        </form>
      </div>
    </div>
  )
}

export default SignIn

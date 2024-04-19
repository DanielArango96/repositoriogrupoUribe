import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../../assets//imagenesSignyRegistro/fondoRegistro.jpg'

const Registro = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 border bg-cover bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form className="w-full max-w-sm bg-white rounded p-8 shadow-xl border" id="formulario">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Correo
          </label>
          <input id="correo" className="border py-2 px-3 text-grey-darkest w-full" type="text" name="username" />
          <p className="text-red-500 hidden" id="errorCorreo">Este correo ya está registrado.</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input className="border py-2 px-3 text-grey-darkest w-full" type="password" name="password" id="contrasena" />
          <p className="text-red-500 hidden" id="errorContrasena"></p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verify-password">
            Verificar contraseña
          </label>
          <input className="border py-2 px-3 text-grey-darkest w-full" type="password" name="verify-password" id="confirmarContrasena" />
          <p className="text-red-500 hidden" id="errorConfirmarContrasena">Las contraseñas no coinciden.</p>
        </div>
        <div className="text-center">
          <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="botonRegistro">
            Registrar
          </button>
          <NavLink to="/sign-in" className="block mt-2 text-sm text-gray-600 underline">Volver al login</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Registro;
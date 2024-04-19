import React from "react";
import { NavLink } from "react-router-dom";
import backgroundImage from "../../assets/ImagenesPaginaPrincipal/moda2.jpg";
import moda1 from "../../assets/ImagenesPaginaPrincipal/moda1.jpg";

const BanerPrincipal = () => {
  return (
    <div className="w-full h-3/4">
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-36 lg:justify-start">
          <input
            className="outline-none p-3 rounded-full shadow-lg transition duration-300 focus-within:shadow-lg focus:right-3 focus:w-11/12 lg:hidden"
            placeholder="busca tu opcion"
            type="search"
          />
          <div className="hidden h-auto lg:w-2/3 lg:flex pb-6">
            <p className="text-4xl ml-16 font-bold text-white">
              Encuentra mas prendas aqui
            </p>
          </div>
          <NavLink to='/mango'>
            <button
              className="w-32 rounded-lg shadow-sm text-xl font-semibold p-4 bg-white transition-all duration-500 ease-in-out hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16"
              type="button"
            >
              Explorar
            </button>
          </NavLink>
        </div>
        <div
          className="w-full h-full lg:h-96 lg:bg-cover lg:bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img className="lg:hidden" src={moda1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BanerPrincipal;

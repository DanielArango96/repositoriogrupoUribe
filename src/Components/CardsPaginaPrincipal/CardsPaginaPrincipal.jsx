import productos from "./productos"

const CardsPaginaPrincipal = () => {
    return (
        <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-8 overflow-hidden">
            {productos.map((producto, index) => (
                <div key={index} className="w-48 h-64 shadow-lg rounded-lg flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl">
                    <div className="w-full h-3/5 rounded-t-lg bg-cover" style={{ backgroundImage: `url(${producto.imagen})` }}></div>
                    <div className="w-full h-2/5 bg-black rounded-b-lg">
                        <p className="text-white font-bold text-lg text-center">{producto.titulo}</p>
                        <p className="text-white text-md text-center px-6 py-2">{producto.precio}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsPaginaPrincipal;
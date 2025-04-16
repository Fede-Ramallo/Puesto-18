import Image from 'next/image';

import FruitStand from '../public/fruit-stand.jpg';
import Logo from '../public/logo.png'

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-16 text-center"
      >
        <Image
          src={FruitStand}
          alt="Fruit Stand"
          className="absolute inset-0 object-cover w-full h-full -z-10 brightness-75"
        />
        <div className="container mx-auto px-4 relative">
        <div className="flex justify-center mb-4">
            <Image
                src={Logo}
                alt="Logo Puesto 18"
                width={150}
                height={150}
                className="rounded-full border-4 border-white"
              />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Bienvenido a Puesto 18
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-lg">
            ¡Frescura y sabor directo a tu hogar!
          </p>
          <a
            href="#combos"
            className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Descubre nuestros Combos
          </a>
        </div>
      </section>

      {/* Combos Section */}
      <section id="combos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-amber-600 mb-8 text-center">
            Nuestros Combos
          </h2>
          <p className="text-xs text-gray-500 text-center mb-8">
            * Los precios mostrados no son reales, son solo demostrativos, ya que la página no posee el catalogo real de Puesto 18.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Combo 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">
                Combo Familiar
                <span className="text-xs text-gray-500 ml-2">(Ideal para 4 personas)</span>
                </h3>
              <p className="text-gray-700 mb-4">
                1kg de papas, 1kg de cebollas, 1kg de tomates, 1 lechuga, 1 pimiento.
              </p>
              <p className="font-bold text-green-800">Precio: $500</p>
            </div>
            {/* Combo 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">
                Combo Saludable
                <span className="text-xs text-gray-500 ml-2">(Rico en vitaminas)</span>
                </h3>
                <p className="text-gray-700 mb-4">
                500g de zanahorias, 500g de espinaca, 1 brocoli, 2 manzanas.
              </p>
              <p className="font-bold text-green-800">Precio: $600</p>
            </div>
            {/* Combo 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Combo Express</h3>
              <span className="text-xs text-gray-500 ml-2">(Para una comida rapida)</span>

              
              <p className="text-gray-700 mb-4">
                1/2 kg de papas, 1/2 kg de cebollas, 3 tomates.
              </p>
              <p className="font-bold text-green-800">Precio: $300</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                &quot;Siempre encuentro la mejor calidad en Puesto 18. ¡Súper recomendable!&quot;
              </p>
              <p className="font-semibold text-green-700">- María G.</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                &quot;Los combos son muy convenientes y la atención es excelente.&quot;
              </p>           
              <p className="font-semibold text-green-700">- Juan P.</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                &quot;Desde que compro en Puesto 18 noto la diferencia en el sabor de las verduras&quot;
              </p>
              <p className="font-semibold text-green-700">- Laura F.</p>
            </div>
             {/* Testimonial 4 */}
             <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                &quot;Excelente atención y productos de buena calidad. Muy recomendable.&quot;
              </p>
              <p className="font-semibold text-green-700">- Carlos L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-amber-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-amber-600 mb-4">
          ¡Ven a visitarnos!
          </h2>    
          <p className="text-lg text-gray-700 mb-8">
          Nos encontramos en el corazón del mercado. ¡Te esperamos con la mejor atención!          
          </p>       
          <a
          
            href="#"
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Ver ubicación
          </a>
        </div>
      </section>
    </div>
  );
}

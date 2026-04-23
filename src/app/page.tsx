import Image from "next/image";

import Link from 'next/link';
import { ArrowRight, GraduationCap, Search, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
      {/*bienvenida*/}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 border border-blue-100">
        <GraduationCap size={16} />
        <span>Tu futuro empieza acá</span>
      </div>

      {/*titulo*/}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight max-w-3xl">
        Descubrí la carrera que <span className="text-blue-600">realmente</span> te apasiona
      </h1>

      {/*subtitulo*/}
      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Orientación vocacional gratuita diseñada para aspirantes en Argentina. 
        Compará carreras, leé reseñas reales y tomá la mejor decisión.
      </p>

      {/*btns*/}
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <Link 
          href="/test" 
          className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
        >
          Empezar el Test
          <ArrowRight size={20} />
        </Link>
        <Link 
          href="/resenas" 
          className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all active:scale-95"
        >
          Ver reseñas
        </Link>
      </div>

      {/*tarjetas*/}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Search size={24} />
          </div>
          <h3 className="font-bold text-gray-800">Comparador</h3>
          <p className="text-sm text-gray-500 mt-2">Analizá planes de estudio de distintas universidades.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Star size={24} />
          </div>
          <h3 className="font-bold text-gray-800">Experiencias</h3>
          <p className="text-sm text-gray-500 mt-2">Leé lo que dicen los alumnos sobre las facultades.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <GraduationCap size={24} />
          </div>
          <h3 className="font-bold text-gray-800">Guía Local</h3>
          <p className="text-sm text-gray-500 mt-2">Enfocado en la oferta académica de Tucumán y el país.</p>
        </div>
      </div>
    </main>
  );
}

{/*hasta aca llego nati que estoy re fundido y son las 5:38, otro dia te muestro bien el tema de tailwind, es mas sencillo de lo que parece*/}
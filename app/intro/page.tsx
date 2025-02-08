"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ScrollToTop } from "../components/ScrollToTop"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 noise">
      <ScrollToTop />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Introducción a <span className="text-cyan-400 block">Shoppias</span>
            </h1>
            <p className="text-gray-400">Transformando negocios a través de tecnología innovadora</p>

            <div className="p-6 rounded-lg border border-gray-700 bg-gray-800">
              <p className="text-gray-300">
                En un mundo donde la transformación digital es crucial, Shoppias está a la vanguardia de soluciones
                empresariales revolucionarias. Hemos roto los plazos de desarrollo tradicionales al lanzar plataformas
                de nivel empresarial en días, reducido los costos operativos en un 45% a través de la integración
                avanzada de IA y agilizado la implementación de software de meses a días. Esto no es una hoja de ruta
                para el futuro: es nuestro historial probado de transformación de negocios hoy.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-cyan-400 text-2xl font-semibold mb-4">Números Revolucionarios que Importan:</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">•</span>
                    <span>Reducción del 60% en costos de desarrollo utilizando automatización de IA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">•</span>
                    <span>Convertimos un proyecto gubernamental de $2M en realidad en 90 días</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">•</span>
                    <span>Escalamos de 0 a más de 500 clientes empresariales globales</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">•</span>
                    <span>Transformamos compañías de taxis en potencias tecnológicas</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-cyan-400 text-2xl font-semibold mb-4">
                  Por qué los Gigantes Tecnológicos Confían en Nosotros:
                </h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>La Fundación Clinton nos eligió para sistemas críticos de misión</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Universal Studios nos seleccionó para innovación web</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Destacados en BuzzFeed por soluciones tecnológicas revolucionarias</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Respaldados por el Programa Acelerador de Microsoft</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="aspect-[16/10] bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Espacio de trabajo de oficina moderna con tecnología"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Colaboración en equipo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Visualización de análisis de datos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/founders" passHref>
            <button className="group relative px-8 py-3 overflow-hidden font-medium rounded-md bg-transparent text-cyan-300 border border-cyan-300 shadow-md transition-all duration-300 ease-out hover:text-black">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 group-hover:translate-x-0"></span>
              <span className="relative flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:text-black">
                Next
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


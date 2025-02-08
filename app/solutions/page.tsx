"use client"

import {
  Truck,
  ShoppingCart,
  Brain,
  UserCheck,
  Zap,
  CheckCircle,
  Headphones,
  RefreshCw,
  LinkIcon,
  CloudCog,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const products = [
  {
    title: "Plataforma de Transporte y Logística de Marca Blanca",
    icon: Truck,
    features: [
      "Lance su plataforma tipo Uber en 7 días",
      "Impulsa más de 500 negocios de transporte a nivel mundial",
      "Soluciones personalizadas para taxis, entregas y gestión de flotas",
      "Seguimiento en tiempo real, despacho automatizado y optimización impulsada por IA",
    ],
    gradient: "from-purple-600 to-blue-500",
  },
  {
    title: "Soluciones de Comercio Electrónico",
    icon: ShoppingCart,
    features: [
      "Lanzamiento de comercio electrónico a gran escala en 48 horas",
      "Cero pérdida de clientes en 5 años",
      "Gestión de inventario y ventas impulsada por IA",
      "Integración perfecta con sistemas existentes",
      "Búsqueda por cámara y recomendaciones personalizadas",
    ],
    gradient: "from-green-400 to-cyan-500",
  },
  {
    title: "Soluciones de IA Empresarial",
    icon: Brain,
    features: [
      "Agentes de Ventas IA: Generación automatizada de leads a conversión",
      "Creador de Contenido IA: Sistema inteligente de creación de contenido",
      "Automatización de Marketing: Gestión de campañas autoaprendizaje",
      "IA Empresarial Personalizada: Soluciones de automatización específicas de la industria",
    ],
    gradient: "from-pink-500 to-orange-400",
    highlight: "Última Innovación",
  },
  {
    title: "Software de Generación de Leads",
    icon: UserCheck,
    features: [
      "Identificación automatizada de prospectos",
      "Calificación inteligente de leads",
      "Análisis de comportamiento en tiempo real",
      "Automatización de comunicación personalizada",
      "Monitoreo y respuesta de señales web",
    ],
    gradient: "from-yellow-400 to-red-500",
  },
]

const commonFeatures = [
  { text: "Soporte 24/7", icon: Headphones },
  { text: "Actualizaciones regulares", icon: RefreshCw },
  { text: "Opciones de integración personalizadas", icon: LinkIcon },
  { text: "Características mejoradas con IA", icon: Zap },
  { text: "Implementación basada en la nube", icon: CloudCog },
]

export default function ProductShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/team"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Equipo</span>
          </Link>
        </div>
        <h1 className="text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-16">
          Soluciones que Definen el Mañana
        </h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${product.gradient} rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 group`}
            >
              <div className="bg-gray-900 bg-opacity-90 p-8 h-full transition-all duration-300 group-hover:bg-opacity-75">
                <div className="flex items-center mb-6">
                  <product.icon className="h-12 w-12 text-white mr-4" />
                  <h2 className="text-3xl font-bold text-white">{product.title}</h2>
                </div>
                {product.highlight && (
                  <span className="inline-block bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {product.highlight}
                  </span>
                )}
                <ul className="space-y-4">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-white mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-10">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Cada producto incluye:</h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {commonFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-600 hover:scale-105 text-center h-full"
                >
                  <feature.icon className="h-10 w-10 text-blue-400 mb-4" />
                  <span className="text-white text-lg font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/global-reach" className="inline-block">
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


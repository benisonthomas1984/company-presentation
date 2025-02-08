"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EquipoDedicado() {
  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-8">
      {/* Back button */}
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link
          href="/proposal-1"
          className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Propuesta 1</span>
        </Link>
      </div>

      <div className="mx-auto max-w-4xl space-y-6 pt-16">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">Equipo Dedicado</h1>
        <p className="text-xl text-gray-200 mb-8">Paquete de Equipo de Desarrollo Especializado</p>

        {/* Tarjeta del Desarrollador Flutter */}
        <Card className="bg-slate-800/50 text-gray-100 p-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flutter-icon-312mfnUi3u2Vp6T7HbL9ZIRx7t2iW9.webp"
                  alt="Icono del Desarrollador"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex-grow space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-yellow-400">Desarrollador Móvil Flutter</h2>
                  <p className="text-gray-400">Ubicación: Indonesia</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">US$600-700/mes</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Resumen Profesional</h3>
                  <p className="text-gray-300">
                    Especializado en desarrollo de aplicaciones móviles con dominio del inglés
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Habilidades</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Flutter</Badge>
                    <Badge variant="secondary">Dart</Badge>
                    <Badge variant="secondary">Desarrollo Móvil</Badge>
                    <Badge variant="secondary">UI/UX</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tarjeta del Desarrollador Backend & Frontend */}
        <Card className="bg-slate-800/50 text-gray-100 p-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flutter-icon-312mfnUi3u2Vp6T7HbL9ZIRx7t2iW9.webp"
                  alt="Icono del Desarrollador"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex-grow space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-yellow-400">Desarrollador Backend & Frontend</h2>
                  <p className="text-gray-400">Ubicación: Indonesia</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">US$400-500/mes</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Resumen Profesional</h3>
                  <p className="text-gray-300">
                    Experimentado en desarrollo backend con NodeJS y frontend con AngularJS, con dominio del inglés
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Habilidades</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">NodeJS</Badge>
                    <Badge variant="secondary">AngularJS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Condiciones del Desarrollador */}
        <Card className="bg-yellow-50 text-yellow-900 p-6">
          <div className="flex gap-4">
            <AlertTriangle className="h-6 w-6 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-3">Condiciones del Desarrollador</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Si un desarrollador no cumple con las expectativas, lo reemplazaremos con un nuevo desarrollador en un
                  plazo de 1.5 semanas.
                </li>
                <li>Se proporcionará documentación completa para todas las tareas de desarrollo.</li>
                <li>
                  La comunicación principal se realizará a través de Slack para interacciones eficientes y oportunas.
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/proposal-3" className="inline-block">
          <button className="group relative px-8 py-3 overflow-hidden font-medium rounded-md bg-transparent text-yellow-400 border border-yellow-400 shadow-md transition-all duration-300 ease-out hover:text-black">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 group-hover:translate-x-0"></span>
            <span className="relative flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:text-black">
              Next
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}


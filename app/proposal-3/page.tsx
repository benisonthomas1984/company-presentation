"use client"

import { MapPin, Clock, Calendar, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectManagerCard() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      {/* Back button */}
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link
          href="/proposal-2"
          className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Propuesta 2</span>
        </Link>
      </div>

      <div className="pt-16">
        <Card className="mx-auto max-w-4xl bg-slate-800 text-slate-100">
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-8">
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold text-yellow-400">Gerente de Proyecto</CardTitle>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                Argentina
              </div>
            </div>
            <div className="space-y-2 text-right">
              <div className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-slate-900">
                US$450-500/mes
              </div>
              <Button className="ml-4 bg-red-500 hover:bg-red-600">Propuesta</Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Availability Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-yellow-400">Disponibilidad</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center gap-2 rounded-lg bg-slate-700 p-4">
                  <Clock className="h-5 w-5 text-slate-300" />
                  <span>1 hora diaria</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-700 p-4">
                  <Calendar className="h-5 w-5 text-slate-300" />
                  <span>Lunes a Viernes</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-700 p-4">
                  <Clock className="h-5 w-5 text-slate-300" />
                  <span>22 horas mensuales</span>
                </div>
              </div>
            </div>

            {/* Responsibilities Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-yellow-400">Responsabilidades del Gerente de Proyecto</h2>
              <ul className="list-inside list-disc space-y-2 text-slate-300">
                <li>Recopilación y documentación de requisitos</li>
                <li>Comunicación con el cliente y resolución de consultas</li>
                <li>Coordinación del equipo de desarrollo</li>
                <li>Supervisión del control de calidad</li>
                <li>Seguimiento del progreso y elaboración de informes</li>
              </ul>
            </div>

            {/* Package Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-yellow-400">Paquete de Comunicación Mejorada</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Actualizaciones Diarias</Badge>
                <Badge variant="secondary">Comunicación por Slack</Badge>
                <Badge variant="secondary">Informes Semanales</Badge>
                <Badge variant="secondary">Coordinación de Equipo</Badge>
                <Badge variant="secondary">Documentación</Badge>
              </div>
            </div>

            {/* Terms Section */}
            <div className="rounded-lg border border-yellow-400/20 bg-yellow-400/10 p-4">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-yellow-400">Términos y Condiciones</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
                    <li>Se requiere compromiso mensual para la continuidad del proyecto</li>
                    <li>Comunicación principalmente a través de Slack para una coordinación eficiente</li>
                    <li>Informes detallados de progreso proporcionados semanalmente</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/thank-you" className="inline-block">
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


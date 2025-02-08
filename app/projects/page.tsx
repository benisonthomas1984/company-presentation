"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronRight, Activity, Vote, Zap, Heart, ShoppingCart, Car, ArrowLeft, ArrowRight } from "lucide-react"
import { AnimatedHero } from "./components/AnimatedHero"
import Link from "next/link"

const projects = [
  {
    title: "Revolución en Salud",
    subtitle: "Plataforma de Análisis COVID-19 (2020)",
    icon: <Activity className="w-10 h-10 text-blue-500" />,
    highlights: [
      "Completado en 3 meses vs. estándar de la industria de 12 meses",
      "Asociación con organizaciones de salud americanas y europeas",
      "Destacado en el American Health Organizational Journal",
      "Sistema de análisis y seguimiento de pacientes en tiempo real",
      "Implementado en múltiples laboratorios clínicos",
    ],
    color: "bg-blue-50",
    category: "salud",
  },
  {
    title: "Innovación Tecnológica Política",
    subtitle: "Plataforma de Voto por Poder",
    icon: <Vote className="w-10 h-10 text-green-500" />,
    highlights: [
      "Encargado por Bernie Sanders, Mark Ruffalo y Matthew Cooke",
      "Manejó millones de votos anónimos de forma segura",
      "Sistema avanzado de verificación de ID",
      "Clasificación de datos en tiempo real por estado",
      "Estableció nuevos estándares para la seguridad de votación digital",
    ],
    color: "bg-green-50",
    category: "política",
  },
  {
    title: "Transformación Empresarial",
    subtitle: "Automatización de Schneider Electric",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    highlights: [
      "Ahorró $1 millón anualmente en costos operativos",
      "Transformación completa sin papel",
      "Gestión de documentos conforme a la OMS",
      "Destacado en comunicados de prensa internacionales",
      "Referente de la industria para la transformación digital",
    ],
    color: "bg-yellow-50",
    category: "empresa",
  },
  {
    title: "Liderazgo en Salud Digital",
    subtitle: "Plataforma BlackDoctor.org",
    icon: <Heart className="w-10 h-10 text-red-500" />,
    highlights: [
      "El blog de salud más grande de América (más de 4M de visitantes)",
      "Sistema de gestión de contenido impulsado por IA",
      "Optimización de contenido automatizada",
      "Procesamiento de lenguaje natural pre-IA",
      "Destacado en BuzzFeed",
    ],
    color: "bg-red-50",
    category: "salud",
  },
  {
    title: "Excelencia en Comercio Electrónico",
    subtitle: "Transformación Digital de Centrogar",
    icon: <ShoppingCart className="w-10 h-10 text-purple-500" />,
    highlights: [
      "El minorista más grande de Argentina",
      "Integración perfecta de sistemas tradicionales y en línea",
      "Implementación de chatbot impulsado por IA",
      "Gestión de inventario en tiempo real",
      "Implementación sin tiempo de inactividad",
    ],
    color: "bg-purple-50",
    category: "comercio-electronico",
  },
  {
    title: "Innovación en Transporte",
    subtitle: "Plataforma Primera Clase",
    icon: <Car className="w-10 h-10 text-indigo-500" />,
    highlights: [
      "Gestiona más de 3000 viajes diarios",
      "Automatización completa de operaciones de despacho",
      "Gestión de flota en tiempo real",
      "Optimización de rutas impulsada por IA",
      "Ventaja competitiva frente a Uber",
    ],
    color: "bg-indigo-50",
    category: "transporte",
  },
]

const categories = ["todos", "salud", "política", "empresa", "comercio-electronico", "transporte"]

export default function SignatureProjects() {
  const [activeCategory, setActiveCategory] = useState("todos")
  const filteredProjects = projects.filter(
    (project) => activeCategory === "todos" || project.category === activeCategory,
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <AnimatedHero />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/global-reach"
            className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Alcance Global</span>
          </Link>
        </div>
        <Tabs defaultValue="todos" className="mb-8">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${project.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    {project.icon}
                    <Badge variant="secondary" className="text-xs">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-4">{project.title}</CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Transformar tu Empresa?</h2>
          <p className="text-xl mb-8">Creemos juntos tu historia de éxito.</p>
          <Button size="lg">Programar una Consulta</Button>
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/associations" className="inline-block">
            <button className="group relative px-8 py-3 overflow-hidden font-medium rounded-md bg-transparent text-cyan-600 border border-cyan-600 shadow-md transition-all duration-300 ease-out hover:text-white">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 group-hover:translate-x-0"></span>
              <span className="relative flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:text-white">
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


"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Star, Zap, ArrowLeft, ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"

const timelineData = [
  {
    year: 2017,
    title: "Premio al Mejor Producto Innovador",
    description: "Recibido del Ministerio de Ciencia y TecnologíaRecibido del Ministerio de Ciencia y Tecnología",
  },
  {
    year: 2018,
    title: "Top 10 Startups",
    description: "Seleccionado por Endeavor Argentina",
    icon: <Star className="w-8 h-8" />,
  },
  {
    year: 2018,
    title: "Programa Acelerador de Microsoft",
    description: "Seleccionado para unirse al prestigioso programa",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    year: 2018,
    title: "Preselección de ARCH Grants",
    description: "Preseleccionado para la Formación de Empresa en EE.UU.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    year: 2018,
    title: "Competencia TechCrunch Disrupt",
    description: "Seleccionado para participar en la competencia",
    icon: <Award className="w-8 h-8" />,
  },
  {
    year: 2019,
    title: "Conferencia de Startups Tecnológicas Collision",
    description: "Destacado en la prestigiosa conferencia tecnológica",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    year: 2020,
    title: "Competencia TechCrunch Disrupt",
    description: "Seleccionado nuevamente para la competencia",
    icon: <Award className="w-8 h-8" />,
  },
  {
    year: 2020,
    title: "Conferencia de Startups Tecnológicas Collision",
    description: "Destacado nuevamente en la conferencia tecnológica",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    year: 2024,
    title: "Respaldo de Kevin O'Leary",
    description:
      '"Efectivo, OnSpot, y ventaja de Primer Movimiento" - Sobre las iniciativas de automatización IA de Shoppias',
    icon: <Star className="w-8 h-8" />,
  },
]

const TimelineItem = ({ item, index }) => {
  const controls = useAnimation()
  const itemRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={itemRef}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-8 flex justify-between items-center w-full ${
        index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center justify-center order-1 bg-blue-500 shadow-xl w-12 h-12 rounded-full">
        <div className="text-white">{item.icon}</div>
      </div>
      <Card className="order-1 w-5/12 px-6 py-4 hover:shadow-2xl transition-shadow duration-300">
        <CardContent className="p-0">
          <h3 className="mb-3 font-bold text-blue-500 text-2xl">{item.year}</h3>
          <h4 className="mb-2 font-semibold text-gray-800 text-xl">{item.title}</h4>
          <p className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100">{item.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function RecognitionTimeline() {
  const [selectedYear, setSelectedYear] = useState(null)
  const years = [...new Set(timelineData.map((item) => item.year))]

  const filteredData = selectedYear ? timelineData.filter((item) => item.year === selectedYear) : timelineData

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <Link
        href="/associations"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Volver a Asociaciones</span>
      </Link>

      <h1 className="text-5xl font-bold mb-12 text-center text-blue-600">
        Liderando a través de la Excelencia: Nuestra Saga de Reconocimientos
      </h1>

      <div className="mb-12 flex justify-center space-x-2 overflow-x-auto">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year === selectedYear ? null : year)}
            className={`px-6 py-3 rounded-full text-lg font-semibold ${
              year === selectedYear ? "bg-blue-500 text-white" : "bg-white text-blue-500 hover:bg-blue-100"
            } transition-colors duration-300`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-blue-500 h-full border left-1/2"></div>

        {filteredData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>

      <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Logros Adicionales</h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 text-lg">
          <li>Destacado en BuzzFeed por la implementación de BlackDoctor.org</li>
          <li>Reconocido en el American Health Organization Journal por la plataforma COVID</li>
          <li>Reconocimiento de prensa por el logro de ahorro anual de $1M de Schneider Electric</li>
        </ul>
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/proposal" className="inline-block">
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
  )
}


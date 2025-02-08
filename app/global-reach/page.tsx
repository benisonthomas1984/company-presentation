"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

type PopupContent = {
  title: string
  items: string[]
}

export default function WorldMap() {
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState<PopupContent | null>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.add("bg-charcoal")
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.body.classList.remove("bg-charcoal")
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleMarkerClick = (content: PopupContent) => {
    setPopupContent(content)
    setShowPopup(true)
  }

  const northAmericaContent: PopupContent = {
    title: "América del Norte | 60%",
    items: [
      "Sede en Wyoming, EE. UU.",
      "Operaciones importantes en Canadá (Saskatoon)",
      "Mercado principal para soluciones de IA",
      "Asociaciones clave con líderes de la industria, incluyendo la Fundación Clinton",
    ],
  }

  const latinAmericaContent: PopupContent = {
    title: "América Latina | 20%",
    items: [
      "Centro de innovación en Rosario, Argentina",
      "Centro operativo galardonado",
      "Soluciones de transporte pioneras",
      "Sede de iniciativas de desarrollo fundamentales",
    ],
  }

  const europeContent: PopupContent = {
    title: "Europa | 20%",
    items: [
      "Base de clientes empresariales en crecimiento",
      "Asociaciones estratégicas para el desarrollo de IA",
      "Expansión de soluciones de automatización con IA",
      "Implementaciones empresariales personalizadas",
    ],
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-charcoal p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/solutions"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Soluciones</span>
          </Link>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">
            Nuestra Huella Global
          </h1>
          <div className="w-64 h-1 mx-auto bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
        </div>
        <div className="relative w-full max-w-6xl aspect-[2/1]">
          <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-100"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TvZzkyzaPuabVJVgxcUPpiM18dFZju.png)",
            }}
            role="img"
            aria-label="Visualización del mapa mundial hecha de puntos azules"
          />
          <GeoMarker
            country="US"
            top="38%"
            left="23%"
            color="emerald"
            onClick={() => handleMarkerClick(northAmericaContent)}
          />
          <GeoMarker
            country="Brazil"
            top="68%"
            left="35%"
            color="amber"
            onClick={() => handleMarkerClick(latinAmericaContent)}
          />
          <GeoMarker country="UK" top="32%" left="47%" color="rose" onClick={() => handleMarkerClick(europeContent)} />
          {showPopup && popupContent && (
            <div
              ref={popupRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10 max-w-sm"
            >
              <h2 className="text-xl font-bold mb-2">{popupContent.title}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {popupContent.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/projects" className="inline-block">
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

function GeoMarker({
  country,
  top,
  left,
  color,
  onClick,
}: {
  country: string
  top: string
  left: string
  color: string
  onClick?: () => void
}) {
  return (
    <div
      className="absolute w-8 h-8 cursor-pointer"
      style={{ top, left }}
      aria-label={`Marcador geográfico para ${country}`}
      onClick={onClick}
    >
      <div className={`absolute w-full h-full bg-${color}-500 rounded-full opacity-75 animate-ping`} />
      <div className={`absolute w-full h-full bg-${color}-500 rounded-full animate-pulse`} />
      <div className={`absolute w-full h-full bg-${color}-500 rounded-full animate-ripple`} />
    </div>
  )
}


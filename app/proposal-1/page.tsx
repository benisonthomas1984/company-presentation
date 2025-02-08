"use client"

import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaExclamationTriangle } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Back button */}
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link
          href="/proposal"
          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Propuesta</span>
        </Link>
      </div>
      <Resume />
      <div className="mt-12 flex justify-center">
        <Link href="/proposal-2" className="inline-block">
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

function Resume() {
  return (
    <motion.div
      className="max-w-4xl mx-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-4 right-4 flex flex-col items-end">
        <div className="bg-gold text-gray-900 px-3 py-1 rounded-full font-semibold mb-2">US$1200/mes</div>
        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Propuesta</div>
      </div>
      <header className="bg-gray-700 p-6 flex flex-col md:flex-row items-center gap-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shoppias%20White%20copy-xE8DJDI5USlph47XUa7KyFH0MHhNhe.png"
          alt="Desarrollador Full Stack"
          width={120}
          height={120}
          className="rounded-full border-4 border-gold"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gold to-amber-300 text-transparent bg-clip-text">
            Desarrollador Full Stack
          </h1>
          <p className="text-xl text-gray-300 mb-4">4+ años de experiencia</p>
          <div className="flex justify-center md:justify-start">
            <span className="flex items-center text-sm">
              <FaMapMarkerAlt className="mr-2" /> Indonesia
            </span>
          </div>
        </div>
      </header>

      <div className="p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Section title="Resumen Profesional">
            <p>
              Desarrollador Full Stack experimentado con 4 años de experiencia en desarrollo de aplicaciones móviles con
              Flutter, desarrollo backend con NodeJS y desarrollo frontend con AngularJS. Historial probado de entrega
              de soluciones escalables de alta calidad para diversos clientes.
            </p>
          </Section>

          <Section title="Experiencia Laboral">
            <ExperienceItem
              title="Desarrollador Full Stack Senior"
              company="Shoppias Labs, LLC"
              period="2021 - Presente"
              responsibilities={[
                "Desarrollo Frontend (Flutter y Angular):",
                "• Desarrolló aplicaciones móviles dinámicas, responsivas y escalables utilizando Flutter (Dart) para iOS y Android.",
                "• Creó Aplicaciones Web Progresivas (PWA) y Aplicaciones de Página Única (SPA) de alto rendimiento utilizando Angular.",
                "• Construyó componentes de UI reutilizables y mantuvo la gestión de estado utilizando Provider, Riverpod, Bloc o Redux en Flutter.",
                "• Integró APIs RESTful y WebSockets para actualizaciones de datos en tiempo real en aplicaciones móviles y web.",
                "• Implementó Material Design y animaciones personalizadas para mejorar la experiencia del usuario.",
                "Desarrollo Backend (Node.js, Express.js, NestJS):",
                "• Diseñó y desarrolló APIs RESTful y GraphQL escalables, seguras y de alto rendimiento utilizando Node.js (Express/NestJS).",
                "• Gestionó la autenticación y autorización de usuarios utilizando JWT, OAuth2, Firebase Authentication y Passport.js.",
                "• Trabajó con MongoDB, Firebase Firestore, PostgreSQL o MySQL para almacenamiento de datos y optimizó consultas de base de datos.",
                "• Desarrolló microservicios y funciones serverless para un procesamiento backend eficiente.",
              ]}
            />
          </Section>
        </div>

        <div className="space-y-6">
          <Section title="Habilidades">
            <SkillList
              skills={[
                "Flutter",
                "NodeJS",
                "AngularJS",
                "JavaScript",
                "TypeScript",
                "Dart",
                "APIs RESTful",
                "SQL",
                "NoSQL",
                "Git",
                "Agile/Scrum",
              ]}
            />
          </Section>

          <Section title="Educación">
            <EducationItem degree="Maestría en Ciencias de la Computación" institution="" year="2018" />
          </Section>

          <Section title="Idiomas">
            <p>Inglés (Competente), Indonesio (Nativo)</p>
          </Section>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-900 p-4 rounded-r-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 flex items-center">
            <FaExclamationTriangle className="mr-2 text-amber-500" />
            Condiciones del Desarrollador
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Si el desarrollador se considera insatisfactorio, lo reemplazaremos con un nuevo desarrollador en un plazo
              de 1.5 semanas. Este reemplazo se realizará si el desarrollador actual no cumple con sus requisitos.
            </li>
            <li>Debe proporcionar documentación completa al desarrollador para cualquier tarea de desarrollo.</li>
            <li>El canal de comunicación principal será Slack, asegurando interacciones eficientes y oportunas.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3 text-gold">{title}</h2>
      {children}
    </section>
  )
}

function ExperienceItem({ title, company, period, responsibilities }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gold">{company}</p>
      <p className="text-sm text-gray-400 mb-2">{period}</p>
      <ul className="space-y-2 text-sm">
        {responsibilities.map((resp, index) => (
          <li key={index} className={resp.startsWith("•") ? "ml-4" : "font-semibold text-gold mt-4"}>
            {resp}
          </li>
        ))}
      </ul>
    </div>
  )
}

function EducationItem({ degree, institution, year }) {
  return (
    <div className="mb-2">
      <h3 className="text-lg font-semibold">{degree}</h3>
      <p className="text-gold">{institution}</p>
      <p className="text-sm text-gray-400">{year}</p>
    </div>
  )
}

function SkillList({ skills }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-700 text-sm px-2 py-1 rounded">
          {skill}
        </span>
      ))}
    </div>
  )
}


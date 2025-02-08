"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, Headphones, ArrowRight, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100 overflow-hidden">
      {/* Back button */}
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link
          href="/recognitions"
          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors bg-[#0f172a] bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Reconocimientos</span>
        </Link>
      </div>

      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f172a]" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 lg:py-32 pt-24"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
              >
                Equipo de
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Desarrollo
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-300 mb-8"
              >
                Eleva tu presencia digital con nuestro equipo experto en desarrollo Flutter.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link href="/proposal-1">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Nuestra Propuesta <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60"
                alt="Ilustración de desarrollo de aplicaciones móviles"
                width={600}
                height={600}
                className="relative z-10 mx-auto rounded-2xl shadow-2xl transform hover:rotate-3 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-16 text-center text-white"
          >
            Nuestra Experiencia
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aplicaciones Flutter Personalizadas",
                description: "Aplicaciones a medida que impulsan el crecimiento",
                icon: Code2,
                color: "from-blue-400 to-blue-600",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Estructura de Equipo Flexible",
                description: "Composición escalable para tus necesidades",
                icon: Users,
                color: "from-purple-400 to-purple-600",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Soporte Dedicado",
                description: "Gestión integral de proyectos",
                icon: Headphones,
                color: "from-pink-400 to-pink-600",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#ffffff0d] backdrop-blur-lg border-transparent overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-2xl mb-6 inline-block`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-200 text-lg">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 lg:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#1a2234] p-12 rounded-3xl relative z-10 shadow-2xl">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl font-medium mb-8 text-gray-200 leading-relaxed"
            >
              "Después de perder tiempo y dinero con tres equipos de desarrollo diferentes, estaba escéptico sobre
              encontrar el socio adecuado para nuestro proyecto de comercio electrónico. ¡Este equipo me demostró que
              estaba equivocado! Entregaron nuestra aplicación personalizada en solo 4 meses, con actualizaciones
              constantes que nos mantuvieron informados en cada paso del camino. Su experiencia y enfoque transparente
              convirtieron lo que parecía imposible en realidad. Ahora estamos felices de continuar trabajando con ellos
              como nuestro socio de desarrollo a largo plazo."
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/filemon-0tM34FB0MyFoL43tifAtOC475KuL9J.png"
                alt="CEO de Bitfy"
                width={80}
                height={80}
                className="rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-lg text-white">Filemón</p>
                <p className="text-gray-400">CEO, Bitfy</p>
                <p className="text-gray-400">México</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0f172a] py-10 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shoppias%20White%20copy-mF8Bw2yNh2roEn9eyfL6klGFu5C6OP.png"
                alt="Logo de Shoppias Labs LLC"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
              <span className="text-white text-xl font-bold">Shoppias Labs, LLC</span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shoppias Labs, LLC. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


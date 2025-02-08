"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Building2, Mail, MapPin, MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  const whatsappNumber = "+18605404520"
  const whatsappMessage = encodeURIComponent("Hola, me gustaría saber más sobre Shoppias Labs.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] relative">
      {/* Back button */}
      <div className="absolute top-0 left-0 z-50 p-4">
        <Link
          href="/proposal-3"
          className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors bg-[#1E293B] bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Propuesta 3</span>
        </Link>
      </div>

      <div className="text-center space-y-6 p-8 rounded-lg bg-[#1E293B] shadow-xl border border-gray-800">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shoppias%20White%20copy-y5ypNwITsH4mWrehjsndk4YWeBWCZo.png"
          alt="Logo de Shoppias Labs"
          width={200}
          height={200}
          className="mx-auto mb-8"
          priority
        />
        <h1 className="text-4xl font-bold text-yellow-400">¡Gracias!</h1>
        <p className="text-xl text-gray-300 max-w-md">
          Agradecemos su participación y esperamos que haya encontrado valiosa la presentación.
        </p>
        <div className="flex justify-center">
          <Button asChild className="bg-green-500 hover:bg-green-600">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contáctanos por WhatsApp
            </a>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Building2 className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Shoppias Labs, LLC</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>30 North Gould St, Sheridan, Wyoming, EE. UU.</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4 text-gray-500" />
              <a href="mailto:sales@shoppias.com" className="hover:text-yellow-400 transition-colors">
                sales@shoppias.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


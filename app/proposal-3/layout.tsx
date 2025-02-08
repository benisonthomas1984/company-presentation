import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Gerente de Proyecto - Propuesta",
  description: "Perfil del Gerente de Proyecto y Paquete de Comunicación Mejorada",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}


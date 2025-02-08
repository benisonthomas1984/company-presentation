import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Equipo Dedicado - Propuesta",
  description: "Paquete de Equipo de Desarrollo Especializado",
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


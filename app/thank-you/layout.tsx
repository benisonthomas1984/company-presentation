import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Gracias - Shoppias Labs",
  description: "Gracias por su interés en Shoppias Labs",
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


import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

export const myFont = localFont({
  src: "./aspekta/Aspekta-750.woff2",
  display: "swap",
  variable: "--font-aspekta",
  weight: "700",
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

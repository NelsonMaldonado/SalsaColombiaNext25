import { NextUIProvider } from "@nextui-org/react"
import LandingView from "@/landingView"

export default function Home() {
  return (
    <NextUIProvider>
      <LandingView />
    </NextUIProvider>
  )
}

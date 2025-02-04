import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Hero />
        <Separator className="my-8 md:my-12" />
        <Skills />
        <Separator className="my-8 md:my-12" />
        <Experience />
        <Separator className="my-8 md:my-12" />
        <Projects />
        <Separator className="my-8 md:my-12" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


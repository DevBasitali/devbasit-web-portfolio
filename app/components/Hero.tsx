import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-r from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col items-start gap-4">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4">
          Hi, I'm Basit Ali
          <br className="hidden sm:inline" />
          <span className="text-primary">Full Stack Developer</span>
          <br className="hidden lg:inline" />
          Specialized in MERN Stack
        </h1>
        <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground animate-fade-in-up">
          <span className="font-medium text-foreground">Crafting robust, scalable applications.</span>
          <br className="hidden md:inline" /> Let's build something extraordinary together!
        </p>
      </div>
      <div className="flex gap-4 mt-8">
        <Button asChild size="lg" className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <a href="#projects">
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  )
}


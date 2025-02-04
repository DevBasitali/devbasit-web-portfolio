import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Rentrush",
    description:
      "A comprehensive property rental management system streamlining the rental process for landlords and tenants.",
    link: "https://github.com/DevBasitali",
  },
  {
    title: "Travel Air",
    description: "An intuitive online flight booking platform offering seamless travel planning and ticket purchasing.",
    link: "https://github.com/DevBasitali",
  },
  {
    title: "Promptmania",
    description:
      "A creative platform for sharing and discovering AI prompts, fostering innovation in AI-assisted content creation.",
    link: "https://github.com/DevBasitali",
  },
  {
    title: "BlogMonkey",
    description:
      "A user-friendly blogging platform designed to simplify content creation and management for bloggers of all levels.",
    link: "https://github.com/DevBasitali",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-8 md:py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}


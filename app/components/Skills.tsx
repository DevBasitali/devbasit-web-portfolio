import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Laptop } from "lucide-react"

const skills = [
  {
    name: "Frontend Development",
    icon: Globe,
    description: "React, Next.js, Vue.js, .NET",
  },
  {
    name: "Backend Development",
    icon: Database,
    description: "Node.js, Express, Laravel",
  },
  {
    name: "Mobile Development",
    icon: Laptop,
    description: "React Native, Flutter",
  },
  {
    name: "Programming Languages",
    icon: Code,
    description: "JavaScript, Python, Java, C#, PHP",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardHeader>
              <skill.icon className="h-8 w-8 mb-2" />
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{skill.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


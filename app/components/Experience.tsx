import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Lead development of scalable web applications using React and Node.js.",
  },
  {
    title: "Software Developer",
    company: "Structures LTD Software House",
    period: "2021 - 2022",
    description: "Developed and maintained full-stack applications using various technologies.",
    projects: ["Rentrush - A property rental management system", "Travel Air - An online flight booking platform"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-8 md:py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">Experience</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {experiences.map((exp) => (
          <Card key={exp.title}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
              {exp.projects && (
                <div className="mt-2">
                  <strong>Key Projects:</strong>
                  <ul className="list-disc list-inside">
                    {exp.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


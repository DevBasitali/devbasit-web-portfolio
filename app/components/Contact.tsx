import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">Contact Me</h2>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Fill out the form below to send me a message.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="Your Email" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Textarea id="message" placeholder="Your Message" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button>Send Message</Button>
        </CardFooter>
      </Card>
    </section>
  )
}


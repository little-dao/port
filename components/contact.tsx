import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-gray-900">Contact Me</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <Card className="border-0 shadow-md h-full">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow-md h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gray-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">Waterloo, ON, Canada</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-gray-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">
                      <Link href="mailto:y578zhu@uwaterloo.ca" className="hover:underline">
                        y578zhu@uwaterloo.ca
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gray-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">
                      <Link href="tel:4167053940" className="hover:underline">
                        (416) 705-3940
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Linkedin className="h-5 w-5 text-gray-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-gray-600">
                      <Link href="https://linkedin.com/in/howard-zhu" className="hover:underline" target="_blank">
                        linkedin.com/in/howard-zhu
                      </Link>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


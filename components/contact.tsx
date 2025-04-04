import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="section-container bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 gradient-heading">
            Contact Me
          </h2>
        </div>
        <div className="bloomberg-section p-4">
          <div className="flex items-center mb-4 border-b border-amber-500/30 pb-2">
            <div className="text-xs text-amber-500 font-mono">CONTACT</div>
            <div className="ml-auto text-xs text-gray-400 font-mono">HOWARD ZHU | GET IN TOUCH</div>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <div className="border border-amber-500/20 bg-[#0D2544] p-4">
              <div className="border-b border-amber-500/20 pb-4 mb-4">
                <h3 className="text-amber-500 font-medium">Get In Touch</h3>
                <div className="text-gray-400 text-sm">
                  Fill out the form and I'll get back to you as soon as possible.
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-amber-500/20 bg-background focus:border-amber-500/50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-amber-500/20 bg-background focus:border-amber-500/50"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[120px] border-amber-500/20 bg-background focus:border-amber-500/50"
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-[#0D2544] font-medium">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="border border-amber-500/20 bg-[#0D2544] p-4">
              <div className="border-b border-amber-500/20 pb-4 mb-4">
                <h3 className="text-amber-500 font-medium">Contact Information</h3>
                <div className="text-gray-400 text-sm">Feel free to reach out through any of these channels.</div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-500/10 rounded-full border border-amber-500/20">
                    <MapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Location</h4>
                    <p className="text-gray-400">Waterloo, ON, Canada</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-500/10 rounded-full border border-amber-500/20">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <p className="text-gray-400">
                      <Link href="mailto:y578zhu@uwaterloo.ca" className="hover:underline text-amber-500">
                        y578zhu@uwaterloo.ca
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-500/10 rounded-full border border-amber-500/20">
                    <Phone className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <p className="text-gray-400">
                      <Link href="tel:4167053940" className="hover:underline text-amber-500">
                        (416) 705-3940
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-500/10 rounded-full border border-amber-500/20">
                    <Linkedin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">LinkedIn</h4>
                    <p className="text-gray-400">
                      <Link
                        href="https://linkedin.com/in/howard-zhu"
                        className="hover:underline text-amber-500"
                        target="_blank"
                      >
                        linkedin.com/in/howard-zhu
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


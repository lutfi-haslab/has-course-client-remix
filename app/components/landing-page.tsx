'use client'

import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { BookOpen, CheckCircle, GraduationCap, Users } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6" />
          <span className="sr-only">LearnHub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn Anything, Anytime, Anywhere
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover thousands of courses from expert instructors. Start learning today and unlock your potential.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Browse Courses</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Courses
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Web Development Bootcamp", description: "Learn full-stack web development", price: "$99.99" },
                { title: "Data Science Fundamentals", description: "Master the basics of data science", price: "$89.99" },
                { title: "Digital Marketing Mastery", description: "Become a digital marketing expert", price: "$79.99" },
              ].map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BookOpen className="w-12 h-12 mb-4" />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-2xl font-bold">{course.price}</span>
                    <Button>Enroll Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose LearnHub?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: BookOpen, title: "Wide Range of Courses", description: "Access thousands of courses in various subjects" },
                { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals and thought leaders" },
                { icon: CheckCircle, title: "Flexible Learning", description: "Study at your own pace, anytime and anywhere" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your Learning Journey Today
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join millions of learners and transform your career with LearnHub.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input type="email" placeholder="Enter your email" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 LearnHub. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
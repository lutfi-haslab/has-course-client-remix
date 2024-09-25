'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { BookOpen, Clock, Award, User } from "lucide-react"

export function CourseDetailComponent() {
  const courseContent = [
    {
      section: "Introduction to Web Development",
      lessons: [
        "What is Web Development?",
        "Setting Up Your Development Environment",
        "Introduction to HTML",
        "Introduction to CSS",
      ]
    },
    {
      section: "JavaScript Fundamentals",
      lessons: [
        "Variables and Data Types",
        "Control Structures",
        "Functions and Scope",
        "DOM Manipulation",
      ]
    },
    {
      section: "Advanced JavaScript",
      lessons: [
        "ES6+ Features",
        "Asynchronous JavaScript",
        "Working with APIs",
        "JavaScript Modules",
      ]
    },
    {
      section: "Introduction to React",
      lessons: [
        "React Basics",
        "Components and Props",
        "State and Lifecycle",
        "Hooks",
      ]
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">Web Development Bootcamp</h1>
          <p className="text-gray-600 mb-6">
            Master the art of web development with our comprehensive bootcamp. Learn everything from HTML and CSS to advanced JavaScript and React.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>80 hours</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>12 modules</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Certificate of completion</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
          <Accordion type="single" collapsible className="w-full">
            {courseContent.map((section, index) => (
              <AccordionItem value={`section-${index}`} key={index}>
                <AccordionTrigger>{section.section}</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="py-1">{lesson}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
              <CardDescription>Enroll now and start learning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">$99.99</p>
              <Button className="w-full mb-4">Enroll Now</Button>
              <p className="text-sm text-gray-500 mb-4">30-day money-back guarantee</p>
              <h3 className="font-semibold mb-2">This course includes:</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  80 hours of video content
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Certificate of completion
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Lifetime access
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Your Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Instructor"
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-500">Senior Web Developer</p>
                </div>
              </div>
              <p className="text-sm">
                John is a seasoned web developer with over 10 years of experience in the industry. He has worked with Fortune 500 companies and has a passion for teaching the next generation of developers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
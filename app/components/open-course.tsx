'use client'

import React, { useState } from 'react'
import { Button } from "~/components/ui/button"
import { Progress } from "~/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { ScrollArea } from "~/components/ui/scroll-area"
import { FileText, Video, BookOpen, CheckCircle } from "lucide-react"
import ReactMarkdown from 'react-markdown'

const courseContent = [
  {
    section: "Introduction to React",
    completed: true,
    lessons: [
      { title: "What is React?", type: "video", completed: true },
      { title: "Setting up your development environment", type: "pdf", completed: true },
      { title: "Your first React component", type: "markdown", completed: true },
    ]
  },
  {
    section: "React Fundamentals",
    completed: false,
    lessons: [
      { title: "JSX syntax", type: "video", completed: true },
      { title: "Props and State", type: "markdown", completed: false },
      { title: "Handling events", type: "pdf", completed: false },
    ]
  },
  {
    section: "Advanced React Concepts",
    completed: false,
    lessons: [
      { title: "Hooks in-depth", type: "video", completed: false },
      { title: "Context API", type: "markdown", completed: false },
      { title: "Performance optimization", type: "pdf", completed: false },
    ]
  }
]

const markdownContent = `
# Props and State in React

React components use props and state to manage data.

## Props

Props are read-only and are passed from parent to child components.

Example:
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

## State

State is mutable and is managed within a component.

Example:
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
`

export function OpenCourseComponent() {
  const [activeLesson, setActiveLesson] = useState(courseContent[0].lessons[0])
  const totalLessons = courseContent.reduce((acc, section) => acc + section.lessons.length, 0)
  const completedLessons = courseContent.reduce((acc, section) => 
    acc + section.lessons.filter(lesson => lesson.completed).length, 0)
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Progress value={progressPercentage} className="w-full" />
                <p className="text-sm text-gray-500 mt-2">{progressPercentage}% Complete</p>
              </div>
              <ScrollArea className="h-[60vh]">
                <Accordion type="single" collapsible className="w-full">
                  {courseContent.map((section, sectionIndex) => (
                    <AccordionItem value={`section-${sectionIndex}`} key={sectionIndex}>
                      <AccordionTrigger>
                        <div className="flex items-center">
                          {section.completed && <CheckCircle className="w-4 h-4 mr-2 text-green-500" />}
                          {section.section}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} 
                                className={`flex items-center cursor-pointer p-2 rounded ${activeLesson.title === lesson.title ? 'bg-gray-100' : ''}`}
                                onClick={() => setActiveLesson(lesson)}>
                              {lesson.type === 'video' && <Video className="w-4 h-4 mr-2" />}
                              {lesson.type === 'pdf' && <FileText className="w-4 h-4 mr-2" />}
                              {lesson.type === 'markdown' && <BookOpen className="w-4 h-4 mr-2" />}
                              <span className={lesson.completed ? 'line-through' : ''}>{lesson.title}</span>
                              {lesson.completed && <CheckCircle className="w-4 h-4 ml-2 text-green-500" />}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-2/3">
          <Card>
            <CardHeader>
              <CardTitle>{activeLesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={activeLesson.type} className="w-full">
                <TabsList>
                  <TabsTrigger value="video">Video</TabsTrigger>
                  <TabsTrigger value="pdf">PDF</TabsTrigger>
                  <TabsTrigger value="markdown">Reading</TabsTrigger>
                </TabsList>
                <TabsContent value="video">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </TabsContent>
                <TabsContent value="pdf">
                  <div className="bg-gray-100 p-4 rounded">
                    <p>PDF viewer would be embedded here. For this example, we're using a placeholder.</p>
                    <Button className="mt-4">Download PDF</Button>
                  </div>
                </TabsContent>
                <TabsContent value="markdown">
                  <ScrollArea className="h-[60vh]">
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <div className="mt-4 flex justify-between">
            <Button variant="outline">Previous Lesson</Button>
            <Button>Next Lesson</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
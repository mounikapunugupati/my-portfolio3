"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Database,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "education", "experience", "skills", "projects", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const skills = {
    programming: ["Java", "Python", "JavaScript", "HTML5", "CSS3"],
    frameworks: ["React", "Node.js", "Express.js", "MongoDB"],
    tools: ["GitHub", "Git", "VS Code", "Buildbox"],
    databases: ["SQL", "MongoDB"],
  }

  const projects = [
    {
      title: "ShopEZ – MERN Stack E-commerce",
      description:
        "Full-stack web application built with MongoDB, Express.js, React, and Node.js. Features include JWT authentication, payment integration, product catalog, and user management.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      link: "#",
    },
  ]

  const experiences = [
    {
      title: "Virtual Internship - Cybersecurity",
      company: "Palo Alto Networks",
      period: "2024",
      description:
        "Gained hands-on exposure to network security, threat detection, and cloud security fundamentals. Learned about modern cybersecurity practices and tools.",
      type: "internship",
    },
    {
      title: "Virtual Internship - Full-Stack Development",
      company: "SmartBridge",
      period: "2025",
      description:
        "Worked on MERN stack web application development including UI design, backend development, API integration, and database management.",
      type: "internship",
    },
  ]

  const achievements = [
    {
      title: "1st Place - Command Prompt Saga Competition",
      year: "2025",
      description:
        "Secured first place in Command Prompt Saga competition held at Seshadri Rao Gudlavalleru Engineering College, demonstrating advanced command-line proficiency and system administration skills.",
    },
    {
      title: "HackerRank 4-Star Achievement",
      year: "2024",
      description:
        "Earned 4-star rating on HackerRank platform demonstrating strong problem-solving and programming skills.",
    },
  ]

  const certifications = [
    "Game Development using Buildbox - Certificate of Completion",
    "Java Certification - HackerRank",
    "Full Stack Development - SmartBridge Educational",
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/95 border-gray-200"} backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Punugupati Mounika
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "education", "experience", "skills", "projects", "achievements", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {section === "experience" ? "Experience" : section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/mounika-punugupati-885b92366"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mounikapunugupati"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/mounika-profile.jpg"
                alt="Punugupati Mounika"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-white"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Punugupati Mounika
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              3rd Year Information Technology Student
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              Passionate about Full-Stack Development & Cybersecurity
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("contact")}
                style={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  padding: "12px 32px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1d4ed8"
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#2563eb"
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                Hire Me
              </button>
              <button
                onClick={() => window.open("#", "_blank")}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#2563eb",
                  padding: "12px 32px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  border: "2px solid #2563eb",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#2563eb"
                  e.currentTarget.style.color = "#ffffff"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff"
                  e.currentTarget.style.color = "#2563eb"
                }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <GraduationCap className="w-8 h-8 inline-block mr-3 text-blue-600" />
            Education
          </h2>
          <div className="grid gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  Bachelor of Technology in Information Technology
                </CardTitle>
                <CardDescription>Seashadri Rao Gudlavalleru Engineering College (JNTU Kakinada)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">2023 – 2027</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    CGPA: 8.35
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Intermediate (M.P.C)</CardTitle>
                <CardDescription>Nri Vidya Junior College, Guntur</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">2021 – 2023</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    97.1%
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Secondary School (SSC)</CardTitle>
                <CardDescription>Tirumula High School, Namasivaya Puram</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">2019 – 2021</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    98%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Briefcase className="w-8 h-8 inline-block mr-3 text-blue-600" />
            Experience
          </h2>
          <div className="grid gap-6 md:gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Code className="w-8 h-8 inline-block mr-3 text-blue-600" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Code className="w-5 h-5" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Wrench className="w-5 h-5" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Wrench className="w-5 h-5" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Database className="w-5 h-5" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Code className="w-8 h-8 inline-block mr-3 text-blue-600" />
            Projects
          </h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-blue-600">{project.title}</CardTitle>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Award className="w-8 h-8 inline-block mr-3 text-blue-600" />
            Achievements & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <Badge variant="secondary">{achievement.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Certifications</h3>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <Mail className="w-8 h-8 inline-block mr-3 text-blue-600" />
            Let's Connect
          </h2>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:mounikapunugupati08@gmail.com"
                  style={{
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    padding: "12px 32px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1d4ed8"
                    e.currentTarget.style.transform = "scale(1.05)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563eb"
                    e.currentTarget.style.transform = "scale(1)"
                  }}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/mounika-punugupati-885b92366"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#2563eb",
                    padding: "12px 32px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    border: "2px solid #2563eb",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563eb"
                    e.currentTarget.style.color = "#ffffff"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff"
                    e.currentTarget.style.color = "#2563eb"
                  }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mounikapunugupati"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#2563eb",
                    padding: "12px 32px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    border: "2px solid #2563eb",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563eb"
                    e.currentTarget.style.color = "#ffffff"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff"
                    e.currentTarget.style.color = "#2563eb"
                  }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">
            © 2025 Punugupati Mounika. All rights reserved. Designed with ❤️ by Punugupati Mounika
          </p>
        </div>
      </footer>
    </div>
  )
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Rohit Shinde
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A results-driven Automation and Manual Test Engineer with over 12+ years of expertise in enhancing software quality through comprehensive testing strategies. Specialized in UI automation testing, API automation testing, and Performance testing, leveraging tools such as Selenium WebDriver, Cypress, k6, TestNG, and Cucumber with Java and JavaScript.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => window.open("/resume.pdf")}>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Button variant="outline" onClick={() => window.open("https://github.com/rsrohit")}>
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="outline" onClick={() => window.open("https://www.linkedin.com/in/rohit-shinde-498a05a7")}>
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card className="w-64 h-64 overflow-hidden rounded-full">
            <CardContent className="p-0">
              <img
                src="/profile.jpeg"
                alt="Rohit Shinde"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin, Twitter } from "lucide-react";

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
              Your Name
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Senior Software Engineer specializing in frontend development with a passion for creating beautiful user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => window.open("/resume.pdf")}>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Button variant="outline" onClick={() => window.open("https://github.com")}>
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="outline" onClick={() => window.open("https://linkedin.com")}>
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
            <Button variant="outline" onClick={() => window.open("https://twitter.com")}>
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-0">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Professional headshot"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

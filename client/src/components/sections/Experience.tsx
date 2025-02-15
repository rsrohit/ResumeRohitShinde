import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    company: "Persistent Systems",
    role: "Software Engineer",
    period: "Aug 2021 - Present",
    description: "Working on a healthcare project using React.js, TypeScript and Node.js. Implementing new features, fixing bugs and improving application performance.",
    icon: FaLaptopCode,
  },
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    period: "Sept 2018 - Aug 2021",
    description: "Worked on multiple projects using Angular, React.js and Java. Developed and maintained web applications, collaborated with cross-functional teams.",
    icon: FaLaptopCode,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <exp.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">{exp.role}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
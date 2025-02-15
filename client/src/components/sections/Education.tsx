import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    school: "Stanford University",
    degree: "Master of Science in Computer Science",
    period: "2014 - 2016",
    description: "Specialized in Human-Computer Interaction and Web Technologies",
  },
  {
    school: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    period: "2010 - 2014",
    description: "Dean's List, Computer Science Student Association President",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{edu.school}</CardTitle>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">{edu.degree}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

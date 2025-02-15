import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa";

const experiences = [
  {
    company: "Google",
    role: "Senior Frontend Engineer",
    period: "2020 - Present",
    description: "Led the development of key features for Google Cloud Platform's web console.",
    icon: FaGoogle,
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    period: "2018 - 2020",
    description: "Developed and maintained core components of the Azure portal.",
    icon: FaMicrosoft,
  },
  {
    company: "Amazon",
    role: "Frontend Developer",
    period: "2016 - 2018",
    description: "Built responsive web applications for Amazon's retail platform.",
    icon: FaAmazon,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
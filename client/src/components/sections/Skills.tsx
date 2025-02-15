import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Test Automation": [
    "Cypress.io", "Selenium", "TestNG", "QTP/UFT", "JMeter", "K6"
  ],
  "Programming Languages": [
    "JavaScript", "Java", "Python", "TypeScript"
  ],
  "API Testing": [
    "Postman", "RestAssured", "API Integration Testing"
  ],
  "DevOps & Tools": [
    "GitHub Actions", "Jenkins", "SonarQube", "Docker"
  ],
  "Project Management": [
    "JIRA", "Confluence", "HP ALM", "Polarion", "Agile Methodologies"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
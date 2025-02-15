import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    company: "Globant India Pvt Ltd",
    role: "Senior Test Automation Engineer",
    period: "Dec 2020 - Present",
    description: [
      "Led QA efforts on MissionGraph project for Deloitte US (Dec 2020 - Jun 2024)",
      "Increased test coverage by 300% and automated coverage from 13% to 63%",
      "Implemented E2E and API testing using Cypress.io framework",
      "Set up GitHub Actions workflows for SonarQube analysis",
      "Automated load testing with Jenkins and K6",
      "Currently working on Partner Travel project for JPMorgan Chase"
    ],
    icon: FaLaptopCode,
  },
  {
    company: "Expleo Group",
    role: "QA Analyst",
    period: "May 2017 - Feb 2020",
    description: [
      "Worked on Siemens PLM Software project",
      "Developed automation scripts using Selenium and Java",
      "Implemented automated test cases using UFT for Java-based Windows applications",
      "Worked closely with development teams on defect resolution"
    ],
    icon: FaLaptopCode,
  },
  {
    company: "Yardi Software India Pvt Ltd",
    role: "Specialist QC - II",
    period: "Sep 2015 - May 2017",
    description: [
      "Tested property management applications for global clients",
      "Developed test cases and executed automation using TestNG",
      "Performed API testing using Postman and RestAssured",
      "Collaborated with US-based clients for requirement analysis"
    ],
    icon: FaLaptopCode,
  },
  {
    company: "Syntel Ltd",
    role: "Testing Engineer",
    period: "Jul 2012 - Sep 2015",
    description: [
      "Worked on FedEx Ground Team's Logistics and Shipping processing systems",
      "Developed automated scripts using QTP/UFT",
      "Executed regression testing and defect tracking in HP ALM",
      "Ensured compliance with industry standards"
    ],
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
                  <ul className="text-muted-foreground space-y-1 list-disc pl-4">
                    {Array.isArray(exp.description) ? (
                      exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li>{exp.description}</li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
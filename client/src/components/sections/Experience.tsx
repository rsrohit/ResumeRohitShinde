import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    company: "Globant India Pvt Ltd",
    role: "Senior Test Automation Engineer",
    period: "Dec 2020 - Present",
    projects: [
      {
        name: "Partner Travel - JPMorgan Chase",
        period: "Jul 2024 - Dec 2024",
        details: [
          "Ensured quality for Partner Travel applications supporting financial institutions like FIS and Mastercard.",
          "Used WebdriverIO with JavaScript for automation testing.",
          "Developed test plans and executed manual/automated testing.",
          "Maintained test documentation in JIRA and Confluence."
        ]
      },
      {
        name: "MissionGraph - Deloitte US",
        period: "Dec 2020 - Jun 2024",
        details: [
          "Led the QA efforts on the MissionGraph project, a robust big data ingestion and analytics platform developed for Deloitte.",
          "Spearheaded the implementation of automated software testing solutions, boosting test coverage by over 300% and elevating automated vs. manual coverage from 13% to 63%.",
          "Developed and maintained a suite of end-to-end (E2E) and API integration tests using the Cypress.io framework.",
          "Established seamless API integration with Cypress.io, GitHub, and Microsoft Teams.",
          "Devised robust workflows utilizing GitHub Actions for SonarQube analysis.",
          "Implemented hourly health check test runs for monitoring environment health.",
          "Automated scripted load tests using Jenkins and K6.",
          "Conducted comprehensive automated accessibility testing with Cypress-axe plugin.",
          "Led weekly QE meetings and provided technical mentorship.",
          "Pioneered quality engineering processes with a shift-left, agile approach."
        ]
      }
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
        <div className="grid gap-6">
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
                  {exp.projects ? (
                    <div className="space-y-6">
                      {exp.projects.map((project, i) => (
                        <div key={i} className="border-l-2 border-primary pl-4">
                          <h3 className="font-medium text-primary">{project.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{project.period}</p>
                          <ul className="text-muted-foreground space-y-1 list-disc pl-4">
                            {project.details.map((detail, j) => (
                              <li key={j}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="text-muted-foreground space-y-1 list-disc pl-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2022 - Present",
      description:
        "Lead the frontend development team in building a complex SaaS platform. Implemented modern React architecture with TypeScript and Tailwind CSS. Improved application performance by 40% through code optimization and lazy loading strategies.",
      achievements: [
        "Architected and implemented a component library used across multiple products",
        "Reduced build time by 60% by optimizing webpack configuration",
        "Mentored junior developers and established coding standards",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "Mar 2019 - Dec 2021",
      description:
        "Developed and maintained multiple web applications for clients in healthcare and finance sectors. Worked across the entire stack using React, Node.js, and MongoDB.",
      achievements: [
        "Built a telemedicine platform that served over 10,000 patients",
        "Implemented secure payment processing system with Stripe integration",
        "Reduced API response time by 50% through database optimization",
      ],
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "Jun 2017 - Feb 2019",
      description:
        "Created responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UIs and smooth interactions.",
      achievements: [
        "Developed 15+ client websites with modern technologies",
        "Implemented CI/CD pipelines that reduced deployment time by 70%",
        "Created reusable code templates that increased team productivity",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in the tech industry, where I've contributed to various projects and grown my skills
            as a developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-emerald-500 ml-3 pl-8 pb-2">
            {experiences.map((experience, index) => (
              <div key={index} className={`mb-12 ${index === experiences.length - 1 ? "" : ""}`}>
                <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-2 mt-2 border-4 border-white dark:border-gray-900"></div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1 sm:mt-0">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{experience.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{experience.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-600 dark:text-gray-400">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/resume.pdf"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience

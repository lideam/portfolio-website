const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3/SCSS", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "TypeScript", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Webpack", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Jest", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Figma", level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's a breakdown of my technical
            skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux",
              "Next.js",
              "Firebase",
              "AWS",
              "Vercel",
              "Netlify",
              "Material UI",
              "Styled Components",
              "Vite",
              "Storybook",
              "Cypress",
              "Postman",
              "Stripe",
              "Auth0",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

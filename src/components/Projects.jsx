import { GitHubIcon, ExternalLinkIcon } from "./Icons";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "TeleMedicine Platform",
      description:
        "A comprehensive telemedicine solution that connects patients with healthcare providers through secure video consultations. Features include appointment scheduling, medical record management, and prescription services.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "WebRTC",
        "Express",
        "Redux",
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Medimate App",
      description:
        "A medication reminder app designed to help users manage their prescriptions effortlessly. Features include customizable dosing schedules, notification alerts, medication history tracking, and user-friendly interfaces for adding and editing medications.",
      image:
        "https://images.pexels.com/photos/4492065/pexels-photo-4492065.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React Native",
        "Expo",
        "SQLite",
        "Local Notifications",
        "Tailwind CSS",
      ],
      liveLink: "https://example.com/medimate",
      githubLink: "https://github.com/your-username/medimate-app",
    },
    {
      title: "Demam Products",
      description:
        "A cosmetics e-commerce website offering a curated selection of beauty and skincare products. Built with an intuitive shopping experience, features include product categories, search and filter, shopping cart, secure checkout, and order history.",
      image: "/1.jpg",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Stripe API",
        "React Context",
        "Vercel",
      ],
      liveLink: "https://demam-products.com",
      githubLink: "https://github.com/your-username/demam-products",
    },
    {
      title: "Task Management Application",
      description:
        "A collaborative task management tool with features like task assignment, progress tracking, deadline notifications, and team collaboration tools.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem and demonstrates different aspects of my technical
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                  >
                    <ExternalLinkIcon className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                  >
                    <GitHubIcon className="w-5 h-5 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/your-username?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-700 text-white font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <GitHubIcon className="w-5 h-5 mr-2" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

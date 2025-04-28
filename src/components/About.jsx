import Image from "next/image";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Profile Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              <Image
                src="/Lidetu.jpg" // served from public/Lidetu.jpg
                alt="Lidetu Amare"
                width={256} // match your actual image size
                height={256}
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio and Details */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              I’m Lidetu Amare, an Information Technology Student
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Currently pursuing my Bachelor of Science in Information
              Technology at Bahir Dar University, I am passionate about
              leveraging technology to drive positive impact in healthcare and
              beyond. Through my studies and projects—such as developing a
              TeleMedicine platform for underserved Ethiopian communities—I have
              honed skills in both frontend and backend development using React,
              Node.js, and MongoDB.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              As a proactive learner, I thrive on taking on new challenges:
              securing network devices in Cisco Packet Tracer simulations,
              building full-stack applications, and exploring real-time
              communication features. I combine a strong academic foundation
              with hands-on experience to build elegant, user-centric solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Outside of coding, I enjoy contributing to open-source projects,
              sharing knowledge through tech writing, and collaborating with
              peers to drive innovation. I’m excited to continue growing as a
              developer and making a difference through thoughtful, accessible
              technology.
            </p>

            {/* Contact & Info */}
            <div className="flex flex-wrap gap-4">
              {/* Education */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Education
                  </h4>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    BSc IT, Bahir Dar University
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5.451C3 4.194 4.194 3 5.451 3h1.098c.674 0 1.319.27 1.785.745l1.184 1.184a2.62 2.62 0 012.392.77l1.683 1.683a2.62 2.62 0 01.77 2.392l-1.184 1.184c-.476.466-.745 1.111-.745 1.785v1.098C9 19.806 7.806 21 6.549 21H5.451C4.194 21 3 19.806 3 18.549v-1.098z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Phone
                  </h4>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    +251 988 538 747
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12l-4-4-4 4m0 0l4 4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </h4>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    lidetuamare19@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0v8m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Location
                  </h4>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    Bahir Dar, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/lideam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/lidetuamare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/AmLidetu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

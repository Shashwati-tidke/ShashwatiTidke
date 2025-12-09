import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Python",
  ];

  const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "C"];

  return (
    <section id="about" className="flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-left">
          {/* SECTION TITLE */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* ABOUT ME CARD */}
          <div className="rounded-xl p-8 border border-white/10 bg-[#0d0d0d] hover:-translate-y-1 transition-all text-left">
            <p className="text-gray-300 mb-6">
              Developer with strong foundations in software engineering, system
              automation and full-stack development, focused on delivering clean,
              optimized solutions.
            </p>

            {/* SKILLS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FRONTEND */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-left">
                <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-start">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-center px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BACKEND */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-left">
                <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
                <div className="flex flex-wrap gap-2 justify-start">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-center px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROGRAMMING LANGUAGES */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2 text-left">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2 justify-start">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-center px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Education
            </h3>
            <div id="education" className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-xl bg-[#0d0d0d] border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all text-left">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-100 mb-1">
                    Vishwakarma Institute of Technology, Pune
                  </h2>
                  <p className="text-gray-300">B.Tech in Computer Engineering</p>
                  <p className="text-gray-400 text-sm mt-1">CPI: 8.92/10</p>
                  <p className="text-gray-500 text-sm">2018 – 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Work Experience
            </h3>
            <div id="experience" className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-xl bg-[#0d0d0d] border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all text-left">
                <div className="space-y-10">
                  {/* Kyndryl – Data Role */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100">
                      Kyndryl Solutions, Bangalore — Senior Associate
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">Jun 2024 – Oct 2024</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 pl-0">
                      <li>Analyzed large datasets to generate insights.</li>
                      <li>Used Kibana, Elastic, Logstash, SQL, Python, Excel.</li>
                      <li>Developed dashboards for strategic decisions.</li>
                      <li>Ensured high data accuracy and validation.</li>
                    </ul>
                  </div>

                  {/* Kyndryl – IAM Role */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100">
                      Kyndryl Solutions, Bangalore — Senior Associate
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">Aug 2022 – Aug 2024</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 pl-0">
                      <li>Managed User Identity & Access in Linux environments.</li>
                      <li>Worked with Active Directory, Azure, EMC.</li>
                      <li>Performed QA for business continuity.</li>
                      <li>Automated tasks via Python & Power Automate.</li>
                      <li>Tools: ServiceNow, Quest ARS, Azure, AD, Exchange, O365.</li>
                    </ul>
                  </div>

                  {/* Emerson – Internship */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100">
                      Emerson Automation Solutions, Pune — Web Developer Intern
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">Aug 2021 – Jan 2022</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 pl-0">
                      <li>Designed Configurator Health Checkup Tool.</li>
                      <li>Built real-time dashboard using global server data.</li>
                      <li>Tech: Java, HTML, CSS, JavaScript, SQL.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

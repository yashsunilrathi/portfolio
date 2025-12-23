const projectsData = [
  {
    title: "Eye Disease Detection using AI/ML",
    description:
      "An AI-based system that detects eye diseases from retinal images using CNN models to support early and accurate diagnosis.",
    tech: ["Python", "CNN", "DenseNet121","ResNet50","Inception V3", "Flask"],
    github: "https://github.com/yashsunilrathi/eye-disease-detection",
  },
  {
    title: "MockMate – AI Mock Exam Generator",
    description:
      "A full-stack AI application that generates mock exam papers using LLaMA, helping students practice with AI-generated questions.",
    tech: ["React", "Node.js", "MongoDB", "LLaMA"],
    github: "https://github.com/yashsunilrathi/MockMate",
  },
  {
    title: "FarmGPT – Smart Fertilizer Advisory System",
    description:
      "An AI-powered system that provides fertilizer and crop recommendations based on soil data, weather conditions and crop type.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yashsunilrathi/FarmGpt",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-700 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Source Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const projectsData = [
  {
    title: "Eye Disease Detection using AI/ML",
    description:
      "An AI-based system that detects eye diseases from retinal images using CNN models. The system helps in early diagnosis and improves accuracy using deep learning.",
    tech: ["Python", "CNN", "Machine Learning", "Flask"],
    github: "#",
    live: "#",
  },
  {
    title: "MockVerse – AI Mock Exam Generator",
    description:
      "A full-stack AI application that generates mock exam papers using LLaMA. It supports automated question generation and evaluation.",
    tech: ["React", "Node.js", "MongoDB", "LLaMA", "CI/CD"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
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

              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
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

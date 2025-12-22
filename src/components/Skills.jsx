const skillsData = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "AI / ML",
    skills: ["Python", "Machine Learning", "CNN", "Data Analysis"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 p-6 rounded-lg text-center hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2 text-gray-400">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

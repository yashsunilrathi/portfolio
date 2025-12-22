const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          I am a B.Tech Computer Engineering student with a strong interest in
          Full Stack Development and AI/ML. I enjoy building real-world
          applications using the MERN stack and applying machine learning to
          solve practical problems. I focus on writing clean, scalable code and
          continuously improving my technical skills.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400">Education</h3>
            <p className="mt-2 text-gray-400">
              B.Tech in Computer Engineering
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400">Focus</h3>
            <p className="mt-2 text-gray-400">
              MERN Stack & AI/ML Projects
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400">Goal</h3>
            <p className="mt-2 text-gray-400">
              Build scalable software & grow as an engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

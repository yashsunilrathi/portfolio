const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6"
    >
      <div className="max-w-4xl">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-400">Yash Rathi</span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Building practical software solutions with code and intelligence
        </p>

        {/* UNIQUE VALUE (not repeated anywhere) */}
        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
          I approach software development with a strong focus on problem
          understanding, logical thinking and real-world impact. My interest
          lies in developing systems that are reliable, scalable and useful
          beyond academic use cases.
        </p>

        {/* What you are looking for */}
        <div className="mt-6 text-gray-400 text-lg">
          <p>
             <span className="text-gray-300">Currently seeking:</span>{" "}
            Software Development / Full Stack / AI-ML roles
          </p>
        </div>

        {/* Actions */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded font-medium"
          >
            Explore My Work
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-blue-400 px-6 py-3 rounded font-medium"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

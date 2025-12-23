const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:yashsunilrathi@gmail.com";
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-8">
          Interested in working together or have any questions?
          Feel free to reach out.
        </p>

        <div className="space-y-4 text-lg">
          {/* EMAIL */}
          <p className="flex justify-center items-center gap-2">
            📧
            <button
              onClick={handleEmailClick}
              className="text-blue-400 hover:underline"
            >
              yashsunilrathi@gmail.com
            </button>
          </p>

          {/* GITHUB */}
          <p className="flex justify-center items-center gap-2">
            🔗
            <a
              href="https://github.com/yashsunilrathi"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/yashsunilrathi
            </a>
          </p>

          {/* LINKEDIN */}
          <p className="flex justify-center items-center gap-2">
            💼
            <a
              href="https://www.linkedin.com/in/yash-rathi-10a781262/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/yash-rathi-10a781262
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

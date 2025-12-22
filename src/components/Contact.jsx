const Contact = () => {
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
          <p>
            📧 Email:{" "}
            <a
              href="mailto:yashrathi@email.com"
              className="text-blue-400 hover:underline"
            >
              yashrathi@email.com
            </a>
          </p>

          <p>
            🔗 GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/yourusername
            </a>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

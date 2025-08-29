export default function Certificates() {
  const certificates = [
    {
      title: "Quality Assurance Engineer",
      issuer: "Purwadhika Digital Technology School",
      date: "Jun – Aug 2025",
      link: "",
    },
    // {
    //   title: "Software Testing Fundamentals",
    //   issuer: "Coursera",
    //   date: "2025",
    //   // link: null  // contoh kalau ga ada link
    // },
    // {
    //   title: "Automation Testing with Selenium",
    //   issuer: "Udemy",
    //   date: "2025",
    //   link: "https://example.com/certificate-udemy.pdf",
    // },
  ];

  return (
    <section id="certificates" className="">
      <div className="container">
        <h2 className="text-lg md:text-lg font-bold mb-6">
          Certificates & Training
        </h2>
        <ul className="space-y-4">
          {certificates.map((cert, idx) => {
            const content = (
              <>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 
                               hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <span className="font-medium">{cert.issuer}</span> • {cert.date}
                </p>
                {cert.link && (
                  <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    View Certificate
                  </span>
                )}
              </>
            );

            return (
              <li
                key={idx}
                className="p-5 rounded-xl border border-gray-200 dark:border-gray-700
                           bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                           hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500
                           transition-all duration-300"
              >
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

'use client';

export default function CoursesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-900 dark:to-green-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-green-100">
            Comprehensive programs designed for career excellence
          </p>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Web Development",
                duration: "6 Months",
                level: "Beginner to Intermediate",
                price: "₹ 25,000",
                topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
              },
              {
                title: "Mobile App Development",
                duration: "4 Months",
                level: "Intermediate",
                price: "₹ 20,000",
                topics: ["React Native", "Flutter", "API Integration", "UI/UX"],
              },
              {
                title: "Cloud & DevOps Masterclass",
                duration: "3 Months",
                level: "Advanced",
                price: "₹ 30,000",
                topics: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
              },
              {
                title: "Data Science & ML",
                duration: "5 Months",
                level: "Intermediate to Advanced",
                price: "₹ 28,000",
                topics: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
              },
              {
                title: "UI/UX Design Professional",
                duration: "4 Months",
                level: "Beginner",
                price: "₹ 18,000",
                topics: ["Figma", "Wireframing", "Prototyping", "User Research"],
              },
              {
                title: "Database Administration",
                duration: "3 Months",
                level: "Intermediate",
                price: "₹ 22,000",
                topics: ["SQL", "PostgreSQL", "MySQL", "Database Design"],
              },
              {
                title: "Python Programming",
                duration: "2 Months",
                level: "Beginner",
                price: "₹ 15,000",
                topics: ["Python Basics", "OOP", "Libraries", "Projects"],
              },
              {
                title: "Digital Marketing Fundamentals",
                duration: "3 Months",
                level: "Beginner",
                price: "₹ 16,000",
                topics: ["SEO", "SEM", "Social Media", "Email Marketing"],
              },
              {
                title: "Cybersecurity Essentials",
                duration: "4 Months",
                level: "Intermediate",
                price: "₹ 26,000",
                topics: ["Network Security", "Encryption", "Ethical Hacking"],
              },
            ].map((course, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Level:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {course.level}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Price:</span>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {course.price}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 border-t pt-6">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Topics Covered:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Can't find your course?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Contact us to customize a course based on your requirements
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

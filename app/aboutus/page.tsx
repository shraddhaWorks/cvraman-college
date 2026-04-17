'use client';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About CVRT College</h1>
          <p className="text-xl text-blue-100">
            Pioneering Education Excellence Since 2015
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-8 mb-4">
                At CVRT College, our mission is to provide world-class education that empowers students to become industry leaders and innovative problem-solvers. We believe in combining theoretical knowledge with practical skills to create professionals ready for the challenges of today's competitive job market.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-8">
                Our faculty comprises experienced professionals who bring real-world insights into the classroom, ensuring that every student gains practical knowledge alongside their academic learning.
              </p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-8 h-72 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎓</div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Excellence in Education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "5000+", label: "Students Graduated" },
              { stat: "50+", label: "Courses Offered" },
              { stat: "95%", label: "Job Placement Rate" },
              { stat: "9+", label: "Years of Excellence" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {item.stat}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Rajesh Kumar", role: "Principal", icon: "👨‍💼" },
              { name: "Ms. Priya Sharma", role: "Academic Director", icon: "👩‍💼" },
              {
                name: "Mr. Amit Patel",
                role: "Director of Placements",
                icon: "👨‍💼",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

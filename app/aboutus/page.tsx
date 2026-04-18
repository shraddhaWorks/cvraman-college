'use client';
import Admissioncall from "@/components/common/admissioncall";
import Course from "@/components/common/course";
export default function AboutPage() {
  return (
    <div className="w-full">
      
      <section className="relative overflow-hidden  dark:bg-primary/[0.08] bg-primary/[0.08] pt-24 pb-20 lg:pt-15 lg:pb-20">
       
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight dark:text-slate-900 text-slate-900 mb-6 leading-tight">
                About <span className="text-primary">CVRT College</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Pioneering education excellence through innovation,
                bridging the gap between students and the global industry leaders.
              </p>
            </div>

            {/* Elegant Card - Clean Light Version */}
            <div className="">
              <div className="relative p-8 rounded-3xl bg-white dark:bg-white border border-slate-200 dark:border-slate-200 shadow-xl shadow-slate-200/50 dark:shadow-xl shadow-slate-200/50 overflow-hidden backdrop-blur-sm transition-all duration-300">
                <p className="text-slate-600 dark:text-slate-600 italic text-lg leading-relaxed relative z-10 font-sans">
                  "Our vision is to cultivate an environment where creativity meets technical precision, ensuring every student leaves with a global perspective."
                </p>

                <div className="mt-6 flex items-center gap-4 relative z-10">
                  <div className="h-10 w-1 bg-orange-500 rounded-full" />
                  <span className="text-slate-600 dark:text-slate-600 font-bold uppercase tracking-widest text-xs">
                    Academic Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Content */}
      <section className="bg-primary/[0.08] dark:bg-primary/[0.08]">
        <div className="max-w-7xl mx-auto px-6 ">
          {/* The Bordered Container */}
          <div className="relative border border-slate-200 bg-white dark:border-slate-200 rounded-[2.5rem] overflow-hidden bg-slate-50/30 dark:bg-slate-50/30 p-8 md:p-16 transition-colors duration-300">

            {/* Decorative Corner Accent - Adaptive Opacity */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/50 dark:bg-secondary/50 rounded-bl-full -mr-10 -mt-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

              {/* Text Content */}
              <div className="lg:col-span-7">
                <div className="inline-block px-4 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                    Our Purpose
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-900 mb-8 leading-tight font-heading">
                  Our <span className="text-primary">Mission</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-slate-600 dark:text-slate-600 text-lg md:text-xl leading-relaxed font-light font-sans">
                    At CVRT College, our mission is to provide world-class education that empowers students to become industry leaders and innovative problem-solvers.
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 text-lg leading-relaxed border-l-4 border-secondary pl-6 italic font-sans">
                    Our faculty comprises experienced professionals who bring real-world insights into the classroom, ensuring practical knowledge alongside academic learning.
                  </p>
                </div>
              </div>

              {/* Visual Element Side */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  {/* Glow Effect - Adjusts for Dark Theme */}
                  <div className="absolute inset-0 bg-secondary/20 dark:bg-secondary/20 blur-3xl rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative bg-white dark:bg-white border border-slate-200 dark:border-slate-200 rounded-3xl p-10 shadow-xl shadow-slate-200/50 dark:shadow-xl shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300">
                    <div className="w-24 h-24 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-5xl">
                      🎓
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-900 mb-2 font-heading">
                      Excellence in Education
                    </h3>
                    <p className="text-slate-500 dark:text-slate-500 text-sm tracking-wide uppercase font-sans">
                      Since 2015
                    </p>

                    {/* Progress Bar - Secondary Theme Color */}
                    <div className="w-full h-1 bg-slate-100 dark:bg-slate-100 mt-8 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-secondary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
     <section className="py-24 bg-primary/[0.08] dark:bg-primary/[0.08] transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Header with stylized underline */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-900 mb-4 font-heading tracking-tight">
        Success In <span className="text-primary">Figures</span>
      </h2>
      <div className="w-20 h-1 bg-secondary mx-auto rounded-full opacity-60" />
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { stat: "5000+", label: "Students Graduated", icon: "🎓" },
        { stat: "50+", label: "Courses Offered", icon: "📚" },
        { stat: "95%", label: "Job Placement Rate", icon: "💼" },
        { stat: "9+", label: "Years of Excellence", icon: "✨" },
      ].map((item, index) => (
        <div 
          key={index} 
          className="group relative p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-secondary/5"
        >
          {/* Subtle Icon Badge */}
          <div className="mb-4 text-2xl opacity-80 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>

          {/* Large Stat Number */}
          <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2 font-heading tracking-tighter">
            {item.stat}
          </div>

          {/* Label */}
          <p className="text-slate-600 dark:text-slate-400 font-medium font-sans text-sm uppercase tracking-widest">
            {item.label}
          </p>

          {/* Decorative Corner Glow (Visible on Hover) */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 dark:bg-secondary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
    <Admissioncall/>
  </div>
</section>

      {/* Team Section */}
     <section className="py-15 bg-primary/[0.08] dark:bg-primary/[0.08] transition-colors duration-300">
        <div className="max-w-7xl  mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:slate-900 mb-4 font-heading tracking-tight">
              Visionary <span className="text-primary">Leadership</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Dr. Rajesh Kumar", role: "Principal", initial: "RK" },
              { name: "Ms. Priya Sharma", role: "Academic Director", initial: "PS" },
              { name: "Mr. Amit Patel", role: "Placement Director", initial: "AP" },
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-200 bg-slate-50/50 bg-white/60 dark:bg-white/60 p-8 text-center transition-all duration-500 hover:-translate-y-2">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                  <div className="relative w-full h-full bg-white dark:bg-white border border-slate-200 dark:border-slate-200 rounded-2xl flex items-center justify-center text-xl font-bold text-secondary font-heading">
                    {member.initial}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-900 mb-1 font-heading">{member.name}</h3>
                <div className="inline-block px-3 py-1 rounded-md bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest mb-4">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>
      <Course/>
    </div>
  );
}

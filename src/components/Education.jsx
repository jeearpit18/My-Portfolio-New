import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section data-theme="light"
      id="education"
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:70px_70px]"
    >
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Academic foundation for systems thinking
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            {education.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white rounded-[2rem] border border-gray-200 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.07)]"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase">
                {education.duration}
              </span>
              <span className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase">
                CGPA {education.cgpa}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
              {education.degree}
            </h3>
            <p className="text-lg md:text-xl font-bold text-gray-700 mb-2">
              {education.institution}
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-bold mb-8">
              {education.location}
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              My coursework and project work are centered on software engineering fundamentals, backend systems, and production-minded infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-[#0a0a0a] text-white rounded-[2rem] p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold mb-3">
                Academic Snapshot
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-4xl font-black leading-none">{education.cgpa}</p>
                  <p className="text-white/60 text-sm mt-2">Current cumulative CGPA</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/80 font-semibold">{education.duration}</p>
                  <p className="text-white/50 text-sm mt-1">Degree timeline</p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-[#f8f8f8] rounded-[2rem] p-8 border border-gray-200 shadow-[0_20px_45px_rgba(0,0,0,0.05)]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-bold mb-4">
                Core Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

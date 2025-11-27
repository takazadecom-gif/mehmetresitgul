import { Briefcase } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { useEffect } from 'react';

function About() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.title = 'About Mehmet Reşit Gül - AI Automation Developer';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Mehmet Reşit Gül, a 17-year-old startup founder specializing in AI automation, n8n workflows, and e-commerce solutions. Based in Istanbul, Turkey.');
    }
  }, []);

  return (
    <section className="min-h-screen pt-20 sm:pt-32 pb-20 relative z-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          about me<span className="text-cyan-400">_</span>
        </h1>

        <div className={`backdrop-blur-md border rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl ${
          isDark
            ? 'bg-white/3 border-white/10'
            : 'bg-gray-800/3 border-gray-800/20'
        }`}>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <Briefcase className="text-cyan-400 mt-1 animate-slide-in stagger-1 flex-shrink-0" size={24} />
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300 animate-slide-in stagger-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>professional bio</h3>

              <p className={`mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-300 animate-slide-in stagger-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Hi, I'm Mehmet Reşit Gül. I'm a 17-year-old startup founder and AI automation developer.
              </p>

              <p className={`mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-300 animate-slide-in stagger-3 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I built Turkey's first and only talent exchange platform. I live in Istanbul, and I'm currently an 11th-grade student with three years of hands-on industry experience through continuous internships. Besides that, I build products, create n8n-based automation systems, and design workflows that help e-commerce brands grow their sales, reduce operational load, and automate their daily processes.
              </p>

              <p className={`mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-300 animate-slide-in stagger-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                My work sits at the intersection of artificial intelligence, no-code prototyping, and cognitive neuroscience. For my own projects and for the brands I work with, I build small but powerful micro-systems that speed up order flow, customer communication, data processing, and backend operations.
              </p>

              <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 animate-slide-in stagger-5 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I don't care about talking big. I care about building things that work.
                My philosophy is simple:{' '}
                <span className="text-cyan-400 font-semibold">
                  build, test, provide value, improve, repeat.
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

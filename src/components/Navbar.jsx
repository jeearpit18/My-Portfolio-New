import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-theme');
            if (theme) {
              setIsLightBg(theme === 'light');
            }
          }
        });
      },
      { rootMargin: '-10% 0px -90% 0px' }
    );

    const sections = document.querySelectorAll('section, footer');
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

  const textColor = isOpen ? 'text-white' : (isLightBg ? 'text-black' : 'text-white');
  const navBgClass = isOpen
    ? 'bg-[#ff2a2a] py-4'
    : isScrolled
      ? (isLightBg ? 'bg-white/90 py-4 shadow-sm backdrop-blur-md' : 'bg-transparent py-4')
      : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#home"
            className={`${textColor} text-2xl font-black tracking-tight whitespace-nowrap transition-colors duration-300`}
          >
            {personalInfo.brandName}
            <span className="text-red-500">.</span>
          </a>
        </div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${isLightBg ? 'text-gray-700 hover:text-black' : 'text-white/80 hover:text-white'} font-medium relative group transition-colors duration-300`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className={`px-6 py-2.5 rounded-full border font-semibold transition-all duration-300 backdrop-blur-md ${
              isLightBg 
                ? 'bg-black/5 border-black/20 text-black hover:bg-black/10 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]' 
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
            }`}
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${textColor} focus:outline-none p-2 transition-colors duration-300`}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[32rem] py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href={hireMeMailto}
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

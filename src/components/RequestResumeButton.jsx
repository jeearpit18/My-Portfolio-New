import { heroContent } from '../data/portfolioData';

const RequestResumeButton = () => {
  const isMailto = heroContent.ctaResume.href.startsWith('mailto:');
  
  return (
    <a
      href={heroContent.ctaResume.href}
      {...(!isMailto ? { download: true } : {})}
      className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      {heroContent.ctaResume.text}
    </a>
  );
};

export default RequestResumeButton;

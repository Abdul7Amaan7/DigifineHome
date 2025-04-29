import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const CurriculumSection = ({
  title = "Master's in ALL & DA Curriculum",
  subtitlePart1 = "Learn with a",
  subtitleHighlight = "World-Class Curriculum",
  paragraph = "Our Paragraph",
  curriculumItems,
  curriculumContent = [
    {
      content: [
        "The preparatory curriculum covers foundational topics...",
        {
          heading: "Topics Covered",
          items: [
            "Sets, Relations, and Functions",
            "Counting, Probability, and Combinatorics",
            "Vectors and Calculus",
            "Statistics and Problem Solving",
            "Introduction to Generative AI Landscape"
          ]
        }
      ]
    }
  ],
  tabTitlePattern = (index) => index === 0 ? "Prep Content" : `Trimester - ${index}`,
  buttonText = "Download Syllabus"
}) => {
  const generatedCurriculumItems = curriculumItems || curriculumContent.map((_, index) => ({
    id: index,
    title: tabTitlePattern(index),
    active: index === 0
  }));

  const [activeTab, setActiveTab] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(true);
  const prevTabRef = useRef(0);
  const tabRefs = useRef([]);

  useEffect(() => {
    setTransitionDirection(activeTab > prevTabRef.current ? 'left' : 'right');
    prevTabRef.current = activeTab;

    setIsAnimating(true);

    // Scroll the active tab into view (whether user clicked or it changed programmatically)
    tabRefs.current[activeTab]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    const timeout = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleNextTab = () => {
    setActiveTab((prev) => (prev + 1) % generatedCurriculumItems.length);
  };

  const handlePrevTab = () => {
    setActiveTab((prev) => (prev - 1 + generatedCurriculumItems.length) % generatedCurriculumItems.length);
  };

  return (
    <section id="Curriculum" className="relative">
      <div className="flex flex-col xs:px-5 xs:my-10 max-w-6xl w-full mx-auto md:my-10 md:!gap-8 xs:!gap-9  px-6 md:px-0">

        {/* Header */}
        <div className="flex flex-col justify-start items-start md:gap-0 xs:gap-2">
          <h2 className="font-semibold text-center text-sm text-greyscale-1 capitalize">
            {title}
          </h2>
          <div className="relative items-start justify-start">
            <p className="font-semibold text-4xl tracking-tight whitespace-break-spaces">
              {subtitlePart1}<br />
              <span className="text-primary-main">{subtitleHighlight}</span>
            </p>
          </div>
          <p className="text-base text-left mt-3">{paragraph}</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevTab}
              className="px-3 py-1 border rounded text-sm text-white bg-blue-500 hover:bg-blue-600 transition"
            >
              Prev
            </button>

            <div className="flex gap-7 overflow-x-auto pb-2 whitespace-nowrap scrollbar-hide">
              {generatedCurriculumItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (tabRefs.current[index] = el)}
                  className={`flex-shrink-0 min-w-[12rem] px-4 py-5 rounded-xl bg-white border cursor-pointer transition-all duration-200 relative ${
                    index === activeTab
                      ? 'border-primary-main shadow-md'
                      : 'border-greyscale-5 hover:border-greyscale-3'
                  }`}
                  role="tab"
                  aria-selected={index === activeTab}
                  tabIndex={0}
                  onClick={() => handleTabClick(index)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTabClick(index)}
                >
                  <p className={`text-base text-center line-clamp-2 ${
                    index === activeTab
                      ? 'text-primary-main font-medium'
                      : 'text-greyscale-1 font-normal'
                  }`}>
                    {item.title}
                  </p>
                  {index === activeTab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-main rounded-b-xl"></div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleNextTab}
              className="px-3 py-1 border rounded text-sm bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col relative overflow-hidden">
          <div className="mt-3 flex flex-col items-start w-full gap-12 p-12 rounded-3xl bg-white shadow-custom">
            <div
              className={`content-transition transition-all duration-300 ease-in-out transform ${
                transitionDirection === 'right' ? 'translate-x-2' : '-translate-x-2'
              } ${isAnimating ? 'opacity-0' : 'opacity-100 translate-x-0'}`}
            >
              {curriculumContent[activeTab]?.content?.map((section, index) =>
                typeof section === 'string' ? (
                  <p
                    key={index}
                    className="CertTheme__paragraph animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {section}
                  </p>
                ) : (
                  <div
                    key={index}
                    className="space-y-4 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <h4 className="CertTheme__h4">{section.heading}</h4>
                    <ul className="CertTheme__ul">
                      {section.items?.map((item, idx) => (
                        <li
                          key={idx}
                          className="CertTheme__listItem animate-fadeIn"
                          style={{ animationDelay: `${idx * 0.05 + index * 0.1 + 0.3}s` }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex flex-col w-full items-center mt-6">
          <button className="md:h-11 xs:h-11 xs:text-sm md:text-base justify-center items-center gap-2 inline-flex whitespace-nowrap bg-gradient-to-r from-cta-gradient-start to-cta-gradient-end rounded-lg shadow-cta text-black font-medium px-6 py-3.5 md:py-2.5 hover:opacity-90 transition-opacity transform hover:scale-105 duration-200">
            {buttonText}
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

CurriculumSection.propTypes = {
  title: PropTypes.string,
  subtitlePart1: PropTypes.string,
  subtitleHighlight: PropTypes.string,
  paragraph: PropTypes.string,
  curriculumItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      active: PropTypes.bool
    })
  ),
  curriculumContent: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            heading: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.string)
          })
        ])
      )
    })
  ),
  tabTitlePattern: PropTypes.func,
  buttonText: PropTypes.string
};

export default CurriculumSection;

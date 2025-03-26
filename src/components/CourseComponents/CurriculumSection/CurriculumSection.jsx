import React, { useState } from 'react';

const CurriculumSection = ({
  title = "Master’s in AI & DA Curriculum",
  subtitlePart1 = "Learn with a",
  subtitleHighlight = "World-Class Curriculum",
  curriculumItems = [
    { id: 0, title: "Prep Content", active: true },
    { id: 1, title: "Trimester - I" },
    { id: 2, title: "Trimester - II" },
    { id: 3, title: "Trimester - III" }
  ],
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
    },
    {
      content: [
        "Gain a comprehensive foundation in data science and machine learning...",
        {
          heading: "Topics Covered",
          items: [
            "Probability and Statistics - The Building Blocks of Data Science",
            "Linear Algebra and Calculus - The Building Blocks of Machine Learning",
            "Python Programming for Data Science and Machine Learning",
            "Data Analysis and Visualization for Insight Generation"
          ]
        }
      ]
    },
    {
      content: [
        "Develop expertise in machine learning, deep learning, and big data analytics...",
        {
          heading: "Topics Covered",
          items: [
            "Fundamentals of Supervised and Unsupervised Machine Learning",
            "Modern Deep Learning and its Applications",
            "Large Scale Analytics on Big Data",
            "Popular Analytics Tools in the Industry - Excel, Tableau, Power BI",
            "Structured Database Management with SQL"
          ]
        }
      ]
    },
    {
      content: [
        "Enhance your skills with advanced machine learning and modern generative AI applications...",
        {
          heading: "Topics Covered",
          items: [
            "Advanced Classical Machine Learning Models and Model Selection",
            "Introduction to Generative AI and its Applications",
            "Introduction to Machine Learning Operations or MLOps",
            "Choice of Industry-Oriented Domain-Based Capstone Project"
          ]
        }
      ]
    }
  ],
  buttonText = "Download Syllabus"
}) => {
  const [activeTab, setActiveTab] = useState(0);


  return (
    <section id="Curriculum" className="relative">
      <div className="flex flex-col xs:px-5 xs:my-10 max-w-6xl w-full mx-auto md:px-12 md:my-10 md:!gap-8 xs:!gap-9">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-2">
          <h2 className="font-semibold text-center text-sm text-greyscale-1 md:tracking-tight xs:tracking-tight md:mb-2 whitespace-nowrap capitalize">
            {title}
          </h2>
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2 ">
            <p className="font-semibold text-4xl tracking-tight gap-2 whitespace-break-spaces">
              {subtitlePart1}<br />
              <span className="text-primary-main">{subtitleHighlight}</span>
            </p>
          </div>
        </div>

        {/* Curriculum Tabs */}
        <div className="flex flex-col gap-10">
          <div className="flex gap-7">
            {curriculumItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col justify-center items-center w-48  relative gap-2 px-4 py-5 rounded-xl bg-white border cursor-pointer transition-colors duration-200 ${
                  index === activeTab ? 'border-primary-main' : 'border-greyscale-5 hover:border-greyscale-3'
                }`}
                role="tab"
                aria-selected={index === activeTab}
                tabIndex={0}
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveTab(index)}
              >
                <div className="h-12 overflow-hidden">
                  <div className="h-full flex items-center">
                    <div className="flex-1">
                      <p className={`text-base text-center tracking-tight line-clamp-2 ${
                        index === activeTab ? 'text-primary-main font-medium ' : 'text-greyscale-1 font-normal'
                      }`}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
                {index === activeTab && (
                  <div 
                    className="absolute z-10 -translate-x-1/2 -top-[3.5rem] w-0 h-0 border-x-[13px] border-b-[14px] md:border-x-[16px] md:border-b-[16px] border-x-transparent border-b-greyscale-white"
                    style={{ left: '50%' ,
                      display:'none'
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col relative">
          <div className="mt-3 flex flex-col justify-center items-start w-full relative gap-12 p-12 overflow-hidden rounded-3xl bg-white shadow-custom">
            <div className="flex self-stretch gap-12 md:relative">
              <div className="overflow-hidden max-h-80">
                {curriculumContent[activeTab]?.content?.map((section, index) => (
                  typeof section === 'string' ? (
                    <p key={index} className="CertTheme__paragraph">
                      {section}
                    </p>
                  ) : (
                    <div key={index} className="space-y-4">
                      <h4 className="CertTheme__h4">
                        {section.heading}
                      </h4>
                      <ul className="CertTheme__ul">
                        {section.items?.map((item, idx) => (
                          <li key={idx} className="CertTheme__listItem">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex flex-col w-full items-center">
          <button className="md:h-11 xs:h-11 xs:text-sm md:text-base justify-center items-center gap-2 inline-flex whitespace-nowrap bg-gradient-to-r from-cta-gradient-start to-cta-gradient-end rounded-lg shadow-cta text-black font-medium px-6 py-3.5 md:py-2.5 hover:opacity-90 transition-opacity">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
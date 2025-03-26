import React from "react";

const ComparePrograms = ({
  title = "How Our Program Compares",
  subtitlePart1 = "Why Is Our Program The",
  subtitleHighlight = "Best In The Market?",
  upGradFeatures = [
    "12-month accelerated program to get you job-ready faster",
    "500+ hours of comprehensive learning, including live sessions and recorded content.",
    "15+ industry-relevant projects in domains like finance, healthcare, and e-commerce.",
    "Training in 15+ tools, including Python, Power BI, Tableau, and Generative AI tools.",
    "Masters in AI and DS degree from JGU, recognized as an Institution of Eminence by the Government of India.",
    "High number of live sessions and personalized industry interactions for deeper learning and insights.",
    "Earn a complimentary Microsoft Certification to boost your professional profile.",
  ],
  otherCoursesFeatures = [
    "Traditional 24 months (2 years), delaying entry into the workforce.",
    "Fewer learning hours, often limited to recorded content.",
    "Limited capstone projects with narrow industry focus.",
    "Limited tools, often focused on basic programming and analytics.",
    "Limited recognition and accreditations.",
    "Fewer to no live sessions and limited opportunities for personalized industry engagement.",
    "No additional industry-recognized certifications.",
  ],
  button1Text = "Download Brochure",
  button2Text = "Talk to Career Expert",
}) => {
  return (
    <section id="Compare-Programs">
      <div className="flex flex-col xs:px-5 xs:my-10 max-w-6xl w-full mx-auto md:px-12 md:my-spacing20">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-2">
          <h2 className="font-semibold text-center text-sm text-greyscale-1 md:tracking-tight xs:tracking-tight md:mb-2 whitespace-nowrap capitalize">
            {title}
          </h2>
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
            <p className="font-semibold text-4xl tracking-tight gap-2 md:w-[716px] xs:w-full xs:tracking-tight whitespace-break-spaces">
              {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
            </p>
          </div>
        </div>

        {/* Gradient Background Circles */}
        <div className="relative md:max-w-1240 xs:w-full md:mb-0 xs:mb-0">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-96 md:h-96 -left-[10%] top-[1%] rotate-40"></div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-80 md:h-80 right-[0%] top-[1%] rotate-40"></div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-60 md:h-60 left-[2%] bottom-[5%] rotate-40"></div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-96 md:h-96 right-[3%] bottom-[2%] rotate-40"></div>

          {/* Comparison Cards */}
          <div className="flex justify-start items-start w-full relative md:mt-12">
            {/* upGrad Card */}
            <div className="flex flex-col justify-start items-start flex-grow overflow-hidden rounded-3xl bg-white border border-primary-main">
              <div className="flex justify-center items-center self-stretch h-20 relative overflow-hidden px-4 py-5 border-b border-greyscale-6 w-full rounded-t-3xl">
                <p className="text-xl font-medium text-left text-primary-main">upGrad</p>
              </div>
              {upGradFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-start self-stretch h-16 px-5 py-4 border-b border-greyscale-6"
                >
                  <div className="flex justify-start items-start self-stretch relative gap-2">
                    <i className="icon-like text-green-500 text-lg"></i>
                    <div className="flex justify-start items-start flex-grow relative gap-2">
                      <p className="font-medium flex-grow text-sm text-left text-greyscale-1">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Other Courses Card */}
            <div className="flex flex-col justify-start items-start w-[400px] overflow-hidden rounded-tr-3xl rounded-br-3xl bg-white border-t-0 border-b-0 border-l-0 border-r-0 border-greyscale-6 md:mt-6">
              <div className="flex justify-center h-16 items-center self-stretch relative overflow-hidden px-4 py-5 border-b border-greyscale-6">
                <p className="text-xl font-medium text-left text-greyscale-main">Other Courses</p>
              </div>
              {otherCoursesFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-start self-stretch h-16 px-5 py-4 border-b border-greyscale-6"
                >
                  <div className="flex justify-start items-start self-stretch relative gap-2">
                    <i className="icon-dislike text-greyscale-4 text-lg"></i>
                    <div className="flex justify-start items-start flex-grow relative gap-2">
                      <p className="font-medium flex-grow text-sm text-left text-greyscale-2">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex w-full mt-12 justify-center items-center gap-5">
          <button className="md:h-11 xs:h-11 xs:text-sm md:text-base justify-center items-center gap-2 inline-flex whitespace-nowrap bg-white rounded-lg border border-greyscale-4 text-greyscale-main font-medium px-6 py-3.5 md:py-2.5 w-[300px] hover:bg-greyscale-5 transition-colors">
            {button1Text}
          </button>
          <button className="md:h-11 xs:h-11 xs:text-sm md:text-base justify-center items-center gap-2 inline-flex whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg text-white font-medium px-6 py-3.5 md:py-2.5 w-[300px] hover:opacity-90 transition-opacity">
            {button2Text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparePrograms;
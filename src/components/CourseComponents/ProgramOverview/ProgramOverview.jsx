// import React from "react";

// const ProgramOverview = ({
//   titlePart1 = "Overview of",
//   titleHighlight = "Master's Degree in Artificial Intelligence and Data Science",
//   paragraphs = [
//     "Join India's first one-year Master's program in AI & Data Science...",
//   ],
//   highlights = [
//     {
//       title: "Hours of Learning",
//       content: "Engage in 500+ hours of learning through live sessions..."
//     },
//   ],
//   readMoreText = "Read More"
// }) => {
//   return (
//     <section className="md:max-w-1440 md:m-auto px-spacing2">
//       <div className="flex flex-col xs:px-spacing2 xs:my-spacing4 max-w-1440 max-w-6xl w-full mx-auto md:my-spacing16 rounded-2xl bg-greyscale-white shadow-custom xs:shadow-lg md:py-spacing8 md:px-spacing24 md:rounded-16 rounded-10 px-spacing2 py-3">
//         {/* Title Section - Made text more balanced on mobile */}
//         <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8">
//           <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-spacing8">
//             <h2 className="font-semibold text-3xl -tracking-0.44 gap-spacing8 md:text-heading3 xs:text-title2 md:-tracking-0.32 xs:-tracking-0.175 whitespace-break-spaces xs:leading-8 md:leading-normal">
//               {titlePart1} <span className="text-primary-main">{titleHighlight}</span>
//             </h2>
//           </div>
//         </div>

//         {/* Content Section - Improved mobile spacing and readability */}
//         <div className="md:text-bodyNormal xs:text-bodySmall md:pt-spacing4 xs:pt-spacing24 font-450 md:-tracking-0.16 xs:-tracking-0.14 content-widget xs:space-y-4 md:space-y-2">
//           <div className="line-clamp-4">
//             {paragraphs.map((para, index) => (
//               <p 
//                 key={index} 
//                 className="CertTheme__paragraph xs:mb-3 md:mb-2" 
//                 dir="ltr" 
//                 data-mode="standard"
//               >
//                 <span>{para}</span>
//               </p>
//             ))}

//             <ul className="CertTheme__ul xs:space-y-3 md:space-y-2">
//               {highlights.map((highlight, index) => (
//                 <li 
//                   key={index}
//                   value={index + 1}
//                   className="CertTheme__listItem xs:mt-3 md:mt-2"
//                 >
//                   <strong className="CertTheme__textBold font-semibold">
//                     {highlight.title}
//                   </strong>
//                   <span>: {highlight.content}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Read More - Better touch target on mobile */}
//           <div className="text-right mt-2">
//             <button className="md:text-buttonSmall xs:text-captionSmall font-450 text-primary-main underline md:-tracking-0.16 xs:-tracking-0.105 cursor-pointer xs:py-1 xs:px-2 md:p-0 hover:text-primary-dark transition-colors">
//               {readMoreText}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramOverview;

import React, { useState } from "react";

const ProgramOverview = ({
  titlePart1 = "Overview of",
  titleHighlight = "Master's Degree in Artificial Intelligence and Data Science",
  paragraphs = [
    "Join India's first one-year Master's program in AI & Data Science...",
  ],
  highlights = [
    {
      title: "Hours of Learning",
      content: "Engage in 500+ hours of learning through live sessions..."
    },
  ],
  readMoreText = "Read More",
  readLessText = "Read Less"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="md:max-w-1440 md:m-auto px-6 md:px-0">
      <div className="flex flex-col xs:px-spacing2 xs:my-spacing4 max-w-1440 max-w-6xl w-full mx-auto md:my-spacing16 rounded-2xl bg-greyscale-white shadow-custom xs:shadow-lg md:py-spacing8 md:px-spacing24 md:rounded-16 rounded-10 px-spacing2 py-3">
        {/* Title Section */}
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8">
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-spacing8">
            <h2 className="font-semibold text-3xl -tracking-0.44 gap-spacing8 md:text-heading3 xs:text-title2 md:-tracking-0.32 xs:-tracking-0.175 whitespace-break-spaces xs:leading-8 md:leading-normal">
              {titlePart1} <span className="text-primary-main">{titleHighlight}</span>
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:text-bodyNormal xs:text-bodySmall md:pt-spacing4 xs:pt-spacing24 font-450 md:-tracking-0.16 xs:-tracking-0.14 content-widget xs:space-y-4 md:space-y-2">
          <div className={isExpanded ? "" : "line-clamp-4"}>
            {paragraphs.map((para, index) => (
              <p 
                key={index} 
                className="CertTheme__paragraph xs:mb-3 md:mb-2" 
                dir="ltr" 
                data-mode="standard"
              >
                <span>{para}</span>
              </p>
            ))}

            <ul className="CertTheme__ul xs:space-y-3 md:space-y-2">
              {highlights.map((highlight, index) => (
                <li 
                  key={index}
                  value={index + 1}
                  className="CertTheme__listItem xs:mt-3 md:mt-2"
                >
                  <strong className="CertTheme__textBold font-semibold">
                    {highlight.title}
                  </strong>
                  <span>: {highlight.content}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Read More/Less Button */}
          <div className="text-right mt-2">
            <button 
              onClick={toggleExpand}
              className="md:text-buttonSmall xs:text-captionSmall font-450 text-primary-main underline md:-tracking-0.16 xs:-tracking-0.105 cursor-pointer xs:py-1 xs:px-2 md:p-0 hover:text-primary-dark transition-colors"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Collapse content" : "Expand content"}
            >
              {isExpanded ? readLessText : readMoreText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
// import React, { useState } from "react";
// import ProjectCard from "./ProjectCard";

// const ProjectsSection = () => {
//   const projects = [
//     {
//       imageSrc: "/images/Icons/job.png",
//       title: "Financial Credit Fraud Detection",
//       description:
//         "Build a credit card fraud detection model, perform cost-benefit analysis, and present key insights to stakeholders.",
//       skills: ["Data Understanding"],
//       additionalSkillsCount: 7,
//     },
//     {
//       imageSrc: "/images/Icons/job.png",
//       title: "Marketing and Retail Analytics",
//       description:
//         "Optimize product categories with Pareto analysis, market basket insights, and data visualization for improved sales and strategic decision-making.",
//       skills: ["Data Understanding"],
//       additionalSkillsCount: 5,
//     },
//     {
//       imageSrc: "/images/Icons/job.png",
//       title: "Ecommerce Analytics",
//       description:
//         "Identify revenue dips and high churn for a company, optimize marketing spends with a market mix model, and present strategic recommendations.",
//       skills: ["Data Understanding"],
//       additionalSkillsCount: 4,
//     },
//     {
//       imageSrc: "/images/Icons/job.png",
//       title: "Customer Sentiment Analysis and Product Recommendation",
//       description:
//         "Build a product recommendation system with sentiment analysis, using machine learning models, and deploy it for real-world application.",
//       skills: ["Data Understanding"],
//       additionalSkillsCount: 5,
//     },
//     {
//       imageSrc: "/images/Icons/job.png",
//       title: "MRI Data Enhancement for Healthcare Analytics",
//       description:
//         "Create a system to generate artificial MRI images with varying contrast levels to enhance diagnostic accuracy through multiple imaging perspectives.",
//       skills: ["Data Understanding"],
//       additionalSkillsCount: 4,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % (projects.length - 2)); // Show 3 cards at a time
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + (projects.length - 2)) % (projects.length - 2));
//   };

  

//   return (
//     <section id="Projects">
//       <div className="flex flex-col xs:px-spacing20 xs:my-spacing40 max-w-6xl w-full mx-auto md:px-spacing100 mt-20 mb-14">
//         <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8 max-w-730px">
//           <h2 className="font-semibold text-center text-sm text-title-all-caps-normal text-greyscale-1 md:-tracking-0.14 xs:-tracking-0.122 md:mb-spacing2 whitespace-nowrap capitalize">
//             Domain-Based Capstone Projects
//           </h2>
//           <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-spacing8">
//             <p className="font-semibold text-4xl -tracking-0.44 gap-spacing2 whitespace-break-spaces">
//               Learn <span className="text-primary-main">by Doing</span>
//             </p>
//           </div>
//           <p className="flex-grow-0 flex-shrink-0 xs:text-bodySmall md:text-bodyLarge text-greyscale-2 font-450 xs:-tracking-0.14 md:-tracking-0.2 mt-5">
//             Choose from five industry-relevant capstone projects to work on your area of interest
//           </p>
//         </div>
//         <div className="pt-spacing32">
//           <div className="flex justify-start items-center relative gap-spacing56 mb-4">
//             <div className="flex justify-start items-center">
//               <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-spacing24 p-spacing8 rounded-200 bg-system-fill-bg-accent-2">
//               <i className="fas fa-file-alt text-primary-main text-5xl md:leading-8 xs:text-icon-lg xs:leading-5"></i>
//               </div>
//               <div className="flex flex-col justify-start items-start relative">
//                 <p className="md:text-title1 xs:text-title3 font-semibold text-2xl text-left text-greyscale-main md:-tracking-0.24 xs:-tracking-0.157">5</p>
//                 <p className="md:text-bodySmall xs:text-captionSmall text-left text-greyscale-2 font-450 md:-tracking-0.16 xs:-tracking-0.105">
//                   Real-world domain-based capstone project choices
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-wrapper xs:pt-spacing36 relative">
//           <div className="slider-container overflow-hidden">
//             <div
//               className="slider-list flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 33.33}%)` }} // Adjust for 3 cards
//             >
//               {projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="slide flex-shrink-0 w-1/3 p-spacing4 h-full" // Each card takes 1/3 of the width
//                 >
//                   <ProjectCard {...project} />
//                 </div>
//               ))}
//             </div>
//            </div>
//           {/* <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-main text-white p-spacing12 rounded-full hover:bg-primary-dark transition-colors"
//           >
//             Previous
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-main text-white p-spacing12 rounded-full hover:bg-primary-dark transition-colors"
//           >
//             Next
//           </button> */}
//           {/* Previous Button with Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-primary-main text-white p-2 rounded-full hover:bg-primary-dark transition-colors"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           {/* Next Button with Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-primary-main text-white p-2 rounded-full hover:bg-primary-dark transition-colors"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      imageSrc: "/images/Icons/job.png",
      title: "Financial Credit Fraud Detection",
      description:
        "Build a credit card fraud detection model, perform cost-benefit analysis, and present key insights to stakeholders.",
      skills: ["Data Understanding"],
      additionalSkillsCount: 7,
    },
    {
      imageSrc: "/images/Icons/job.png",
      title: "Marketing and Retail Analytics",
      description:
        "Optimize product categories with Pareto analysis, market basket insights, and data visualization for improved sales and strategic decision-making.",
      skills: ["Data Understanding"],
      additionalSkillsCount: 5,
    },
    {
      imageSrc: "/images/Icons/job.png",
      title: "Ecommerce Analytics",
      description:
        "Identify revenue dips and high churn for a company, optimize marketing spends with a market mix model, and present strategic recommendations.",
      skills: ["Data Understanding"],
      additionalSkillsCount: 4,
    },
    {
      imageSrc: "/images/Icons/job.png",
      title: "Customer Sentiment Analysis and Product Recommendation",
      description:
        "Build a product recommendation system with sentiment analysis, using machine learning models, and deploy it for real-world application.",
      skills: ["Data Understanding"],
      additionalSkillsCount: 5,
    },
    {
      imageSrc: "/images/Icons/job.png",
      title: "MRI Data Enhancement for Healthcare Analytics",
      description:
        "Create a system to generate artificial MRI images with varying contrast levels to enhance diagnostic accuracy through multiple imaging perspectives.",
      skills: ["Data Understanding"],
      additionalSkillsCount: 4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length); // Wrap around to start after the last project
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length); // Wrap around to end when at the first project
  };

  return (
    <section id="Projects">
      <div className="flex flex-col xs:px-spacing20 xs:my-spacing40 max-w-6xl w-full mx-auto md:px-spacing100 mt-20 mb-14">
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8 max-w-730px">
          <h2 className="font-semibold text-center text-sm text-title-all-caps-normal text-greyscale-1 md:-tracking-0.14 xs:-tracking-0.122 md:mb-spacing2 whitespace-nowrap capitalize">
            Domain-Based Capstone Projects
          </h2>
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-spacing8">
            <p className="font-semibold text-4xl -tracking-0.44 gap-spacing2 whitespace-break-spaces">
              Learn <span className="text-primary-main">by Doing</span>
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 xs:text-bodySmall md:text-bodyLarge text-greyscale-2 font-450 xs:-tracking-0.14 md:-tracking-0.2 mt-5">
            Choose from five industry-relevant capstone projects to work on your area of interest
          </p>
        </div>
        <div className="pt-spacing32">
          <div className="flex justify-start items-center relative gap-spacing56 mb-4">
            <div className="flex justify-start items-center">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-spacing24 p-spacing8 rounded-200 bg-system-fill-bg-accent-2">
                <i className="fas fa-file-alt text-primary-main text-5xl md:leading-8 xs:text-icon-lg xs:leading-5"></i>
              </div>
              <div className="flex flex-col justify-start items-start relative">
                <p className="md:text-title1 xs:text-title3 font-semibold text-2xl text-left text-greyscale-main md:-tracking-0.24 xs:-tracking-0.157">5</p>
                <p className="md:text-bodySmall xs:text-captionSmall text-left text-greyscale-2 font-450 md:-tracking-0.16 xs:-tracking-0.105">
                  Real-world domain-based capstone project choices
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-wrapper xs:pt-spacing36 relative">
          <div className="slider-container overflow-hidden">
            <div
              className="slider-list flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Each card will take 100% of the container width
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="slide flex-shrink-0 w-full xs:w-full sm:w-full md:w-1/3 p-spacing4 h-full" // 100% width on mobile
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button with Arrow (Visible on Mobile and Desktop) */}
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-primary-main text-white p-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button with Arrow (Visible on Mobile and Desktop) */}
          <button
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-primary-main text-white p-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

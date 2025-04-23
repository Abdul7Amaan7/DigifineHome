
// import React, { useState } from "react";
// import FAQTab from "./FAQTab";
// import FAQItem from "./FAQItem";

// const FAQsSection = () => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqData = [
//     {
//       tabLabel: "Master’s in AI & Data Science Course Curriculum",
//       faqs: [
//         {
//           question: "What is the Master’s in AI & Data Science with upGrad?",
//           answer:
//             "This program is an engaging yet rigorous 12-month online program designed specifically for working professionals to develop practical knowledge and skills, establish a professional network, and accelerate entry into data science careers. The certification is awarded by JGU.",
//         },
//         {
//           question:
//             "Which topics are going to be covered as part of the Master’s in AI & Data Science program?",
//           answer:
//             "The curriculum is present on the website in the syllabus section. You can also download the brochure for more information.",
//         },
//         {
//           question: "What type of learning experience should I expect?",
//           answer:
//             "The content will be a mix of interactive recorded lectures from industry leaders as well as world-renowned faculty. Additionally, the program comprises live lectures or hangout sessions dedicated to solving your academic queries and reinforcing learning.",
//         },
//         {
//           question:
//             "Is a Degree in Master's of Science granted at the end of the program?",
//           answer:
//             "Post successful completion of the program, a certificate in Master’s of Science in Artificial Intelligence and Data Science would be granted from O P Jindal Global University.",
//         },
//       ],
//     },
//     {
//       tabLabel: "Time Commitment in Master’s in AI & Data Science Program",
//       faqs: [
//         {
//           question: "How much time do I need to dedicate weekly?",
//           answer:
//             "You should expect to dedicate around 10-12 hours per week to the program.",
//         },
//         {
//           question: "Is the program self-paced?",
//           answer:
//             "No, the program follows a structured schedule with deadlines for assignments and projects.",
//         },
//       ],
//     },
//     {
//       tabLabel: "Selection Criteria for MSc in AI & DS",
//       faqs: [
//         {
//           question: "What are the eligibility criteria?",
//           answer:
//             "Candidates must have a bachelor's degree with a minimum of 50% marks and relevant work experience.",
//         },
//         {
//           question: "Is there an entrance exam?",
//           answer:
//             "No, there is no entrance exam. Selection is based on your application and interview.",
//         },
//       ],
//     },
//     {
//       tabLabel: "Refunds",
//       faqs: [
//         {
//           question: "What is the refund policy?",
//           answer:
//             "Refunds are available within 7 days of enrollment, provided no course content has been accessed.",
//         },
//       ],
//     },
//   ];

//   const handleTabClick = (index) => {
//     setSelectedTab(index);
//     setOpenIndex(null); // Reset open FAQ when switching tabs
//   };

//   const handleFAQClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section id="FAQs">
//       <div className="flex flex-col xs:px-spacing20 max-w-6xl w-full mx-auto md:px-spacing205 py-28">
//         <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8">
//           <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-spacing8">
//             <h2 className="font-semibold text-4xl -tracking-0.44 gap-spacing8 whitespace-break-spaces">
//               Frequently Asked <span className="text-primary-main">Questions</span>
//             </h2>
//           </div>
//         </div>
//         <div className="relative">
//           <div className="pt-spacing16">
//             <div className="flex flex-col-reverse md:flex-row gap-10"> {/* Use flex column for mobile */}
//               <div className="md:w-[50%] sm:w-[100%]  flex flex-col gap-spacing4" role="tablist" aria-orientation="vertical">
//                 {faqData.map((tab, index) => (
//                   <FAQTab
//                     key={index}
//                     label={tab.tabLabel}
//                     isSelected={selectedTab === index}
//                     onClick={() => handleTabClick(index)}
//                   />
//                 ))}
//               </div>
//               <div className="w-full md:w-735px faq_section">
//                 <div className="outline-none" role="tabpanel" tabIndex="0">
//                   <div className="md:pl-spacing16">
//                     {faqData[selectedTab].faqs.map((faq, index) => (
//                       <FAQItem
//                         key={index}
//                         question={faq.question}
//                         answer={faq.answer}
//                         isOpen={openIndex === index}
//                         onClick={() => handleFAQClick(index)}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQsSection;

import React, { useState } from "react";
import PropTypes from "prop-types";
import FAQTab from "./FAQTab";
import FAQItem from "./FAQItem";

const FAQsSection = ({ faqData = [], sectionTitle = "Frequently Asked Questions" }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    setOpenIndex(null); // Reset open FAQ when switching tabs
  };

  const handleFAQClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQs">
      <div className="flex flex-col xs:px-spacing20 max-w-6xl w-full mx-auto md:px-spacing205 py-28">
        {/* Section Header */}
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8">
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-spacing8">
            <h2 className="font-semibold text-4xl -tracking-0.44 gap-spacing8 whitespace-break-spaces">
              {sectionTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary-main">{sectionTitle.split(" ").slice(-1)}</span>
            </h2>
          </div>
        </div>

        {/* Tabs and FAQ Items */}
        <div className="relative pt-spacing16">
          <div className="flex flex-col-reverse md:flex-row gap-10">
            {/* Tabs */}
            <div className="md:w-[50%] sm:w-[100%] flex flex-col gap-spacing4" role="tablist" aria-orientation="vertical">
              {faqData.map((tab, index) => (
                <FAQTab
                  key={index}
                  label={tab.tabLabel}
                  isSelected={selectedTab === index}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </div>

            {/* FAQs */}
            <div className="w-full md:w-[735px] faq_section">
              <div className="outline-none" role="tabpanel" tabIndex="0">
                <div className="md:pl-spacing16">
                  {faqData[selectedTab]?.faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index}
                      onClick={() => handleFAQClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ PropTypes
FAQsSection.propTypes = {
  sectionTitle: PropTypes.string,
  faqData: PropTypes.arrayOf(
    PropTypes.shape({
      tabLabel: PropTypes.string.isRequired,
      faqs: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default FAQsSection;

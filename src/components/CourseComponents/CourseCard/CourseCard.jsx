// import React from 'react';
// import PropTypes from 'prop-types';

// const CourseCard = ({
//   title,
//   highlightText,
//   description,
//   emi,
//   startDate,
//   duration,
//   appliedText,
//   contactNumber,
//   imageUrl,
// //   universityName
// }) => {
//   return (
//     <div className="flex items-center justify-center relative self-start -space-x-[70px] m-4">
//       {/* Left Content Section */}
//       <div className="relative z-[1] p-12 pr-[100px] w-[768px] h-[572px]  rounded-[40px] bg-white shadow-custom">
//         <div className="flex flex-col h-full justify-between ">
//           {/* Top Section */}
//           <div>
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F4FF]">
//                 <span className="text-[#046AED] text-sm font-medium">New Course</span>
//               </div>
//               <button className="text-2xl text-gray-500 hover:text-gray-700">
//                 <i className="ri-share-fill"></i>
//               </button>
//             </div>

//             <h1 className="text-[40px] leading-tight font-medium mb-6">
//               {title} <span className="text-[#046AED]">{highlightText}</span>
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">{description}</p>
//           </div>

//           {/* Stats Section */}
//           <div className="flex gap-14">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">EMI</p>
//               <p className="text-2xl font-medium bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
//                 {emi}
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Start Date</p>
//               <p className="text-2xl font-medium bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
//                 {startDate}
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Duration</p>
//               <p className="text-2xl font-medium bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
//                 {duration}
//               </p>
//             </div>
//           </div>

//           {/* Buttons Section */}
//           <div className="flex gap-4 mt-8">
//             <button className="w-full md:w-[260px] h-11 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
//               Apply Now
//             </button>
//             <button className="w-full md:w-[260px] h-11 bg-gradient-to-r from-[#046AED] to-[#0BABCE] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               Download Syllabus
//             </button>
//           </div>

//           {/* Footer Section */}
//           <div className="mt-6 flex items-center gap-2 text-[#046AED]">
//             <i className="ri-alarm-warning-line"></i>
//             <span className="text-sm">{appliedText}</span>
//           </div>

//           <div className="flex items-center gap-2 text-gray-600 mt-2">
//             <i className="ri-phone-line"></i>
//             <span className="text-sm">For enquiries call: {contactNumber}</span>
//           </div>
//         </div>
//       </div>

//       {/* Right Image Section */}
//       <div className="relative w-[550px] h-[572px] rounded-[40px] overflow-hidden ">
//         <img
//           src={imageUrl}
//           alt="University Campus"
//           className="w-full h-full object-cover"
//         />
//         {/* <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-black/30 px-4 py-2 rounded-full">
//           <p className="text-white text-sm text-center">{universityName}</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// CourseCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   highlightText: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   emi: PropTypes.string.isRequired,
//   startDate: PropTypes.string.isRequired,
//   duration: PropTypes.string.isRequired,
//   appliedText: PropTypes.string.isRequired,
//   contactNumber: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   universityName: PropTypes.string.isRequired,
// };

// export default CourseCard;

import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({
  title,
  highlightText,
  description,
  emi,
  startDate,
  duration,
  appliedText,
  contactNumber,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center relative md:-space-x-[70px] m-4">
      {/* Left Content Section */}
      <div className="relative z-[1] md:p-12 p-6 md:pr-[100px] w-full md:w-[768px] h-auto md:h-[572px] rounded-[40px] bg-white shadow-custom">
        <div className="flex flex-col h-full justify-between">
          {/* Top Section */}
          <div>
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#E8F4FF]">
                <span className="text-[#046AED] text-xs md:text-sm font-medium">New Course</span>
              </div>
              <button className="text-xl md:text-2xl text-gray-500 hover:text-gray-700">
                <i className="ri-share-fill"></i>
              </button>
            </div>

            <h1 className="text-3xl md:text-[40px] leading-tight font-medium mb-4 md:mb-6">
              {title} <span className="text-[#046AED]">{highlightText}</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">{description}</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:flex md:gap-14 gap-4 mb-6 md:mb-0">
            <div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">EMI</p>
              <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
                {emi}
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Start Date</p>
              <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
                {startDate}
              </p>
            </div>
            <div className="col-span-2 md:col-auto">
              <p className="text-xs md:text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
                {duration}
              </p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8">
            <button className="w-full h-11 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              Apply Now
            </button>
            <button className="w-full h-11 bg-gradient-to-r from-[#046AED] to-[#0BABCE] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              Download Syllabus
            </button>
          </div>

          {/* Footer Section */}
          <div className="mt-4 md:mt-6 flex items-center gap-2 text-[#046AED]">
            <i className="ri-alarm-warning-line text-sm md:text-base"></i>
            <span className="text-xs md:text-sm">{appliedText}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <i className="ri-phone-line text-sm md:text-base"></i>
            <span className="text-xs md:text-sm">For enquiries call: {contactNumber}</span>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full md:w-[550px] h-[300px] md:h-[572px] rounded-[40px] overflow-hidden mt-6 md:mt-0">
        <img
          src={imageUrl}
          alt="University Campus"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  highlightText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  emi: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  appliedText: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CourseCard;
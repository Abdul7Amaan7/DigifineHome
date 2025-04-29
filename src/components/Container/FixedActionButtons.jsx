// import React, { useState } from 'react';
// import CareerForm from './CareerForm';

// const FixedActionButtons = () => {
//   const [showBrochureModal, setShowBrochureModal] = useState(false);

//   const toggleBrochureModal = () => {
//     setShowBrochureModal(!showBrochureModal);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50">
//       {/* Call Us Button */}
//       <ActionButton
//         text="Call Us"
//         link="tel:8169004863"
//         bgColor="bg-blue-500"
//         hoverColor="hover:bg-blue-700"
//       />

//       {/* Download Brochure Button */}
//       <button
//         onClick={toggleBrochureModal}
//         className={`bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-full shadow-lg transform transition-all duration-300`}
//       >
//         Download Brochure
//       </button>

//       {/* Brochure Modal */}
//       {showBrochureModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="relative">
//             <CareerForm onClose={toggleBrochureModal} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Reusable ActionButton Component (for the call button)
// const ActionButton = ({ text, link, bgColor, hoverColor }) => (
//   <a
//     href={link}
//     className={`${bgColor} ${hoverColor} text-white py-2 px-6 rounded-full shadow-lg transform transition-all duration-300`}
//   >
//     {text}
//   </a>
// );

// export default FixedActionButtons;

import React, { useState } from 'react';
import CareerForm from './CareerForm';

const FixedActionButtons = () => {
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const toggleBrochureModal = () => {
    setShowBrochureModal(!showBrochureModal);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50">
      {/* Call Us Button */}
      <ActionButton
        text="Call Us"
        link="tel:8169004863"
        bgColor="bg-blue-500"
        hoverColor="hover:bg-blue-700"
      />

      {/* Download Brochure Button */}
      <button
        onClick={toggleBrochureModal}
        className={`bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-full shadow-lg transform transition-all duration-300`}
      >
        Download Brochure
      </button>

      {/* Brochure Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="relative p-6 rounded-lg shadow-xl max-w-md w-full">
            {/* Close button - now in FixedActionButtons */}
            <button
              onClick={toggleBrochureModal}
              className="absolute top-7 right-7 text-gray-500 hover:text-gray-700 z-50"
              aria-label="Close"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            {/* CareerForm component without passing onClose prop */}
            <CareerForm />
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable ActionButton Component (for the call button)
const ActionButton = ({ text, link, bgColor, hoverColor }) => (
  <a
    href={link}
    className={`${bgColor} ${hoverColor} text-white py-2 px-6 rounded-full shadow-lg transform transition-all duration-300`}
  >
    {text}
  </a>
);

export default FixedActionButtons;
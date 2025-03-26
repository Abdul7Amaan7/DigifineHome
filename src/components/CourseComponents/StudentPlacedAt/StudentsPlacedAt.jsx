// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const StudentsPlacedAt = () => {
//   const companies = [
//     { id: 1, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/9-2.webp", alt: "9-2" },
//     { id: 2, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/8-2.webp", alt: "8-2" },
//     { id: 3, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/7-2.webp", alt: "7-2" },
//     { id: 4, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/6-2.webp", alt: "6-2" },
//     { id: 5, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/5-2.webp", alt: "5-2" },
//     { id: 6, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/4.webp", alt: "4" },
//     { id: 7, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/3.webp", alt: "3" },
//     { id: 8, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/2.webp", alt: "2" },
//     { id: 9, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/1.webp", alt: "1" },
//   ];

//   return (
//     <section className="elementor-section elementor-top-section flex justify-center items-center">
//       <div className="elementor-container elementor-column-gap-default max-w-6xl">
//         {/* Heading and Description */}
//         <div className="elementor-column elementor-col-100">
//           <h3 className="elementor-heading-title text-center text-4xl font-semibold mb-4">
//             Our Students Placed At
//           </h3>
//           <p className="text-center text-sm text-greyscale-2 mb-8">
//             With Digifine Academy’s digital marketing courses with assured placement, our students have built successful careers at prominent companies in the industry!
//           </p>
//         </div>

//         {/* Companies Carousel */}
//         <div className="elementor-column elementor-col-100">
//           <Swiper
//             modules={[Autoplay]} // Removed Navigation module as it's no longer needed
//             spaceBetween={7}
//             slidesPerView={4}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1024: {
//                 slidesPerView: 4,
//               },
//             }}
//           >
//             {companies.map((company) => (
//               <SwiperSlide key={company.id}>
//                 <figure className="flex justify-center items-center">
//                   <img
//                     src={company.logo}
//                     alt={company.alt}
//                     className="w-full h-full object-contain"
//                     loading="lazy"
//                   />
//                 </figure>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Button */}
//         <div className="elementor-column elementor-col-100 flex justify-center mt-8">
//           <button className="elementor-button elementor-size-sm bg-primary-main text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
//             <span className="elementor-button-text">Know Course Fees</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentsPlacedAt;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const StudentsPlacedAt = () => {
  const companies = [
    { id: 1, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/9-2.webp", alt: "9-2" },
    { id: 2, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/8-2.webp", alt: "8-2" },
    { id: 3, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/7-2.webp", alt: "7-2" },
    { id: 4, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/6-2.webp", alt: "6-2" },
    { id: 5, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/5-2.webp", alt: "5-2" },
    { id: 6, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/4.webp", alt: "4" },
    { id: 7, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/3.webp", alt: "3" },
    { id: 8, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/2.webp", alt: "2" },
    { id: 9, logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/1.webp", alt: "1" },
  ];

  return (
    <section className="elementor-section elementor-top-section flex justify-center items-center">
      <div className="elementor-container elementor-column-gap-default max-w-6xl w-full mx-auto">
        {/* Heading and Description */}
        <div className="elementor-column elementor-col-100 text-center mb-8">
          <h3 className="elementor-heading-title text-4xl font-semibold mb-4">
            Our Students Placed At
          </h3>
          <p className="text-sm text-greyscale-2">
            With Digifine Academy’s digital marketing courses with assured placement, our students have built successful careers at prominent companies in the industry!
          </p>
        </div>

        {/* Companies Carousel */}
        <div className="elementor-column elementor-col-100">
          <Swiper
            modules={[Autoplay]} // Removed Navigation module as it's no longer needed
            spaceBetween={7}
            slidesPerView={4} // Default for desktop view
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              // For mobile devices (up to 640px)
              640: {
                slidesPerView: 2, // Show 2 logos on mobile devices
              },
              // For tablets (up to 768px)
              768: {
                slidesPerView: 3, // Show 3 logos on tablets
              },
              // For larger screens (1024px and up)
              1024: {
                slidesPerView: 4, // Show 4 logos on larger screens (default)
              },
            }}
          >
            {companies.map((company) => (
              <SwiperSlide key={company.id}>
                <figure className="flex justify-center items-center">
                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Button */}
        <div className="elementor-column elementor-col-100 flex justify-center mt-8">
          <button className="elementor-button elementor-size-sm bg-primary-main text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
            <span className="elementor-button-text">Know Course Fees</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentsPlacedAt;

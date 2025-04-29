
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const CompaniesCarousel = () => {
//   const companies = [
//     { name: "GROUPM", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GROUPM-150x150.webp" },
//     { name: "Jio Studios", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Jio-Studios-150x150.webp" },
//     { name: "Hotstar", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Hotstar-150x150.webp" },
//     { name: "Foxy Moron", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Foxy-Moron-150x150.webp" },
//     { name: "Publicis Groupe", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Publicis-Groupe-150x150.webp" },
//     { name: "Tonic Worldwide", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Tonic-Worldwide-150x150.webp" },
//     { name: "KINNECT", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/KINNECT-150x150.webp" },
//     { name: "TATA", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/TATA-150x150.webp" },
//     { name: "Starbuzz", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Starbuzz-150x150.webp" },
//     { name: "GOZOOP", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GOZOOP-150x150.webp" },
//     { name: "Fork Media Group", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Fork-Media-Group-150x150.webp" },
//     { name: "MediaDonuts", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/MediaDonuts-150x150.png" },
//     { name: "LEO BURNET", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LEO-BURNET-150x150.png" },
//     { name: "CAPGEMINI", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/CAPGEMINI-150x150.webp" },
//     { name: "L&T", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LT-150x150.webp" },
//   ];

//   return (
//     <section className="elementor-section elementor-top-section flex justify-center items-center my-32">
//       <div className="elementor-container elementor-column-gap-default max-w-6xl">
//         {/* Heading */}
//         <div className="elementor-column elementor-col-100">
//           <h3 className="elementor-heading-title text-center text-2xl font-medium mb-8">
//             Companies They Work At:
//           </h3>
//         </div>

//         {/* Carousel */}
//         <div className="elementor-column elementor-col-100">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={3} // Default for large screens
//             navigation={{
//               prevEl: ".swiper-button-prev",
//               nextEl: ".swiper-button-next",
//             }}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               // For screens up to 640px (mobile)
//               640: {
//                 slidesPerView: 2, // Show 2 items per view on mobile screens
//               },
//               // For tablets (screens up to 768px)
//               768: {
//                 slidesPerView: 3, // Show 3 items per view on tablets
//               },
//               // For larger screens (1024px and up)
//               1024: {
//                 slidesPerView: 4, // Show 4 items per view on larger screens
//               },
//             }}
//           >
//             {companies.map((company, index) => (
//               <SwiperSlide key={index}>
//                 <figure className="flex justify-center items-center">
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="w-24 h-24 object-contain"
//                     loading="lazy"
//                   />
//                 </figure>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompaniesCarousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CompaniesCarousel = () => {
  const companies = [
    { name: "GROUPM", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GROUPM-150x150.webp" },
    { name: "Jio Studios", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Jio-Studios-150x150.webp" },
    { name: "Hotstar", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Hotstar-150x150.webp" },
    { name: "Foxy Moron", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Foxy-Moron-150x150.webp" },
    { name: "Publicis Groupe", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Publicis-Groupe-150x150.webp" },
    { name: "Tonic Worldwide", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Tonic-Worldwide-150x150.webp" },
    { name: "KINNECT", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/KINNECT-150x150.webp" },
    { name: "TATA", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/TATA-150x150.webp" },
    { name: "Starbuzz", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Starbuzz-150x150.webp" },
    { name: "GOZOOP", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GOZOOP-150x150.webp" },
    { name: "Fork Media Group", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Fork-Media-Group-150x150.webp" },
    { name: "MediaDonuts", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/MediaDonuts-150x150.png" },
    { name: "LEO BURNET", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LEO-BURNET-150x150.png" },
    { name: "CAPGEMINI", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/CAPGEMINI-150x150.webp" },
    { name: "L&T", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LT-150x150.webp" },
  ];

  return (
    <section className="elementor-section elementor-top-section flex justify-center items-center my-16 md:my-32 px-4">
      <div className="elementor-container elementor-column-gap-default max-w-6xl w-full">
        {/* Heading */}
        <div className="elementor-column elementor-col-100">
          <h3 className="elementor-heading-title text-center text-xl md:text-2xl font-medium mb-6 md:mb-8">
            Companies They Work At:
          </h3>
        </div>

        {/* Carousel */}
        <div className="elementor-column elementor-col-100 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20} // Reduced on mobile
            slidesPerView={3}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30
              },
            }}
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <figure className="flex justify-center items-center p-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain" // Smaller on mobile
                    loading="lazy"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation buttons with larger touch area for mobile */}
          <div className="swiper-button-prev !w-10 !h-10 !mt-0 !-left-2 md:!-left-4 after:!text-sm md:after:!text-base"></div>
          <div className="swiper-button-next !w-10 !h-10 !mt-0 !-right-2 md:!-right-4 after:!text-sm md:after:!text-base"></div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesCarousel;
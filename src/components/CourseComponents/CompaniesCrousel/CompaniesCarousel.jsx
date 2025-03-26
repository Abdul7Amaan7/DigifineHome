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
//             slidesPerView={3}
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
//               640: {
//                 slidesPerView: 3,
//               },
//               768: {
//                 slidesPerView: 4,
//               },
//               1024: {
//                 slidesPerView: 5,
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

//           {/* Navigation Arrows */}
//           {/* <div className="swiper-button-prev">
//             <svg
//               aria-hidden="true"
//               className="e-font-icon-svg e-eicon-chevron-left"
//               viewBox="0 0 1000 1000"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
//             </svg>
//           </div> */}
//           {/* <div className="swiper-button-next">
//             <svg
//               aria-hidden="true"
//               className="e-font-icon-svg e-eicon-chevron-right"
//               viewBox="0 0 1000 1000"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
//             </svg>
//           </div> */}
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
    <section className="elementor-section elementor-top-section flex justify-center items-center my-32">
      <div className="elementor-container elementor-column-gap-default max-w-6xl">
        {/* Heading */}
        <div className="elementor-column elementor-col-100">
          <h3 className="elementor-heading-title text-center text-2xl font-medium mb-8">
            Companies They Work At:
          </h3>
        </div>

        {/* Carousel */}
        <div className="elementor-column elementor-col-100">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3} // Default for large screens
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
              // For screens up to 640px (mobile)
              640: {
                slidesPerView: 2, // Show 2 items per view on mobile screens
              },
              // For tablets (screens up to 768px)
              768: {
                slidesPerView: 3, // Show 3 items per view on tablets
              },
              // For larger screens (1024px and up)
              1024: {
                slidesPerView: 4, // Show 4 items per view on larger screens
              },
            }}
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <figure className="flex justify-center items-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-24 object-contain"
                    loading="lazy"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CompaniesCarousel;

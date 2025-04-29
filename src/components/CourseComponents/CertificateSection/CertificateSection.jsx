
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const CertificateSection = ({
//   title = "Master's degree in AI & DS, JGU",
//   subtitlePart1 = "Earn Your Valuable",
//   subtitleHighlight = "Master's Degree and Recognition",
//   paragraph = "Earn over 10 globally recognized & international certifications after course completion",
//   certificates = [
//     {
//       id: 1,
//       image: "https://digifine.in/wp-content/uploads/2021/12/4-2-212x300-1-1.jpeg",
//       title: "Master’s in Artificial Intelligence and Data Science",
//       description: "Widely recognised and valued Master’s in Artificial Intelligence and Data Science from JGU with alumni status",
//     },
//     {
//       id: 2,
//       image: "https://digifine.in/wp-content/uploads/2021/12/4-2-212x300-1-1.jpeg",
//       title: "Microsoft Certificate",
//       description: "Earn a Professional Certificate in Master's in Artificial Intelligence and Data Science",
//     },
//   ],
// }) => {
//   return (
//     <section id="Certificate">
//       <div className="flex flex-col xs:px-5 my-28 max-w-6xl w-full mx-auto md:gap-12 xs:gap-7">
//         {/* Header Section */}
//         <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-2">
//           <h2 className="font-semibold text-center text-sm text-greyscale-1 md:tracking-tight xs:tracking-tight md:mb-2 whitespace-nowrap capitalize">
//             {title}
//           </h2>
//           <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
//             <p className="font-semibold text-4xl tracking-tight gap-2 whitespace-break-spaces">
//               {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
//             </p>
//           </div>
//           <p className="text-sm text-greyscale-2 mt-3">{paragraph}</p>
//         </div>

//         {/* Certificate Carousel */}
//         <div className="slider-container relative">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1} // Default view for smaller screens
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
//                 slidesPerView: 1, // Show 1 slide per view on mobile screens
//               },
//               // For tablets (screens up to 768px)
//               768: {
//                 slidesPerView: 2, // Show 2 slides per view on tablets
//               },
//               // For larger screens (1024px and up)
//               1024: {
//                 slidesPerView: 2, // Show 2 slides per view on larger screens as well
//               },
//             }}
//           >
//             {certificates.map((certificate, index) => (
//               <SwiperSlide key={certificate.id}>
//                 <div className="md:flex-row flex-col flex md:h-48 h-auto md:gap-5 gap-6 xs:mt-9 md:mt-0">
//                   {/* Certificate Image */}
//                   <div className="md:min-w-36 md:max-w-72 md:min-h-48 xs:min-h-56 xs:max-h-80 max-h-96 md:w-auto md:my-0">
//                     <img
//                       src={certificate.image}
//                       alt={certificate.title}
//                       className="w-full h-full object-cover rounded-lg cursor-pointer"
//                       loading="lazy"
//                     />
//                   </div>

//                   {/* Certificate Details */}
//                   <div className="flex flex-col md:gap-3 xs:gap-2 md:w-64">
//                     <p className="md:text-xl md:tracking-tight xs:tracking-tight text-lg font-medium text-greyscale-main">
//                       {certificate.title}
//                     </p>
//                     <p className="md:tracking-tight xs:tracking-tight font-normal text-sm text-greyscale-2 md:h-28 overflow-hidden">
//                       {certificate.description}
//                     </p>
//                   </div>

//                   {/* Certificate Number */}
//                   <p className="opacity-80 md:tracking-tight text-4xl font-medium text-primary-main">
//                     {String(index + 1).padStart(2, "0")}
//                   </p>
//                 </div>
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

// export default CertificateSection;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CertificateSection = ({
  title = "Master's degree in AI & DS, JGU",
  subtitlePart1 = "Earn Your Valuable",
  subtitleHighlight = "Master's Degree and Recognition",
  paragraph = "Earn over 10 globally recognized & international certifications after course completion",
  certificates = [
    {
      id: 1,
      image: "https://digifine.in/wp-content/uploads/2021/12/4-2-212x300-1-1.jpeg",
      title: "Master's in Artificial Intelligence and Data Science",
      description: "Widely recognised and valued Master's in Artificial Intelligence and Data Science from JGU with alumni status",
    },
    {
      id: 2,
      image: "https://digifine.in/wp-content/uploads/2021/12/4-2-212x300-1-1.jpeg",
      title: "Microsoft Certificate",
      description: "Earn a Professional Certificate in Master's in Artificial Intelligence and Data Science",
    },
  ],
}) => {
  return (
    <section id="Certificate" className="overflow-hidden">
      <div className="flex flex-col xs:px-4 md:px-0 px-6 my-14 md:my-28 max-w-6xl w-full mx-auto md:gap-12 gap-6">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-start w-full md:gap-0 gap-2">
          <h2 className="font-semibold text-left md:text-center text-sm text-greyscale-1 tracking-tight md:mb-2">
            {title}
          </h2>
          <div className="w-full">
            <p className="font-semibold text-2xl md:text-4xl tracking-tight">
              {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
            </p>
          </div>
          <p className="text-sm text-greyscale-2 mt-2 md:mt-3">{paragraph}</p>
        </div>

        {/* Certificate Carousel */}
        <div className="slider-container relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
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
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40
              },
            }}
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={certificate.id} className="pb-10">
                <div className="flex flex-col md:flex-row h-auto md:h-48 gap-4 md:gap-5">
                  {/* Certificate Image - Improved for mobile */}
                  <div className="w-full md:w-36 md:min-w-36 md:max-w-72 h-auto md:h-full aspect-[3/4]">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-contain rounded-lg cursor-pointer"
                      loading="lazy"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="flex flex-col flex-1 md:gap-3 gap-2 md:max-w-[280px]">
                    <p className="text-lg md:text-xl tracking-tight font-medium text-greyscale-main">
                      {certificate.title}
                    </p>
                    <p className="tracking-tight font-normal text-sm text-greyscale-2 md:h-28">
                      {certificate.description}
                    </p>
                  </div>

                  {/* Certificate Number */}
                  <p className="opacity-80 tracking-tight text-4xl font-medium text-primary-main md:block hidden">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
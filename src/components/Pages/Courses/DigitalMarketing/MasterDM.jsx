import {react,lazy} from 'react'
import {Breadcrumb,CourseCard,ProgramOverview,ProgramIntroduction,MyComponent,DownloadButton,ComparePrograms,
  CompaniesCarousel,CertificateSection,CardSection,
} from '../../../index'

import { AcademicCapIcon, CodeIcon, ChartBarIcon } from '@heroicons/react/solid'; // Example for heroicons


const StudentsPlacedAt = lazy(() => import("../../../CourseComponents/StudentPlacedAt/StudentsPlacedAt"));
const HandsOnDataProgram = lazy(() => import("../../../CourseComponents/HandsOnDataProgram/HandsOnDataProgram"));
const FAQsSection = lazy(() => import("../../../CourseComponents/FAQsSection/FAQsSection"));
const ProjectsSection = lazy(()=>import("../../../CourseComponents/ProjectSection/ProjectsSection"));
const YtVideo =lazy(()=>import("../../../Container/YtVIdeo"));
const CurriculumSection = lazy(()=>import("../../../CourseComponents/CurriculumSection/CurriculumSection"))
const TabSection = lazy(()=>import("../../../CourseComponents/DigitalMarketingTabSection/TabSection"))
const OPJAlumniTestimonials = lazy(()=>import("../../../CourseComponents/OPJAluminiTestimonials/OPJAluminiTestimonials"))

const faqs = [
  {
    tabLabel: "PG in Digital Marketing",
    faqs: [
      {
        question: "How long does it take to do the Digital Marketing Graduate Course in Vashi, Navi Mumbai?",
        answer:
          "Digifine’s Postgraduate Degree in Digital Marketing is a comprehensive 12-months program that focuses on equipping you with relevant knowledge and skills through classroom training as well as internship opportunities. With this Digital Marketing Graduate Course in Vashi, Navi Mumbai, you can master key concepts both theoretically and practically while working on several projects to build a dynamic skillset. Not only do you earn multiple ISO certifications by the end of your PG in Digital Marketing, but you also get 100% assured placement at top agencies.",
      },
      {
        question: "What is the syllabus of Digifine Digital Marketing Graduate Course in Vashi, Navi Mumbai?",
        answer:
          "Digifine Academy’s PG in Digital Marketing comprises an in-depth curriculum that covers both the basic as well as advanced concepts of digital marketing. It also includes a lot of AI-based, industry-relevant tools so that you can become an expert in the field by the end of your Digital Marketing Graduate Course in Vashi, Navi Mumbai. Here, you also get to learn some unique modules like Television Planning (BARC), Programmatic Media Buying, OTT Advertising, Data Analytics and more!",
      },
      {
        question: "Is the Digifine PG in Digital Marketing online or offline?",
        answer:
          "The Postgraduate Degree in Digital Marketing from Digifine can be done in both online and offline modes. Classroom training for this is available in the form of Digital Marketing Courses in Vashi, Navi Mumbai as well as Andheri.",
      },
      {
        question: "What certifications will I get after completing the Digifine PG in Digital Marketing?",
        answer:
          "After completing Digifine’s Digital Marketing Graduate Course in Vashi, Navi Mumbai, you get a chance to earn more than 10 certifications that are globally valid.",
      },
      {
        question: "Is the PG in Digital Marketing difficult?",
        answer:
          "None of Digifine Academy’s Digital Marketing Courses in Vashi, Navi Mumbai are necessarily too hard or easy. The difficulty level entirely depends on how much interest you possess in the subject and how well the trainers are able to guide you. With your dedication, this Postgraduate Degree in Digital Marketing can be completed masterfully with the help of hands-on training and expert mentorship.",
      }
    ],
  },
  {
    tabLabel: "Eligibility for the Course",
    faqs: [
      {
        question: "Anyone with a keen interest in learning digital marketing concepts and practices can apply for Digifine Academy’s Digital Marketing Graduate Course in Vashi, Navi Mumbai.",
        answer: "You should dedicate 10–12 hours per week to succeed.",
      },
      {
        question: "Do I need any prior degree, technical knowledge or marketing background to apply for this PG in Digital Marketing?",
        answer: "Digifine is a well-known institute that offers Digital Marketing Courses in Vashi, Navi Mumbai to everyone, irrespective of their previous background. You do not need any specific degree, knowledge or background to be able to apply for this PG in Digital Marketing. Whether you are a complete fresher to the industry, a student, a working professional, an experienced person with marketing background, or someone who simply has a keen interest in learning, Digifine’s Digital Marketing Graduate Course in Vashi, Navi Mumbai is open to all!",
      }
    ],
  },
  {
    tabLabel: "Career after PG in Digital Marketing",
    faqs: [
      {
        question: "Is digital marketing a good career option?",
        answer: "Absolutely! Even before you have completed the full Digital Marketing Graduate Course in Vashi, Navi Mumbai offered by Digifine Academy, you can get access to some amazing career opportunities at renowned agencies. You can become a digital marketing executive, media planner, SEO executive, performance marketer, programmatic ads expert, etc.!",
      },
      {
        question: "What salary can I get after completing Digital Marketing Courses in Vashi, Navi Mumbai?",
        answer: "After completing your PG in Digital Marketing from Digifine, you can expect an average salary of anywhere between 2.5 to 5.5 LPA, and even higher packages depending on your acquired skills and interview performance.",
      }
    ],
  },
  {
    tabLabel: "PG in Digital Marketing Fees and Duration",
    faqs: [
      {
        question: "What is the Digifine PG in Digital Marketing?",
        answer: "Digifine Academy’s PG in Digital Marketing course is for the duration of approximately 12 months.",
      },
      {
        question: "How can I pay PG in Digital Marketing fees?",
        answer: "Digifine is a certified institute that offers value-for-money Digital Marketing Courses in Vashi, Navi Mumbai. The fees for this Postgraduate Degree in Digital Marketing can be paid entirely together, in 2 in-house installments, or in no-interest EMIs for up to 11 months.",
      }
    ],
  }
];

const cards = [
  {
    imageSrc: "/images/Icons/mentorship.webp",
    title: "1. Enroll",
    description: "Kickstart your digital marketing journey by registering for our career-focused program!",
  },
  {
    imageSrc: "/images/Icons/goal.webp",
    title: "2. Get Trained",
    description: "Acquire key digital marketing skills from highly experienced trainers through a practical training approach!",
  },
  {
    imageSrc: "/images/Icons/job-interview.webp",
    title: "3. Assessments",
    description: "Solve real-world case studies, get global industry exposure and work on challenging projects!",
  },
  {
    imageSrc: "/images/Icons/check-list.webp",
    title: "4. Mock Interview",
    description: "Become job-ready with the right confidence, knowledge and etiquette with our panel of interviewers!",
  },
  {
    imageSrc: "/images/Icons/check-list.webp",
    title: "5. Get Placed",
    description: "Secure your career with 100% Assured Placement at top digital marketing companies in India and abroad!",
  }
];

  const customContent = [
    {
      content: [
        {
          heading: "Digital Marketing",
          items: ["Introduction ", "Understanding digital marketing platforms", "Why digital marketing?", "Difference between digital marketing & traditional marketing","Concepts and theories of digital marketing"]
        }
      ]
    },
    {
      content: [
        {
          heading: "Google Ads",
          items: ["Learning Keyword Research and Media Planning", "creating Display Ads", "Remarketing campaigns", "and understanding Shopping Network.","Search Network",
"Display Network",
"Video Network",
"App Network Ads",
"Shopping Ads",
"Remarketing/Conversion"]
        }
      ]
    },
    {
      content: [
        {
          heading: "Social Media Marketing",
          items: [
            "Understanding major Social Media channels, Social Media best practices and techniques for optimizing Social Media handles.",
            "Facebook Marketing",
            "Instagram Marketing",
            "LinkedIn Marketing",
            "Twitter Marketing",
            "Snapchat Marketing",
            "Social Media Optimization"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Email Marketing",
          items: [
            "Understanding usage of Email as a promotional tool for a business, learning to set up and use best industry tools and creating professional campaigns.",

            "Setting up Mailchimp account",
            "Generating an audience",
            "Creating mail campaigns",
            "Testing and designing",
            "Reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Online Reputation Management",
          items: [
            "Learning influence of a positive reputation on a business, how to manage a business’s reputation online and best practices for maximum consumer engagement",
            "Overview of Online Reputation Management",
            "Platforms to manage ORM",
            "Case studies",
            "Tools used",
            "Assignments"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Search Engine Optimization",
          items: [
            "Learning SEO best practices based on latest industry and technological requirements, understanding organic search and significance of search engine page rankings.",
            "How search engines work",
            "Keyword Research",
            "Search console/Webmasters",
            "On-Page SEO",
            "Off-Page SEO"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Google Analytics",
          items: [
            "Measuring and tracking advertising campaigns across Google Inventory and implementing best practices with the help of insights gained.",

            "Google Analytics Setup",
            "Google Analytics Interface",
            "Measuring campaigns",
            "Tracking campaigns",
            "Reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Content Marketing/Ad Scripting",
          items: [
            "Learning the importance of content marketing as an advertising strategy, types of content a business can create, understanding and implementing content psychology optimum practices.",

            "Understanding difference between content marketing and Ad scripting",
            "Writing psychology",
            "Layout psychology",
            "Layout writing",
            "Story telling technique"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Whatsapp Marketing",
          items: [
            "Using WhatsApp as a tool for marketing, best WhatsApp Marketing strategies, techniques for WhatsApp Marketing",
            "Importance of WhatsApp Marketing",
            "Tools required for WhatsApp Marketing",
            "Sending WhatsApp messages in bulk",
            "WhatsApp Marketing Reporting System"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Landing Page Technique",
          items: [
            "Understanding significance of Landing Pages, Landing Page creation and management, Landing Pages best practices for capturing leads.",
            "Introduction to Landing Page",
            "Do’s and Don’ts of Landing Page Creation",
            "Building a Landing Page which converts",
            "Landing Page Funnel"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Influencer Marketing",
          items: [
            "Influencer Marketing overview and best strategies to improve engagement on social media platforms and boost conversions through Influencer partnerships.",

            "How to map right influencer",
            "How to connect with influencers",
            "Brand collaboration briefing",
            "Influencer marketing campaign",
            "Influencer marketing reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Mobile Marketing",
          items: [
            "Understanding significance of Mobile Marketing, creating effective campaigns, best practices to capture maximum consumers through Mobile Ads, tracking and analyzing campaigns.",
            "Mobile Marketing ads on social media and Google Ads",
            "Tracking mobile marketing performance",
            "Mobile marketing campaign activation",
            "Mobile marketing reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Word Press",
          items: [
            "Learning to create structured and professional websites using the most used industry software, setting up and customizing websites, using plugins and effective techniques to engage and capture consumers.",
            "Understanding Domain Name and Domain Hosting",
            "WordPress Setup",
            "Theme customization",
            "Plugins",
            "WooCommerce Setup",
            "Creating Landing Pages",
            "Order Management System"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "HTML & CSS",
          items: [
"Learning to create structured and professional websites using the most used industry software, setting up and customizing websites, using plugins and effective techniques to engage and capture consumers.",
            "Understanding Domain Name and Domain Hosting",
            "WordPress Setup",
            "Theme customization",
            "Plugins",
            "WooCommerce Setup",
            "Creating Landing Pages",
            "Order Management System"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Programmtic Media Buying",
          items: [
            "Learning influence of a positive reputation on a business, how to manage a business’s reputation online and best practices for maximum consumer engagement",
            "Overview of Online Reputation Management",
            "Platforms to manage ORM",
            "Case studies",
            "Tools used",
            "Assignments"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Strategic Management",
          items: [
            "Learning SEO best practices based on latest industry and technological requirements, understanding organic search and significance of search engine page rankings.",
            "How search engines work",
            "Keyword Research",
            "Search console/Webmasters",
            "On-Page SEO",
            "Off-Page SEO"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Brand Management",
          items: [
            "Measuring and tracking advertising campaigns across Google Inventory and implementing best practices with the help of insights gained.",

            "Google Analytics Setup",
            "Google Analytics Interface",
            "Measuring campaigns",
            "Tracking campaigns",
            "Reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "E-commerce",
          items: [
            "Learning HTML codes for creating and structuring websites, learning CSS, best HTML practices for Search Engine Optimization.",

            "Getting started with Visual Studio",
            "HTML Format",
            "HTML Tags",
            "CSS",
            "Linking HTML with CSS",
            "Creating a HTML website",
            "Hosting the website"
          ]
        }
      ]
    },


    // Add other trimesters
  ];


  const customUpGradFeatures = [
    "✅ 100% Placement Guarantee at top companies & agencies",
    "✅ Google certifications & ISO certifications that are globally recognized for key digital marketing modules",
    "✅ Internship guarantee before course completion",
    "✅ Highly experienced in-house trainers",
    "✅ Guest lecturers with years of industry expertise",
    "✅ Training on Unique modules like Television Planning (BARC),Programmatic Media Buying, OTT Advertising, Data Analytics, Strategic Management, Website Development, E-Commerce & Brand Management",
    "✅ Practical Training with Live Projects, Case Studies and Regular Assignments",
    "✅ Post-Course Support for students even after course completion",
    "✅ 300+hours of Intense Course Training",
    "✅ International Certification from IBM Institute in Berlin, Germany",

  ];

  const customOtherCoursesFeatures = [
    "❌ No placement guarantee",
    "❌ No internship guarantee, especially before course is done",
    "❌ No globally recognized certifications",
    "❌ No guest lectures from industry experts",
    "❌ No unique, relevant and upgraded syllabus with modules beyond basic digital marketing",
    "❌ Not enough assessments or hands-on training",
    "❌ No post-course support after training",
    "❌ Not enough hours of training",
    "❌ No international certification",
    // Add more features
  ];

  const customCertificates = [
    {
      id: 1,
      image: "/images/certificates/crf.webp",
      title: "Digifine Graduate",
      description: "Digifine Graduate certification from Digifine Academy",
    },
    {
      id: 2,
      image: "/images/certificates/DataScience.webp",
      title: "Data Science",
      description: "Data Science certification from Digifine Academy",
    },
    {
      id: 3,
      image: "/images/certificates/DigitalMarketing.webp",
      title: "Digital Marketing",
      description: "Digital Marketing certification from Digifine Academy",
    },
    {
      id: 4,
      image: "/images/certificates/DigifineGraduate.webp",
      title: "Digifine Graduate",
      description: "Digifine Graduate certification from Digifine Academy",
    },
    {
      id: 5,
      image: "/images/certificates/ecommercemanagement.webp",
      title: "E-commerce Management",
      description: "E-commerce Management certification from Digifine Academy",
    },
    {
      id: 6,
      image: "/images/certificates/ProgrammaticMediauBuying.webp",
      title: "Programmatic Media Buying",
      description: "Programmatic Media Buying certification from Digifine Academy",
    },
    {
      id: 7,
      image: "/images/certificates/brandmanagement.webp",
      title: "Brand Management",
      description: "Brand Management certification from Digifine Academy",
    },
    {
      id:8,
      image: "/images/certificates/WebDevelopement.webp",
      title: "Web Development",
      description: "Web Development certification from Digifine Academy",
    },
  ];

  const customTools = [
    {
      icon: <AcademicCapIcon className="text-dark-red w-6 h-6" />,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 1, Custom Tool 2",
    },
    {
      icon: <CodeIcon className="text-dark-red w-6 h-6" />,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 3, Custom Tool 4",
    },
    {
      icon: <ChartBarIcon className="text-dark-red w-6 h-6" />,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 3, Custom Tool 4",
    },
  ];

function MasterDM() {
    return (
      <>
        <main className="relative"> {/* Add positioning context */}
          <div className="mb-spacing4 my-4"> {/* Only affects breadcrumb */}
            <Breadcrumb
              items={[
                { name: 'Home', url: '/' },
                { name: 'Courses', url: '' },
                { name: 'Master In Digital Marketing', url: '/masterdm' }
              ]}
            />
          </div><CourseCard
            title="PG in Digital Marketing Course in"
            highlightText="Vashi, Navi Mumbai"
            description="Start your journey as a digital marketing professional with an expert-designed PG in Digital Marketing. Build an impressive career by joining one of the best Digital Marketing Courses in Vashi, Navi Mumbai with placement guarantee at top agencies."
            emi="Placements"
            startDate="Industry Experts"
            duration="Curriculum"
            appliedText=""
            contactNumber=""
            imageUrl="/images/banner-image/Untitled-design-23.webp"
//   universityName="O.P.Jindal Global University"
/>

<ProgramOverview
  titleHighlight='PG in Digital Marketing Course in Vashi, Navi Mumbai'
  paragraphs={[
    "India’s first PG in Digital Marketing with placement guarantee before course completion"
  ]}
  highlights={[
    {
      title: "Certifications",
      content: "Get over 10 globally recognized & international certifications after course completion"
    },
    {
      title: "Trainers",
      content: "Learn from trainers with years of experience in the industry"
    },
    {
      title: "Modules",
      content: "Get access to unique modules taught nowhere else in the country"
    },
    {
      title: "Live Projects",
      content: "Work on live projects, interactive assignments and real-world case studies"
    },
    {
      title: "Placement Guarantee",
      content: "Get theoretical and practical knowledge with thorough hands-on training"
    },
    // ... other highlights
  ]}
/>
<ProgramIntroduction
title="PG in Digital Marketing Course in Vashi, Navi Mumbai"
subtitlePart1="PG in Digital Marketing Course in"
subtitleHighlight="Vashi, Navi Mumbai"
  stats={[
    { value: "35+", label: "Industry tools" },
    { value: "50+", label: "Live Projects" },
    { value: "300+", label: "Hours training" }
  ]}
  features={[
    "1. India’s first PG in Digital Marketing with placement guarantee before course completion",
    "2. Get over 10 globally recognized & international certifications after course completion",
    "3. Learn from trainers with years of experience in the industry",
    "4. Get access to unique modules taught nowhere else in the country",
    "5. Work on live projects, interactive assignments and real-world case studies",
    "6. Get theoretical and practical knowledge with thorough hands-on training"
  ]}
  imageSrc="/images/banner-image/lpa.png"
/>
<MyComponent/>
<DownloadButton/>
<CurriculumSection 
title="Syllabus of Digifine PG in Digital Marketing Course in Vashi, Navi Mumbai" 
subtitlePart1="PG in Digital Marketing Course Syallbus For"
subtitleHighlight="Vashi, Navi Mumbai" 
tabTitlePattern={(index) => ["Digital Marketing", "Google Ads", "Social Media Marketing","Email Marketing","Online Reputation Management","Search Engine Optimization","Google Analytics","Contetn Marketing/Ad Scripting","Whatsapp Marketing","Landing Page Technique","Influencer Marketing","Mobile Marketing","Word Press","HTML & CSS","Programmtic Media Buying","Strategic Management","Brand Management","E-commerce"][index]}
curriculumContent={customContent} />  
<ComparePrograms
        upGradFeatures={customUpGradFeatures}
        otherCoursesFeatures={customOtherCoursesFeatures}
        button1Text="Download Syllabus"
        button2Text="Apply Now"
      />
      <CompaniesCarousel />
      <CertificateSection
        title="Certifications"
        subtitlePart1="Earn Professional"
        subtitleHighlight="Certifications"
        paragraph="
        Earning globally recognized certifications from Google, Digifine Academy as well as an international certificate from IBM Institute in Berlin, Germany by the end of your Digital Marketing Graduate Course in Vashi, Navi Mumbai. Add tremendous value to your resume and become a high-paying professional!
        "
        certificates={customCertificates}
      />
      <ProgramOverview
  titleHighlight='PG in Digital Marketing Course in Vashi, Navi Mumbai'
  paragraphs={[
    "India’s first PG in Digital Marketing with placement guarantee before course completion"
  ]}
  highlights={[
    {
      title: "Certifications",
      content: "Get over 10 globally recognized & international certifications after course completion"
    },
    {
      title: "Trainers",
      content: "Learn from trainers with years of experience in the industry"
    },
    {
      title: "Modules",
      content: "Get access to unique modules taught nowhere else in the country"
    },
    {
      title: "Live Projects",
      content: "Work on live projects, interactive assignments and real-world case studies"
    },
    {
      title: "Placement Guarantee",
      content: "Get theoretical and practical knowledge with thorough hands-on training"
    },
    // ... other highlights
  ]}
/>
<HandsOnDataProgram
        title="Custom Hands-on Program"
        subtitlePart1="Master Custom"
        subtitleHighlight="Data Tools"
        tools={customTools}
        imageSrc="/images/toolslogo/tools.webp"
        imageAlt="Custom Tools Logo Collage"
      />
      <TabSection/>
      <StudentsPlacedAt />
      <YtVideo/>
      <ProjectsSection />
      <OPJAlumniTestimonials/>
      <CardSection cardData={cards} />
      <DownloadButton/>
      <FAQsSection
      sectionTitle="Frequently Asked Questions"
      faqData={faqs}
      />

        </main>
      </>
      
    )
  }

export default MasterDM
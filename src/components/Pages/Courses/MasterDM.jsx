import {react,lazy} from 'react'
import {Breadcrumb,CourseCard,ProgramOverview,ProgramIntroduction,MyComponent,DownloadButton,ComparePrograms,
  CompaniesCarousel,CertificateSection,CardSection,
} from '../../index'

import { AcademicCapIcon, CodeIcon, ChartBarIcon } from '@heroicons/react/solid'; // Example for heroicons


const StudentsPlacedAt = lazy(() => import("../../CourseComponents/StudentPlacedAt/StudentsPlacedAt"));
const HandsOnDataProgram = lazy(() => import("../../CourseComponents/HandsOnDataProgram/HandsOnDataProgram"));
const FAQsSection = lazy(() => import("../../CourseComponents/FAQsSection/FAQsSection"));
const ProjectsSection = lazy(()=>import("../../CourseComponents/ProjectSection/ProjectsSection"));
const YtVideo =lazy(()=>import("../../Container/YtVIdeo"));
const CurriculumSection = lazy(()=>import("../../CourseComponents/CurriculumSection/CurriculumSection"))



  const customContent = [
    {
      content: [
        "Custom prep content for Page 2...",
        {
          heading: "Custom Topics Covered",
          items: ["Custom Topic 1", "Custom Topic 2", "Custom Topic 3"]
        }
      ]
    },
    {
      content: [
        "Custom Trimester I content...",
        {
          heading: "Custom Topics Covered",
          items: ["Custom Topic A", "Custom Topic B", "Custom Topic C"]
        }
      ]
    },
    {
      content: [
        "Custom Trimester II content...",
        {
          heading: "Custom Topics Covered",
          items: ["Custom Topic A", "Custom Topic B", "Custom Topic C"]
        }
      ]
    },
    {
      content: [
        "Custom Trimester III content...",
        {
          heading: "Custom Topics Covered",
          items: ["Custom Topic A", "Custom Topic B", "Custom Topic C"]
        }
      ]
    }
    // Add other trimesters
  ];

  const customUpGradFeatures = [
    "✅ Custom feature 1 for upGrad",
    "✅ Custom feature 2 for upGrad",
    "✅ Custom feature 1 for upGrad",
    "✅ Custom feature 2 for upGrad",
    "✅ Custom feature 1 for upGrad",
    "✅ Custom feature 2 for upGrad",
    // Add more features
  ];

  const customOtherCoursesFeatures = [
    "❌ Custom feature 1 for other courses",
    "❌ Custom feature 2 for other courses",
    "❌ Custom feature 1 for other courses",
    "❌ Custom feature 2 for other courses",
    "❌ Custom feature 1 for other courses",
    "❌ Custom feature 2 for other courses",
    // Add more features
  ];

  const customCertificates = [
    {
      id: 1,
      image: "/images/certificates/crf.webp",
      title: "Custom Certificate 1",
      description: "Description for Custom Certificate 1",
    },
    {
      id: 2,
      image: "/images/certificates/crf.webp",
      title: "Custom Certificate 2",
      description: "Description for Custom Certificate 2",
    },
    {
      id: 3,
      image: "/images/certificates/crf.webp",
      title: "Custom Certificate 2",
      description: "Description for Custom Certificate 2",
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
            title="Master’s Degree in"
            highlightText="Artificial Intelligence and Data Science"
            description="Earn India’s first 1-Year Master’s in AI & Data Science from India’s #1 Private University (QS World University Rankings 2023) and boost your career with exclusive Microsoft Certification Credentials!"
            emi="Starting at INR 6,625"
            startDate="Mar 31, 2025"
            duration="12 Months"
            appliedText="Hurry! 104 people have already applied in the last 1 month"
            contactNumber="1800 210 2020"
            imageUrl="/images/banner-image/Siddharth-Mehta-CEO.webp"
//   universityName="O.P.Jindal Global University"
/>

<ProgramOverview
  paragraphs={[
    "Join India’s first one-year Master’s program...",
    "Designed by distinguished Padma Shri awardee...",
    "Throughout the program..."
  ]}
  highlights={[
    {
      title: "Hours of Learning",
      content: "Engage in 500+ hours of learning through live sessions..."
    },
    // ... other highlights
  ]}
/>
<ProgramIntroduction
  stats={[
    { value: "20+", label: "New Projects" },
    { value: "600+", label: "Learning Hours" },
    { value: "20+", label: "Development Tools" }
  ]}
  features={[
    "New Feature 1",
    "New Feature 2",
    // ... other features
  ]}
  imageSrc="/images/banner-image/OPJ (1)-a5334fb8c98940cc9c0b560804a58a3b.svg"
/>
<MyComponent/>
<DownloadButton/>
<CurriculumSection curriculumContent={customContent} />
<ComparePrograms
        upGradFeatures={customUpGradFeatures}
        otherCoursesFeatures={customOtherCoursesFeatures}
        button1Text="Download Custom Brochure"
        button2Text="Contact Expert"
      />
      <CompaniesCarousel />
      <CertificateSection
        title="Custom Certificate Section"
        subtitlePart1="Earn Your Custom"
        subtitleHighlight="Certificates"
        certificates={customCertificates}
      />
      <ProgramOverview
  paragraphs={[
    "Join India’s first one-year Master’s program...",
    "Designed by distinguished Padma Shri awardee...",
    "Throughout the program..."
  ]}
  highlights={[
    {
      title: "Hours of Learning",
      content: "Engage in 500+ hours of learning through live sessions..."
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
      <StudentsPlacedAt />
      <YtVideo/>
      <ProjectsSection />
      <CardSection/>
      <DownloadButton/>
      <FAQsSection/>

        </main>
      </>
      
    )
  }

export default MasterDM
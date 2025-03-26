import React from "react";

const ProjectCard = ({ imageSrc, title, description, skills, additionalSkillsCount }) => {
  return (
    <div className="relative rounded-xl xs:rounded-2xl bg-greyscale-white border border-greyscale-5 shadow-hard-normal hover:border-primary-main h-full">
      <div className="flex flex-col md:p-spacing4 xs:p-spacing20 gap-spacing8 md:h-330px xs:h-301px cursor-pointer h-full">
        <div className="flex flex-col xs:gap-spacing20 h-186">
          <img
            alt="image"
            loading="lazy"
            width="50"
            height="full"
            decoding="async"
            className="md:w-94px xs:w-107px h-full xs:h-45px object-cover my-2"
            src={imageSrc}
            draggable="false"
            style={{ color: "transparent" }}
          />
          <div className="flex flex-col justify-start items-start self-stretch gap-spacing4 xs:h-126px md:h-32">
            <div className="flex flex-col self-stretch gap-spacing4">
              <p className="font-medium text-title2 md:-tracking-0.24 xs:-tracking-0.175 line-clamp-1">
                {title}
              </p>
            </div>
            <div className="flex flex-col self-stretch relative gap-spacing8">
              <p className="self-stretch text-bodySmall text-left font-450 text-greyscale-2 md:-tracking-0.16 xs:-tracking-0.14 line-clamp-4">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border border-greyscale-6 w-full"></div>
        <div className="flex flex-col self-stretch relative xs:gap-spacing10 md:gap-spacing12 xs:h-54px" id="skills-wrapper">
          <p className="md:text-labelNormal font-medium text-left text-greyscale-main pb-2 xs:text-captionNormal md:-tracking-0.14 xs:-tracking-0.122">
            Skills learned
          </p>
          <div className="flex gap-spacing4">
            {skills.map((skill, index) => (
              <p
                key={index}
                className="inline-flex justify-center items-center text-center font-light text-sm opacity-80  rounded-20 text-labelSmall md:-tracking-0.122 xs:-tracking-0.105 border skill-tag !text-black whitespace-nowrap -tracking-0.105 md:-tracking-0.12 !text-captionSmall h-full py-2 px-5 rounded-full"
              >
                {skill}
              </p>
            ))}
            {additionalSkillsCount > 0 && (
              <p className="inline-flex justify-center items-center text-center font-light text-sm opacity-80  rounded-20 text-labelSmall md:-tracking-0.122 xs:-tracking-0.105 border skill-tag !text-black whitespace-nowrap -tracking-0.105 md:-tracking-0.12 !text-captionSmall h-full py-2 px-5 rounded-full">
                +{additionalSkillsCount}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
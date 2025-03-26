import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="xs:border md:border-0 xs:rounded-10 md:rounded-none xs:pt-spacing16 xs:px-spacing20 md:py-0 my-4 md:px-0 w-full h-full border-greyscale-5 xs:pb-spacing16 xs:mb-spacing20 md:mb-0 block">
      <button
        className="w-full flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative xs:gap-spacing20 md:gap-spacing40 text-black xs:tracking-0.14 md:-tracking-0.2"
        onClick={onClick}
      >
        <h4 className="flex-grow text-left xs:text-bodySmall md:text-title2 xs:font-450 md:font-semibold text-xl md:-tracking-0.2 xs:-tracking-0.14">
          {question}
        </h4>
        <i className={`xs:text-icon-xl md:text-icon-lg ${
  isOpen ? "fas fa-minus" : "fas fa-plus"
}`}></i>
      </button>
      <div
        className={`text-greyscale-1 md:text-bodySmall xs:text-captionNormal font-450 md:-tracking-0.18 xs:-tracking-0.122 overflow-auto show-scroll transition-all ease-in-out duration-300 ${
          isOpen ? "max-h-600px" : "max-h-0"
        }`}
      >
        <div className="pr-spacing10">
          <div className="md:max-w-735px xs:-tracking-0.122 md:-tracking-0.18">
            <p className="CertTheme__paragraph" dir="ltr" data-mode="standard">
              {answer}
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-greyscale-5 my-spacing2 xs:hidden md:block"></div>
    </div>
  );
};

export default FAQItem;
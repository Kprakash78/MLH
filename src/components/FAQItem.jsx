import { useState } from "react";

/**
 * FAQItem — A single accordion row
 * @param {string} question - The FAQ question text
 * @param {string} answer   - The FAQ answer text
 */
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const id = question.replace(/\s+/g, "-").toLowerCase();
  const buttonId = `faq-btn-${id}`;
  const answerId = `faq-answer-${id}`;

  return (
    <div
      className={`border-4 border-t-0 border-[#192221] bg-[#f4f1e8] transition-colors duration-200 first:border-t-0 last:border-b-0 ${
        isOpen ? "faq-item--open" : ""
      }`}
    >
      {/* Question trigger */}
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-4.5 py-4 text-left transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[#ef4b42] min-[769px]:px-7 min-[769px]:py-7"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={buttonId}
      >
        <span className="font-['Barlow_Semi_Condensed',sans-serif] text-sm leading-normal tracking-[-0.82px] text-[#192221] uppercase min-[769px]:text-[33px]">
          {question}
        </span>

        {/* Plus / minus icon */}
        <span
          className={`flex shrink-0 select-none items-center justify-center font-['Barlow_Semi_Condensed',sans-serif] text-[32px] leading-none tracking-[-0.82px] text-[#192221] transition-transform duration-250 min-[769px]:text-[42px] ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Answer panel */}
      <div
        id={answerId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="m-0 px-4.5 pb-4 font-['Barlow',sans-serif] text-sm leading-[1.75] tracking-[0.01em] text-[#2e3a39] min-[769px]:px-7 min-[769px]:pb-6.5 min-[769px]:text-[21px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;

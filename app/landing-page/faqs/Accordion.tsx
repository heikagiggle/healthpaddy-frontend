"use client";
import { useState } from "react";
import { AccordionMinus } from "../../components/icons/accordion-minus";
import { AccordionPlus } from "../../components/icons/accordion-plus";

interface FaqsProps {
  title: string;
  answer: string;
}

const Accordion = ({ title, answer }: FaqsProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full py-2 ${
          accordionOpen ? "border-b-1" : "border-b"
        }`}
      >
        <span className="text-[#333333] text-[15px] md:text-[19px] font-[600]">
          {title}
        </span>
        {accordionOpen ? <AccordionMinus /> : <AccordionPlus />}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className="overflow-hidden border-b py-2 text-black text-opacity-70 text-[13px] md:text-sm w-[87%]"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};

export default Accordion;

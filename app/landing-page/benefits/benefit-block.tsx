import React from "react";

type BenefitBlockProps = {
  image: string;
  title: string;
  benefit: string;
};

export default function BenefitBlock ({ image, title, benefit } : BenefitBlockProps){
  return (
    <div className="flex flex-col text-left">
      <img src={image} alt={title} className="w-full h-auto object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold text-black mb-2">{title}</h2>
      <p className="text-base text-[#181818] text-opacity-70">{benefit}</p>
    </div>
  );
};



import React from "react";
import BenefitBlock from "./benefit-block";

const Benefits = () => {
  
  const benefitData = [
    {
      image:
        "https://files.skillpaddy.com/public/image/customized-1727340573970.png",
      title: "Customized Meal Plans",
      benefit:
        "We calculate your daily calorie needs and create meal plans based on your health goals, lifestyle, and bio-data.",
    },
    {
      image:
        "https://files.skillpaddy.com/public/image/convenience-1727340693648.png",
      title: "Convenience",
      benefit:
        "We help you do the heavy-lifting by planning your meals in advance, on your own terms, so when it's time to eat, all the decisions are already made.",
    },
    {
      image:
        "https://files.skillpaddy.com/public/image/chat-1721228709395.png",
      title: "Instant Access",
      benefit:
        "Easily access your meal plans and other features directly through our interactive WhatsApp bot. Stay on track with seamless support, anytime, anywhere.",
    },
    {
      image:
        "https://files.skillpaddy.com/public/image/results-1727341068295.png",
      title: "Result Driven Nigerian Meals!",
      benefit:
        "Our meal plans comprises everyday Nigerian foods that have been expertly curated to support your health journey and deliver proven results.",
    },
  ];

  return (
    <section
      id="features"
      className="container mx-auto my-12 px-6 sm:px-4 md:px-10 lg:px-8"
    >
      <div className="flex justify-center items-center text-center mb-6 md:px-10 lg:px-44">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[700] xl:leading-[77px] md:leading-[65px] sm:leading-[50px] leading-[40px] lg:px-0 md:px-12 sm:px-10 px-3">
          Explore some key benefits from using HealthPaddy.
        </h1>
      </div>
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {benefitData.map((item, index) => (
          <BenefitBlock
            key={index}
            image={item.image}
            title={item.title}
            benefit={item.benefit}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;

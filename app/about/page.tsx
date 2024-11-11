"use client";
import { RightArrow } from "../components/icons/right-arrow";
import { coreValues } from "../utils/constants";
import { people } from "../utils/constants";
import Image from "next/image";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 mx-[2rem]">
      <div>
        <h1 className="text-xl  md:text-[38px] text-center font-bold md:leading-[45px] leading-[25px] px-10 md:mx-40 lg:mx-72">
          Our Mission
        </h1>
        <p className="text-center py-2 font-medium">
          Promote proactive healthcare and nutrition for Africans
        </p>
      </div>

      <div className="flex lg:flex-row justify-center sm:gap-x-[5rem] gap-y-7 my-10 flex-col">
        <div className="lg:w-[580px] flex flex-col gap-y-4">
          <p>
            Hi! We are HealthPaddy, a digital health technology company with a
            mission to promote proactive healthcare and nutrition for Africans.
          </p>
          <p>
            For too long, healthcare in Africa has been reactive. A large number
            of people only seek help when they are already ill, often due to
            inefficient systems and limited access to care.
          </p>
          <p>
            At HealthPaddy, we believe that by focusing on small, sustainable
            lifestyle changes people can significantly improve their quality of
            life and prevent illness.
          </p>
          <p>
            By combining technology with professional guidance, we provide
            solutions that empower individuals to take control of their health.
          </p>
          <p>
            Our approach focuses on food, using meal plans based on local dishes
            to support healthier choices. We are committed to democratizing
            healthy living for all Africans making wellness accessible and
            achievable for as many lives as possible
          </p>
        </div>
        <div className="lg:w-[580px] relative w-full max-w-md">
          <div className="overflow-hidden rounded-lg ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {people.map((person, index) => (
                <div key={index} className="min-w-full ">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={100}
                    className="w-full object-contain h-[300px]"
                  />

                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold">{person.name}</h2>
                    <p className="text-sm text-gray-500">{person.jobTitle}</p>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex gap-x-1 items-center justify-center px-4 py-2 bg-[#0E5A61] text-white rounded-full"
                    >
                      <Image
                        src={
                          "https://files.skillpaddy.com/public/image/linkedin-1729504977570.png"
                        }
                        alt={person.name}
                        width={50}
                        height={50}
                      />
                      <RightArrow className="mr-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-20">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden w-full lg:w-[300px] flex flex-col pt-3 mx-[2rem] lg:mx-0 "
          >
            <div className="relative w-full">
              <Image
                src={value.image}
                alt={value.title}
                width={100}
                height={100}
                className="px-4"
              />
            </div>
            <div className="flex flex-col p-5 flex-grow cursor-pointer">
              <div className="flex-1">
                <h3 className="text-2xl mb-4 font-semibold hover:text-[#00735C]">
                  {value.title}
                </h3>
                <p className="text-sm text-[#181818] pb-4">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

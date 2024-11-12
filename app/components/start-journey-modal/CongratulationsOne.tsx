import { ContainerProps } from "../../utils/type";
import { Button } from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

const CongratulationsOne = ({ onPrevStep }: ContainerProps) => {
  return (
    <div className="flex flex-col gap-y-4 ">
      <div className=" flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center w-[18rem] shadow-lg p-3">
          <h1 className="text-center text-[#43A5AE] border-b border-[#F9F9F9] pb-1">
            Calorie Summary
          </h1>
          <div className="flex justify-between items-center py-2">
            <ul className="text-[#979797] text-sm flex flex-col gap-y-2">
              <li>Weight Goal</li>
              <li>Calorie Need</li>
              <li>Body Mass Index</li>
              <li>Target Weight</li>
              <li>Duration</li>
            </ul>
            <ul className="font-semibold text-sm flex flex-col gap-y-2">
              <li className="text-[#43A5AE]">Lose Weight</li>
              <li> 1400 cal</li>
              <li>Moderate</li>
              <li>80kg</li>
              <li>8 Months</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" text-[#181818] text-center flex flex-col gap-y-2">
        <h3 className="sm:text-lg mt-2 lg:text-2xl font-semibold leading-snug">
          Congratulations, We’ve successfully calculated your calorie target!
        </h3>

        <p className="text-sm font-medium pt-2">
          To lose 12 KG over the next 6 months, at your current level of
          activity and weight, you&apos;ll need to consume:{" "}
          <span className="text-[#6343AE]">1400 cal per day</span>
        </p>

        <div className="text-[#43A5AE] my-1 font-medium">
          <p className="cursor-pointer">Generate free meal plan</p>

          <p className="text-[#18181880] text-xs">or</p>
          <Link href="/free-meal-plans">
            <p>Get access to 30 day meal plan</p>
          </Link>
        </div>

        <div className="my-1 flex flex-col justify-center items-center my">
          <h1 className="text-[#18181899] text-sm">Share</h1>
          <div className="flex gap-x-3 items-center mt-3">
            <a href={"https://wa.me/15550548825/?text=hi"}>
              <Image
                src={
                  "https://files.skillpaddy.com/public/image/facebook-1728651338133.png"
                }
                alt="facebook"
                width={32}
                height={32}
              />
            </a>
            <a
              href={
                "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhealthpaddy.io"
              }
            >
              <Image
                src={
                  "https://files.skillpaddy.com/public/image/instagram-1728651693984.png"
                }
                alt="instagram"
                width={32}
                height={32}
              />
            </a>
            <a
              href={
                "https://www.instagram.com/share/?url=https%3A%2F%2Fhealthpaddy.io"
              }
            >
              <Image
                src={
                  "https://files.skillpaddy.com/public/image/x-1728651842121.png"
                }
                alt="X"
                width={32}
                height={32}
              />
            </a>
            <a
              href={
                "https://www.instagram.com/share/?url=https%3A%2F%2Fhealthpaddy.io"
              }
            >
              <Image
                src={
                  "https://files.skillpaddy.com/public/image/whatsapp-1728651987141.png"
                }
                alt="whatsapp"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-[#0000004D] mt-10 pt-4 px-0 mb-1">
        <Button
          className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
          onClick={onPrevStep}
        >
          Back
        </Button>
        <Link href="/price">
          <Button>Proceed</Button>
        </Link>
      </div>
    </div>
  );
};

export default CongratulationsOne;

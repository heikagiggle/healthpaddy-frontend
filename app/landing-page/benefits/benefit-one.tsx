import CheckMarkIcon from "../../components/icons/check-mark-icon";
import Image from "next/image";
import Link from "next/link";

export default function BenefitOne() {
  return (
    <section id="features">
      <div className="pt-12 md:pb-16 pb-12">
        <div className="flex justify-center items-center text-center">
          <h1 className="text-[26px] sm:text-[40px] md:text-[50px] xl:text-[60px] 2xl:text-[40px] font-[700] mb-4 xl:leading-[77px] md:leading-[65px] sm:leading-[50px] leading-[40px] lg:px-0 md:px-12 sm:px-10 px-3">
            Explore some key benefits from using HealthPaddy.
          </h1>
        </div>

        <div
          className="flex flex-col justify-center items-center sm:px-[10%] md:px-[12%] gap-y-12
        md:space-y-0 md:flex-row mt-10"
        >
          {/* benefits one */}
          <div className="flex flex-col gap-y-4 mx-6 md:w-1/2">
            <div className="flex justify-between gap-x-2">
              <div>
                <CheckMarkIcon />
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[20px] mb-1 font-bold ">
                  Body Mass Index (BMI) Calculator
                </h3>
                <p className="text-[14px] lg:text-[15px] leading-[24px]">
                  Determine your BMI and corresponding health status by entering
                  your weight and height.
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-x-2">
              <div>
                <CheckMarkIcon />
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[20px] mb-1 font-bold ">
                  Calorie Allowance Calculator
                </h3>
                <p className="text-[14px] lg:text-[15px] leading-[24px]">
                  Use our FREE calculator to determine how many calories you
                  should be eating daily.
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-x-2">
              <div>
                <CheckMarkIcon />
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[20px] mb-1 font-bold ">
                  Result Driven Nigerian Meal Plans!
                </h3>
                <p className="text-[14px] lg:text-[15px] leading-[24px]">
                  Get a Nigerian meal timetable (carbs included 😉) based on
                  your calculated calorie allowance!
                </p>
              </div>
            </div>
            <Link
              href={"https://wa.me/15550548825/?text=hi"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-start pt-6">
                <button className="px-5 py-2.5 bg-buttonColor text-white text-lg rounded-full hover:opacity-90 transition-opacity duration-300">
                  Get started
                </button>
              </div>
            </Link>
          </div>

          {/* image */}
          <div className="flex flex-col items-center mx-10 md:w-1/2 ">
            <Image
              src="https://files.skillpaddy.com/public/image/right-image-1721228177591.png"
              alt="food-tray"
              width="800"
              height="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

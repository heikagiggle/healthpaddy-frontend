import { healthgoal } from "../../utils/constants";
import Image from "next/image";
import StartJourneyModal from "../../components/start-journey-modal/page";

const Goals = () => {
  return (
    <section className="my-[4rem]">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8 px-5 pt-[2rem] pb-[1rem] leading-snug lg:leading-tight">
        Customized Nigerian Meal Plans for{" "}
        <span className="hidden lg:inline">
          <br />
        </span>{" "}
        Every Health Goal
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {healthgoal.map((goal, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 w-full lg:w-[300px] hover:shadow-2xl flex flex-col pt-3 mx-[2rem] lg:mx-0 "
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={goal.image}
                alt={goal.title}
                layout="fill"
                objectFit="cover"
                className="px-4"
              />
            </div>
            <div className="flex flex-col p-5 flex-grow cursor-pointer">
              <div className="flex-1">
                <h3 className="text-2xl mb-4 font-semibold hover:text-[#00735C]">
                  {goal.title}
                </h3>
                <p className="text-sm text-gray-600 pb-4">{goal.description}</p>
              </div>
              <StartJourneyModal
                trigger={
                  <button className="mt-auto inline-block text-sm w-full text-white px-6 py-3 text-center rounded-full font-semibold duration-300 bg-black hover:bg-[#00735C]">
                    <p>Start Your Journey</p>
                  </button>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;

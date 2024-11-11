"use client";
import Accordion from "./Accordion";

const faqs = [
  {
    title: "How do you calculate my calorie allowance?",
    answer:
      "All you need to do is enter your gender, age, weight, height and level of physical activity into our platform, and watch our calculator do all the heavy lifting!",
  },
  {
    title: "What does the meal plan include?",
    answer:
      "It includes calorie-specific meal tables with multiple breakfast, lunch, dinner and snack options. Including the corresponding recipes and expert guidelines to get the best results!",
  },
  {
    title: "What kind of foods are included?",
    answer:
      "Your plan will include your everyday Nigerian meals, from yam with eggs, to jollof rice, and eba with soup.",
  },
  {
    title: "Is the meal plan free?",
    answer: `After you get your calorie allowance calculated for free, we’ll be providing you the details of A
DAY of your meal plan completely FREE!. <a href="https://wa.me/15550548825/?text=hi" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Start your Journey</a> <br> <br>You can get the complete monthly plan for N15,000, N40,000 (quarterly plan), N30,000 (customized plan). <a href="https://wa.me/15550548825/?text=hi" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Click here</a> to learn more about the available plans.`,
  },
  {
    title: "How will I measure my food?",
    answer:
      "We’ll provide you specific portions sizes using photos, food measuring cups or food weighing scale.",
  },
  {
    title: "Are your meal plans only for weight loss?",
    answer:
      "Not at all. Your calculated calorie allowance would be based on the goal you select, whether weight loss, maintenance or weight gain. Your meal plan will then be created based on that number.",
  },
  {
    title: "How do I get my meal plan after I buy it?",
    answer:
      "You’ll be able to download your plan as a pdf file via your email, and you’ll also be able to access it via our WhatsApp chatbot",
  },
];

const Faqs = () => {
  return (
    <div className="py-20 bg-[#F5F7F5] min-h-screen flex justify-center">
      <div className="flex flex-col justify-center w-full px-4 sm:px-8 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <div className="flex justify-center  pb-4">
          <h2 className="text-dark-300 text-[26px] md:text-[38px] xl:text-[48px] font-semibold text-center">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 w-full">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

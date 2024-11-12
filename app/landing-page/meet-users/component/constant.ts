"use client";

export type LinkPropsObject = {
  key: string;
  name: string;
};

export type LinkProp = Array<LinkPropsObject>;

export const users: LinkProp = [
  { name: "Blessing", key: "blessing" },
  { name: "Ava", key: "ava" },
  { name: "Olivia", key: "olivia" },
];


export const customers = [
  {
    name: "Aisha",
    age: 33,
    energyNeeds: "1400 kcal per day",
    healthGoal: "Weight Loss",
    imageUrl: "https://files.skillpaddy.com/public/image/user-one-1729178792583.png" ,
    review:"I've lost 7kg in 8 weeks, and I've not even been exercising 🤭 . I love my body now, clothes fit better, I'm not panting when I climb the stairs. But I'm not done o, I'll continue after my wedding. Thank you so much, your meal plans are the bommmmmb 😋"
  },
  {
    name: "Bankole",
    age: 39,
    energyNeeds: "1800 kcal per day",
    healthGoal: "Weight Loss & Reduce blood pressure ",
    imageUrl: "https://files.skillpaddy.com/public/image/user-three-1729179188481.png",
    review:"My tummy looks so much better, it's really going down. I've moved down 2 belt holes in the past 7 weeks. My wife and even my colleagues are noticing too, so it's  very encouraging. Even my doctor was surprised to see my blood pressure numbers at my last visit All in all, I'm glad it's working, thank you so much!"
  },
  {
    name: "Precious",
    age: 28,
    energyNeeds: "1500 kcal per day",
    healthGoal: "Weight Loss",
    imageUrl: "https://files.skillpaddy.com/public/image/user-two-1729179003962.png",
    review:"It's only been my first week, and I've lost 1.5 inches from my waist and 1 inch from my hip! Plus I'm really enjoying my meal plan, it doesn't feel like I'm on a diet 😂 and my body feels lighter now 🥰. Can't wait for what'll happen in month 2!"
  }
];
import { useState } from 'react';
import { customers } from './constant';
import TabButton from './testimonial-tab-button';
import UserProfile from './user-profile';

const TestimonialTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="text-center p-8">
      <div className="flex flex-col items-center gap-5">
        <p className="text-xs py-2 px-3 border rounded-2xl text-[#0F172A] shadow-xl w-[6rem]">
          Testimonials
        </p>
        <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-[600]">Meet Our Users</h1>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        {customers.map((user, index) => (
          <TabButton 
            key={index} 
            index={index} 
            active={activeTab === index} 
            onClick={() => setActiveTab(index)}
            label={user.name}
          />
        ))}
      </div>

      {/* User Profile Display */}
      <UserProfile user={customers[activeTab]} />
    </div>
  );
};

export default TestimonialTabs;

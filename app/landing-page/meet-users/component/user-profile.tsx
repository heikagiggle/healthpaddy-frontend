import Image from "next/image";
import UserDetails from "./user-details";

interface UserProfileProps {
  user: {
    name: string;
    age: number;
    energyNeeds: string;
    healthGoal: string;
    imageUrl: string;
    review: string;
  };
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="relative flex justify-center mt-10">
      <div className="relative w-64 h-64 sm:w-56 sm:h-56 md:w-64 md:h-64">
        {/* User Image */}
        <div className="relative mx-auto rounded-full w-full h-[248px] overflow-hidden border-4 border-gray-300">
          <Image
            src={user.imageUrl}
            alt={user.name}
            width={800}
            height={800}
            className="w-full h-full object-contain"
          />
        </div>

        {/* User Details positioned around the circle */}
        <div className="absolute top-[20px] right-[-12px] transform -translate-x-full">
          <div className="absolute top-[-40px] right-[6rem]">
            <UserDetails label="Name" value={user.name} color="#FFA806" />
          </div>

          {/* SVG for Name */}
          <svg
            width="200"
            height="40"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200 1.86206H111.41C105.364 1.86206 95.41 10.8164 95.41 21.8621V28.8621C95.41 33.9078 88.491 38.8621 82.445 38.8621C56.201 38.8621 30 38.8621 0 38.8621"
              stroke="#1D10B5"
              stroke-width="2"
            />
          </svg>
        </div>

        {/* Energy Needs */}
        <div className="absolute top-[20px] left-0 transform translate-x-full">
          <div className="absolute top-[-40px] right-[-2rem]">
            <UserDetails
              label="Energy Needs"
              value={user.energyNeeds}
              color="#FFA806"
            />
          </div>

          {/* SVG for Energy Needs */}
          <svg
            width="200"
            height="40"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.86206H100C105.039 1.86206 110.993 10.8164 110.993 21.8621V28.8621C110.993 33.9078 115.947 38.8621 120.993 38.8621H200"
              stroke="#FFA806"
              stroke-width="2"
            />
          </svg>
        </div>

        {/* Age */}
        <div className="absolute bottom-0 right-3 transform -translate-x-full -z-10">
          <div className="absolute top-[-40px] right-[6.5rem]">
            <UserDetails label="Age" value={user.age} color="#FFA806" />
          </div>

          {/* SVG for Age */}
          <svg
            width="200"
            height="40"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200 1.86206H111.959C103.913 1.86206 98.959 10.8164 98.959 21.8621V28.8621C98.959 33.9078 94.005 38.8621 90.959 38.8621H0"
              stroke="#FF4406"
              stroke-width="2"
            />
          </svg>
        </div>

        {/* Health Goal */}
        <div className="absolute bottom-0 transform translate-x-full -z-10">
          <div className="absolute top-[-40px] -right-3">
            <UserDetails
              label="Health Goal"
              value={user.healthGoal}
              color="#FFA806"
            />
          </div>

          {/* SVG for Health Goal */}
          <svg
            width="200"
            height="40"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.86206H100.722C107.767 1.86206 120.722 10.8164 120.722 21.8621V28.8621C120.722 33.9078 125.676 38.8621 130.722 38.8621H200"
              stroke="#119807"
              stroke-width="2"
            />
          </svg>
        </div>

        <div className="mt-[4rem] max-w-full text-center px-4">
          <p className="text-sm text-gray-700 italic">{user.review}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

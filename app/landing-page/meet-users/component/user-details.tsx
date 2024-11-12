import { cn } from "@/lib/utils";

interface UserDetailsProps {
  label: string;
  value: string | number;
  color: string;
  className?: string;
}

const UserDetails = ({ label, value, color, className }: UserDetailsProps) => {
  return (
    <div className="text-left">
      <h4 className={cn(`text-${color}-600 font-semibold`, className)}>{label}</h4>
      <p className="text-gray-700 text-sm ">{value}</p>
    </div>
  );
};

export default UserDetails;

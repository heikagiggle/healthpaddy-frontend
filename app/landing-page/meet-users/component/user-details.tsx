import { cn } from "../../../utils/helpers/cn";
interface UserDetailsProps {
  label: string;
  value: string | number;
  color: string;
  className?: string;
}

const UserDetails = ({ label, value, color, className }: UserDetailsProps) => {
  return (
    <div
      className={cn(
        "text-left",
        className
      )}
    >
      <h4 className={`text-${color}-600 font-semibold`}>{label}</h4>
      <p className="text-gray-700 text-sm">{value}</p>
    </div>
  );
};

export default UserDetails;

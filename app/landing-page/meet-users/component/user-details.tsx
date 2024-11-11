interface UserDetailsProps {
  label: string;
  value: string | number;
  color: string;
}

const UserDetails = ({ label, value, color }: UserDetailsProps) => {
  return (
    <div className="text-right">
      <h4 className={`text-${color}-600 font-semibold`}>{label}</h4>
      <p className="text-gray-700 text-sm ">{value}</p>
    </div>
  );
};

export default UserDetails;

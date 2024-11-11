interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  index: number;
}

const TabButton = ({ label, active, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-x-2 px-3 py-2 text-base font-[500] text-[#0E5A61] transition ease-in-out duration-200 ${active ? '!text-white bg-[#0E5A61] p-2.5 rounded-[40px]' : ''}`}
    >
      {label}
    </button>
  );
};

export default TabButton;


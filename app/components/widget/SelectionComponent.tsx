import { Controller, useFormContext } from "react-hook-form";

interface SelectionOption {
  label: string; 
  description?: string; 
  value: string;
}

interface SelectionProps {
  options: SelectionOption[];
  label: string;
  name: string;
}

export const SelectionComponent = ({
  options,
  label,
  name,
}: SelectionProps) => {
  const { control } = useFormContext(); 

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="my-4">
          <label className="block text-gray-700 text-left font-semibold mb-2">
            {label}
          </label>
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => field.onChange(option.value)}
                className={`w-full text-left p-3 border font-semibold text-base rounded-md ${
                  field.value === option.value
                    ? "border-[#43A5AE] text-[#43A5AE]"
                    : "border-[#2020204D] text-[#202020]"
                }`}
              >
                {option.label}

                {option.description && (
                  <div className="text-xs text-gray-500">{option.description}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    />
  );
};

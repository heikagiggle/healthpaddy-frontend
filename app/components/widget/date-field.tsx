import { useFormContext, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

interface DateFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
}

export function DateField({ label, name, placeholder, className }: DateFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col space-y-2 w-full ${className}`}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <DatePicker
              id={name}
              selected={field.value ? new Date(field.value) : null}
              onChange={(date) => field.onChange(date ? date.toISOString().split('T')[0] : '')}
              dateFormat="yyyy-MM-dd"
              placeholderText={placeholder}
              className="px-5 py-2 text-sm text-black border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black w-full"
            />
          </FormControl>
          <FormMessage className="text-xs ml-auto" />
        </FormItem>
      )}
    />
  );
}

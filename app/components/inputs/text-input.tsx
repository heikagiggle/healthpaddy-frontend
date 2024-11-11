import { ReactNode } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import { FormInputProps } from './types';
import { InputGroup } from './input-group';
import { cn } from '@/app/utils/helpers/cn';


export function TextInput<T extends FieldValues, TD extends Path<T>>({
  label,
  error,
  handler,
  title,
  className,
  labelClass,
  type,
  ...props
}: FormInputProps<T, TD>) {
  return (
    <div className={'flex w-full flex-col gap-1 text-[#8D8D8D] text-sm'}>
      {label && <p className={cn(labelClass)}>{label}</p>}
      <InputGroup className={className}>
        <input
          type={type ?? 'text'}
          className={'w-full input'}
          {...props}
          {...handler.register(title)}
        />
      </InputGroup>
      {(error || handler.formState.errors[title]?.message) && (
        <small className={'text-red-500 mt-2 duration-100 ease-in'}>
          {error ?? (handler.formState.errors[title]?.message as ReactNode)}
        </small>
      )}
    </div>
  );
}
import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { InputGroup } from './input-group';
import { cn } from '@/app/utils/helpers/cn';



export type FormInputProps<T extends FieldValues, TD extends Path<T>> = {
  handler: UseFormReturn<T>;
  title: TD;
  label?: string;
  error?: ReactNode;
  labelClass?: string;
} & InputHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaInput<T extends FieldValues, TD extends Path<T>>({
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
    <div className={'flex w-full h-full flex-col gap-1 text-[#8D8D8D] text-sm'}>
      {label && <p className={cn(labelClass)}>{label}</p>}
      <InputGroup className={className}>
        <textarea
          className={'w-full resize-none input h-full py-2`'}
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
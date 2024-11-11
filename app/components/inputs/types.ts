import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

export type FormInputProps<T extends FieldValues, TD extends Path<T>> = {
  handler: UseFormReturn<T>;
  title: TD;
  label?: string;
  error?: ReactNode;
  labelClass?: string;
} & InputHTMLAttributes<HTMLInputElement>;
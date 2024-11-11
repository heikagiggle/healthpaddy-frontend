import { InputHTMLAttributes, ReactNode } from 'react';

export type FormInputProps = {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type FileInputProps = FormInputProps & {
  accept?: string;
};

export type FileData = { file?: File; url?: string; uploading?: boolean };

export type SelectItem<T> = {
  label?: ReactNode;
  value: T;
  keywords: string[];
};

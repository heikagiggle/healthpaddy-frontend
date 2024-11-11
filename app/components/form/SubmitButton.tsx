'use client';

import { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '../Button/Button';
import { Slot } from '@radix-ui/react-slot';

type Props = ComponentProps<typeof Button>;

export function SubmitButton(props: Props) {
  const form = useFormContext();

  return (
    <Slot>
      <Button
        {...props}
        type={'submit'}
        loading={form.formState.isSubmitting}
        disabled={form.formState.isSubmitting}
      />
    </Slot>
  );
}

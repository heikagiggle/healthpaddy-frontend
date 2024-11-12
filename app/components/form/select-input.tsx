'use client';

import { CaretSortIcon } from '@radix-ui/react-icons';
import { Key, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from "../../../lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { InputWrapper } from './input-wrapper';
import { SelectItem } from './types';

type FormProps<T extends Key> = {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  items: Array<SelectItem<T>>;
  contentHeight?: string;
  defaultValue?: string;
  isMulti?: boolean;
  isLoading?: boolean;
};

export function SelectInput<T extends Key>(props: FormProps<T>) {
  const form = useFormContext<{ [key: string]: T | string }>();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form?.control}
      name={props.name}
      render={({ field }) => (
        <FormItem
          className={cn('flex flex-col space-y-2 w-full', props.className)}
        >
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <Popover open={open} onOpenChange={setOpen} modal={true}>
            <PopoverTrigger>
              <FormControl>
                <InputWrapper
                  className={cn(
                    'justify-between py-3 px-5',
                    !field.value && 'text-muted-foreground'
                  )}
                  role={'combobox'}
                  focus={open}
                >
                  {field.value
                    ? props.items.find((item) => item.value === field.value)
                        ?.label
                    : props.placeholder}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </InputWrapper>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent>
              <Command>
                <CommandInput placeholder={'Enter search'} />
                <CommandEmpty>Not found ..</CommandEmpty>
                <CommandGroup>
                  <CommandList style={{ maxHeight: props.contentHeight }}>
                    {props.items?.map((item) => (
                      <CommandItem
                        value={item.keywords.join(', ')}
                        key={item.value}
                        onSelect={() => {
                          form?.setValue(props.name, item.value, {
                            shouldValidate: true,
                          });
                          setOpen(false);
                        }}
                      >
                        {item?.label}
                      </CommandItem>
                    ))}
                  </CommandList>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage className={'text-xs ml-auto'} />
        </FormItem>
      )}
    />
  );
}
